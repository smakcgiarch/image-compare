import { build } from "esbuild";
import { copyFile, mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const vendorDir = path.join(projectRoot, "vendor");

await mkdir(vendorDir, { recursive: true });

await build({
  entryPoints: [path.join(projectRoot, "src", "codec-runtime.js")],
  outfile: path.join(vendorDir, "advanced-codecs.js"),
  bundle: true,
  minify: true,
  sourcemap: false,
  legalComments: "linked",
  format: "iife",
  globalName: "AdvancedCodecs",
  platform: "browser",
  target: ["chrome100", "edge100", "firefox100", "safari16"],
});

await copyFile(
  path.join(projectRoot, "node_modules", "libheif-js", "libheif-wasm", "libheif-bundle.js"),
  path.join(vendorDir, "libheif-bundle.js"),
);
await copyFile(
  path.join(projectRoot, "node_modules", "libheif-js", "LICENSE"),
  path.join(vendorDir, "libheif-js.LICENSE"),
);

const packageNames = ["utif", "pako", "hdrify", "libheif-js"];
const notices = ["# Bundled third-party software\n"];

for (const packageName of packageNames) {
  const packagePath = path.join(projectRoot, "node_modules", packageName, "package.json");
  const packageJson = JSON.parse(await readFile(packagePath, "utf8"));
  notices.push(
    `- ${packageJson.name} ${packageJson.version} — ${packageJson.license || "see package"} — ${packageJson.homepage || packageJson.repository?.url || ""}`,
  );
}

notices.push(
  "",
  "The HEIC/HEIF decoder is distributed as a separate, unmodified libheif-js bundle so it can be replaced independently.",
  "All decoding runs locally in the browser; user files are never uploaded by this application.",
  "",
);

await writeFile(path.join(projectRoot, "THIRD_PARTY_NOTICES.md"), notices.join("\n"), "utf8");
