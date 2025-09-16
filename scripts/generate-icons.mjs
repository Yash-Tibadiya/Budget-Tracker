/**
 * Generate PWA icons (regular and maskable) from /public/logo.png
 * Output:
 *  - public/icons/logo-{192,256,384,512}.png
 *  - public/icons/logo-{192,256,384,512}-maskable.png
 *
 * Requires: sharp
 * Install:  pnpm add -D sharp
 */
import fs from "node:fs";
import path from "node:path";
import url from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));

const SIZES = [192, 256, 384, 512];
const INPUT = path.resolve(__dirname, "../public/logo.png");
const OUT_DIR = path.resolve(__dirname, "../public/icons");

// For maskable icons, we add padding so the important content remains visible
// within the mask safe zone (roughly 80-90%). We'll use ~12.5% padding.
const SAFE_ZONE_RATIO = 0.75; // content area vs full canvas (i.e., 75% content, 25% total padding)

async function ensureOutDir() {
  await fs.promises.mkdir(OUT_DIR, { recursive: true });
}

async function generate() {
  if (!fs.existsSync(INPUT)) {
    console.error(`Source not found: ${INPUT}`);
    process.exit(1);
  }

  await ensureOutDir();

  for (const size of SIZES) {
    // Regular icon: resize to exact square size with transparent background
    const outRegular = path.join(OUT_DIR, `logo-${size}.png`);
    await sharp(INPUT)
      .resize(size, size, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toFile(outRegular);

    // Maskable icon: place the image inside a larger transparent canvas
    // so that important content isn't clipped by masks.
    const contentSize = Math.round(size * SAFE_ZONE_RATIO);
    const outMaskable = path.join(OUT_DIR, `logo-${size}-maskable.png`);

    const resizedBuffer = await sharp(INPUT)
      .resize(contentSize, contentSize, {
        fit: "contain",
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .png()
      .toBuffer();

    const pad = Math.floor((size - contentSize) / 2);

    await sharp({
      create: {
        width: size,
        height: size,
        channels: 4,
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      },
    })
      .composite([{ input: resizedBuffer, left: pad, top: pad }])
      .png()
      .toFile(outMaskable);

    console.log(`Generated: ${path.relative(process.cwd(), outRegular)} and ${path.relative(process.cwd(), outMaskable)}`);
  }

  console.log("Icon generation complete.");
}

generate().catch((err) => {
  console.error(err);
  process.exit(1);
});