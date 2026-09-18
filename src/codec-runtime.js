import UTIF from "utif";
import { applyToneMapping, chromaticitiesToLinearColorSpace, readExr, readHdr } from "hdrify";
import { deflate } from "pako";
import { FloatType, RGBAFormat } from "three";
import { EXRLoader } from "three/addons/loaders/EXRLoader.js";

const PNG_SIGNATURE = new Uint8Array([137, 80, 78, 71, 13, 10, 26, 10]);
const CRC_TABLE = createCrcTable();

export function decodeTiff(input) {
  const bytes = toUint8(input);
  const buffer = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
  const ifds = UTIF.decode(buffer);
  const page = ifds.find((ifd) => Number(ifd.t256?.[0] ?? 0) > 0 && Number(ifd.t257?.[0] ?? 0) > 0) ?? ifds[0];
  if (!page) throw new Error("TIFF не містить зображення");

  UTIF.decodeImage(buffer, page, ifds);
  const width = Number(page.width ?? page.t256?.[0] ?? 0);
  const height = Number(page.height ?? page.t257?.[0] ?? 0);
  if (!width || !height) throw new Error("TIFF має некоректні розміри");

  const rawRgba = UTIF.toRGBA8(page);
  const orientation = Number(page.t274?.[0] ?? 1);
  const oriented = applyOrientation(rawRgba, width, height, orientation);
  const bits = Math.max(...(page.t258 ?? [8]).map(Number));
  const sourceIcc = page.t34675 ? toUint8(page.t34675) : null;
  const profile = inspectIccProfile(sourceIcc);
  const rgbCompatible = !profile || profile.colorSpace === "RGB";
  const icc = sourceIcc && rgbCompatible ? sourceIcc : null;

  return {
    width: oriented.width,
    height: oriented.height,
    rgba: oriented.rgba,
    bits,
    icc,
    profile,
    colorLabel: profile
      ? rgbCompatible
        ? `ICC: ${profile.name}`
        : `${profile.name} (${profile.colorSpace}, перетворено у RGB)`
      : "Без ICC · припущено sRGB",
    warning: sourceIcc && !rgbCompatible
      ? `Вбудований ${profile.colorSpace}-профіль не можна прикріпити до RGB preview; використано перетворення декодера.`
      : "",
  };
}

export function decodeHdr(input, format) {
  const bytes = toUint8(input);
  if (format === "exr") {
    try {
      return normalizeHdrImage(readExr(bytes), "HDRify");
    } catch (primaryError) {
      try {
        return decodeExrWithThree(bytes);
      } catch (fallbackError) {
        const primaryMessage = errorMessage(primaryError);
        const fallbackMessage = errorMessage(fallbackError);
        throw new Error(`Не вдалося декодувати EXR. HDRify: ${primaryMessage}; Three.js: ${fallbackMessage}`);
      }
    }
  }

  return normalizeHdrImage(readHdr(bytes), "HDRify");
}

function normalizeHdrImage(image, decoder) {
  return {
    width: image.width,
    height: image.height,
    data: image.data,
    metadata: image.metadata ?? {},
    sourceColorSpace: image.linearColorSpace ?? "linear-rec709",
    decoder,
  };
}

function decodeExrWithThree(bytes) {
  const buffer = bytes.buffer.slice(bytes.byteOffset, bytes.byteOffset + bytes.byteLength);
  const parsed = new EXRLoader().setDataType(FloatType).setOutputFormat(RGBAFormat).parse(buffer);
  if (!parsed?.width || !parsed?.height || !(parsed.data instanceof Float32Array)) {
    throw new Error("декодер не повернув Float32 RGBA");
  }
  const chromaticities = parsed.header?.chromaticities;
  return {
    width: parsed.width,
    height: parsed.height,
    data: parsed.data,
    metadata: parsed.header ?? {},
    sourceColorSpace: chromaticitiesToLinearColorSpace(chromaticities ?? {}) ?? "linear-rec709",
    decoder: "Three.js",
  };
}

function errorMessage(error) {
  return error instanceof Error ? error.message : String(error);
}

export function renderHdr(image, exposureEv = 0, toneMapping = "aces") {
  const safeData = new Float32Array(image.data);
  const rgb = applyToneMapping(safeData, image.width, image.height, {
    exposure: 2 ** Number(exposureEv || 0),
    toneMapping,
    metadata: image.metadata,
    sourceColorSpace: image.sourceColorSpace ?? "linear-rec709",
  });
  const rgba = new Uint8Array(image.width * image.height * 4);
  for (let pixel = 0, rgbIndex = 0, rgbaIndex = 0; pixel < image.width * image.height; pixel += 1) {
    rgba[rgbaIndex++] = rgb[rgbIndex++];
    rgba[rgbaIndex++] = rgb[rgbIndex++];
    rgba[rgbaIndex++] = rgb[rgbIndex++];
    const alpha = image.data[pixel * 4 + 3];
    rgba[rgbaIndex++] = Number.isFinite(alpha) ? Math.round(clamp01(alpha) * 255) : 255;
  }
  return rgba;
}

export function encodePngRgba(rgbaInput, width, height, options = {}) {
  const rgba = toUint8(rgbaInput);
  if (rgba.byteLength !== width * height * 4) throw new Error("Некоректний RGBA-буфер");

  const stride = width * 4;
  const scanlines = new Uint8Array((stride + 1) * height);
  for (let y = 0; y < height; y += 1) {
    const rowOffset = y * (stride + 1);
    scanlines[rowOffset] = 0;
    scanlines.set(rgba.subarray(y * stride, (y + 1) * stride), rowOffset + 1);
  }

  const ihdr = new Uint8Array(13);
  const headerView = new DataView(ihdr.buffer);
  headerView.setUint32(0, width, false);
  headerView.setUint32(4, height, false);
  ihdr.set([8, 6, 0, 0, 0], 8);

  const chunks = [makeChunk("IHDR", ihdr)];
  const icc = options.icc ? toUint8(options.icc) : null;
  if (icc?.byteLength) {
    const name = latin1Bytes((options.profileName || "Embedded ICC").slice(0, 79));
    const compressed = deflate(icc, { level: 6 });
    chunks.push(makeChunk("iCCP", concatBytes(name, new Uint8Array([0, 0]), compressed)));
  } else if (options.cicp) {
    chunks.push(makeChunk("cICP", new Uint8Array(options.cicp)));
  } else {
    chunks.push(makeChunk("sRGB", new Uint8Array([0])));
  }
  chunks.push(makeChunk("IDAT", deflate(scanlines, { level: 6 })));
  chunks.push(makeChunk("IEND", new Uint8Array()));
  return new Blob([PNG_SIGNATURE, ...chunks], { type: "image/png" });
}

export function extractHeifColorInfo(input) {
  const bytes = toUint8(input);
  for (let i = 4; i + 12 <= bytes.length; i += 1) {
    if (ascii(bytes, i, 4) !== "colr") continue;
    const start = i - 4;
    const size = readUint32(bytes, start);
    if (size < 12 || start + size > bytes.length) continue;
    const colorType = ascii(bytes, i + 4, 4);
    if (colorType === "prof" || colorType === "rICC") {
      const icc = bytes.slice(i + 8, start + size);
      const profile = inspectIccProfile(icc);
      return {
        icc,
        cicp: null,
        profile,
        colorLabel: profile ? `ICC: ${profile.name}` : "Вбудований ICC",
      };
    }
    if (colorType === "nclx" && i + 15 <= start + size) {
      const primaries = readUint16(bytes, i + 8);
      const transfer = readUint16(bytes, i + 10);
      const matrix = readUint16(bytes, i + 12);
      const fullRange = (bytes[i + 14] & 0x80) !== 0;
      return {
        icc: null,
        cicp: [primaries & 255, transfer & 255, matrix & 255, fullRange ? 1 : 0],
        profile: null,
        colorLabel: `NCLX: ${describePrimaries(primaries)} · ${describeTransfer(transfer)}`,
      };
    }
  }
  return { icc: null, cicp: null, profile: null, colorLabel: "Без профілю · припущено sRGB" };
}

export function inspectIccProfile(input) {
  if (!input) return null;
  const bytes = toUint8(input);
  if (bytes.length < 132) return null;
  const colorSpace = ascii(bytes, 16, 4).trim();
  const pcs = ascii(bytes, 20, 4).trim();
  let name = "Embedded ICC";
  try {
    const tagCount = readUint32(bytes, 128);
    for (let index = 0; index < Math.min(tagCount, 256); index += 1) {
      const record = 132 + index * 12;
      if (record + 12 > bytes.length || ascii(bytes, record, 4) !== "desc") continue;
      const offset = readUint32(bytes, record + 4);
      const size = readUint32(bytes, record + 8);
      if (offset + size > bytes.length || size < 12) continue;
      const type = ascii(bytes, offset, 4);
      if (type === "desc") {
        const length = Math.min(readUint32(bytes, offset + 8), size - 12);
        name = ascii(bytes, offset + 12, Math.max(0, length - 1)).replace(/\0/g, "").trim() || name;
      } else if (type === "mluc" && size >= 28) {
        const length = readUint32(bytes, offset + 20);
        const textOffset = readUint32(bytes, offset + 24);
        const start = offset + textOffset;
        if (start + length <= offset + size) name = utf16Be(bytes.subarray(start, start + length)).trim() || name;
      }
      break;
    }
  } catch {
    // A valid header without a readable description is still useful.
  }
  return { name, colorSpace, pcs, byteLength: bytes.byteLength };
}

function applyOrientation(source, width, height, orientation) {
  if (orientation < 2 || orientation > 8) return { rgba: source, width, height };
  const swap = orientation >= 5;
  const outWidth = swap ? height : width;
  const outHeight = swap ? width : height;
  const output = new Uint8Array(source.length);
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      let dx = x;
      let dy = y;
      if (orientation === 2) [dx, dy] = [width - 1 - x, y];
      else if (orientation === 3) [dx, dy] = [width - 1 - x, height - 1 - y];
      else if (orientation === 4) [dx, dy] = [x, height - 1 - y];
      else if (orientation === 5) [dx, dy] = [y, x];
      else if (orientation === 6) [dx, dy] = [height - 1 - y, x];
      else if (orientation === 7) [dx, dy] = [height - 1 - y, width - 1 - x];
      else if (orientation === 8) [dx, dy] = [y, width - 1 - x];
      const sourceIndex = (y * width + x) * 4;
      const outputIndex = (dy * outWidth + dx) * 4;
      output.set(source.subarray(sourceIndex, sourceIndex + 4), outputIndex);
    }
  }
  return { rgba: output, width: outWidth, height: outHeight };
}

function createCrcTable() {
  const table = new Uint32Array(256);
  for (let n = 0; n < 256; n += 1) {
    let value = n;
    for (let bit = 0; bit < 8; bit += 1) value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
    table[n] = value >>> 0;
  }
  return table;
}

function crc32(bytes) {
  let crc = 0xffffffff;
  for (const byte of bytes) crc = CRC_TABLE[(crc ^ byte) & 0xff] ^ (crc >>> 8);
  return (crc ^ 0xffffffff) >>> 0;
}

function makeChunk(type, dataInput) {
  const data = toUint8(dataInput);
  const typeBytes = latin1Bytes(type);
  const output = new Uint8Array(12 + data.length);
  const view = new DataView(output.buffer);
  view.setUint32(0, data.length, false);
  output.set(typeBytes, 4);
  output.set(data, 8);
  view.setUint32(8 + data.length, crc32(concatBytes(typeBytes, data)), false);
  return output;
}

function concatBytes(...parts) {
  const normalized = parts.map(toUint8);
  const output = new Uint8Array(normalized.reduce((sum, part) => sum + part.length, 0));
  let offset = 0;
  for (const part of normalized) {
    output.set(part, offset);
    offset += part.length;
  }
  return output;
}

function toUint8(value) {
  if (value instanceof Uint8Array) return value;
  if (ArrayBuffer.isView(value)) return new Uint8Array(value.buffer, value.byteOffset, value.byteLength);
  if (value instanceof ArrayBuffer) return new Uint8Array(value);
  return new Uint8Array(value ?? []);
}

function readUint16(bytes, offset) {
  return new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength).getUint16(offset, false);
}

function readUint32(bytes, offset) {
  return new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength).getUint32(offset, false);
}

function ascii(bytes, offset, length) {
  let output = "";
  for (let i = 0; i < length && offset + i < bytes.length; i += 1) output += String.fromCharCode(bytes[offset + i]);
  return output;
}

function latin1Bytes(value) {
  return Uint8Array.from(value, (character) => character.charCodeAt(0) & 0xff);
}

function utf16Be(bytes) {
  let output = "";
  for (let i = 0; i + 1 < bytes.length; i += 2) output += String.fromCharCode((bytes[i] << 8) | bytes[i + 1]);
  return output;
}

function clamp01(value) {
  return Math.min(1, Math.max(0, value));
}

function describePrimaries(value) {
  return ({ 1: "BT.709 / sRGB", 9: "BT.2020", 11: "Display P3 DCI", 12: "Display P3 D65" })[value] ?? `primaries ${value}`;
}

function describeTransfer(value) {
  return ({ 1: "BT.709", 13: "sRGB", 16: "PQ", 18: "HLG" })[value] ?? `transfer ${value}`;
}
