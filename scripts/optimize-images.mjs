import { readdir, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const SRC_DIRS = ["public/images", "public/images/reference", "public/images/stock"];
const OUT_DIR = "src/assets/img";
const MAX_WIDTH = 1000;
const QUALITY = 62;

await mkdir(OUT_DIR, { recursive: true });
await mkdir(".shots", { recursive: true });

const files = [];
for (const dir of SRC_DIRS) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.isFile() && /\.(jpg|jpeg|png)$/i.test(e.name)) {
      files.push(path.join(dir, e.name));
    }
  }
}

const optimized = [];
for (const file of files) {
  const base = path.basename(file, path.extname(file));
  const out = path.join(OUT_DIR, `${base}.jpg`);
  const meta = await sharp(file).metadata();
  await sharp(file)
    .rotate()
    .resize({ width: Math.min(meta.width ?? MAX_WIDTH, MAX_WIDTH), withoutEnlargement: true })
    .jpeg({ quality: QUALITY, mozjpeg: true, progressive: true })
    .toFile(out);
  const s = await stat(out);
  optimized.push({ base, out, kb: Math.round(s.size / 1024), w: meta.width, h: meta.height });
}

console.table(optimized.map((o) => ({ file: o.base, kb: o.kb, dims: `${o.w}x${o.h}` })));

// Contact sheet for visual QA
const tiles = optimized.filter((o) => o.base !== "owner-lookbook");
const TILE_W = 320;
const TILE_H = 400;
const COLS = 5;
const ROWS = Math.ceil(tiles.length / COLS);
const composites = [];
for (let i = 0; i < tiles.length; i++) {
  const buf = await sharp(tiles[i].out)
    .resize({ width: TILE_W, height: TILE_H, fit: "cover" })
    .jpeg({ quality: 70 })
    .toBuffer();
  composites.push({ input: buf, left: (i % COLS) * TILE_W, top: Math.floor(i / COLS) * TILE_H });
}
await sharp({
  create: {
    width: COLS * TILE_W,
    height: ROWS * TILE_H,
    channels: 3,
    background: { r: 16, g: 16, b: 16 },
  },
})
  .composite(composites)
  .jpeg({ quality: 68 })
  .toFile(".shots/contact-sheet.jpg");

console.log("contact sheet written:", tiles.map((t) => t.base).join(", "));
