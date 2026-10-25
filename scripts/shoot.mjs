import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const url = `file://${path.join(root, "dist", "index.html")}`;
const outDir = path.join(root, ".shots");
await mkdir(outDir, { recursive: true });

const browser = await chromium.launch();

async function shoot(name, width, height, sections) {
  const page = await browser.newPage({ viewport: { width, height }, deviceScaleFactor: 1 });
  await page.goto(url, { waitUntil: "load" });
  await page.waitForTimeout(1800);
  await page.evaluate(() => document.fonts.ready);

  const files = [];
  for (const sec of sections) {
    const el = await page.$(sec.selector);
    const file = path.join(outDir, `${name}-${sec.label}.png`);
    if (el) {
      await el.scrollIntoViewIfNeeded();
      await page.waitForTimeout(700);
      await el.screenshot({ path: file });
    } else {
      await page.screenshot({ path: file });
    }
    files.push(file);
  }
  await page.close();
  return files;
}

const desktopSections = [
  { label: "hero", selector: "#home" },
  { label: "about", selector: "#about" },
  { label: "services", selector: "#services" },
  { label: "gallery", selector: "#gallery" },
  { label: "why", selector: "#why-choose" },
  { label: "order", selector: "#how-to-order" },
  { label: "contact", selector: "#contact" },
  { label: "footer", selector: "footer" },
];

const mobileSections = [
  { label: "hero", selector: "#home" },
  { label: "about", selector: "#about" },
  { label: "services", selector: "#services" },
  { label: "gallery", selector: "#gallery" },
  { label: "contact", selector: "#contact" },
  { label: "footer", selector: "footer" },
];

const desktopFiles = await shoot("d", 1440, 900, desktopSections);
const mobileFiles = await shoot("m", 390, 844, mobileSections);

// build contact sheets
async function sheet(files, out, cols, tileW) {
  const tiles = [];
  for (const f of files) {
    const buf = await sharp(f)
      .resize({ width: tileW })
      .png()
      .toBuffer();
    const meta = await sharp(buf).metadata();
    tiles.push({ buf, h: meta.height });
  }
  const rowHeights = [];
  for (let i = 0; i < tiles.length; i += cols) {
    rowHeights.push(Math.max(...tiles.slice(i, i + cols).map((t) => t.h)));
  }
  let top = 0;
  const composites = tiles.map((t, i) => {
    const row = Math.floor(i / cols);
    const left = (i % cols) * tileW;
    const y = rowHeights.slice(0, row).reduce((a, b) => a + b, 0);
    top = 0;
    return { input: t.buf, left, top: y };
  });
  await sharp({
    create: {
      width: cols * tileW,
      height: rowHeights.reduce((a, b) => a + b, 0),
      channels: 3,
      background: { r: 20, g: 20, b: 20 },
    },
  })
    .composite(composites)
    .jpeg({ quality: 72 })
    .toFile(out);
  console.log("wrote", out);
}

await sheet(desktopFiles, path.join(outDir, "desktop.jpg"), 2, 640);
await sheet(mobileFiles, path.join(outDir, "mobile.jpg"), 5, 340);

await browser.close();
console.log("screenshots done");
