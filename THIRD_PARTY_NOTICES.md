# Bundled third-party software

- `UTIF.js 3.1.0` — MIT — TIFF decoding.
- `pako 3.0.2` — MIT — zlib compression for color-managed PNG previews.
- `hdrify 1.1.4` — MIT — OpenEXR and Radiance HDR decoding and tonemapping.
- `libheif-js 1.23.2` — LGPL-3.0 — HEIC/HEIF decoding through libheif/WebAssembly.

The HEIC/HEIF decoder is distributed as a separate, unmodified bundle in
`vendor/libheif-bundle.js`, so it can be inspected and replaced independently.
Its license is included in `vendor/libheif-js.LICENSE`.

All decoding runs locally in the browser. The application does not upload user
files or image pixels to any server.
