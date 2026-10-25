import { chromium } from "playwright";
import sharp from "sharp";
const url = "file://" + process.cwd() + "/dist/index.html";
const b = await chromium.launch();
for (const [name, w, h] of [["m", 390, 844], ["d", 1440, 900]]) {
  const p = await b.newPage({ viewport: { width: w, height: h } });
  await p.goto(url, { waitUntil: "load" });
  await p.evaluate(async () => {
    const step = window.innerHeight * 0.7;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 200));
    }
    window.scrollTo(0, 0);
  });
  await p.waitForTimeout(1500);
  await p.screenshot({ path: `.shots/full-${name}.png`, fullPage: true });
  await p.close();
}
// make review sheets
for (const name of ["m", "d"]) {
  const img = sharp(`.shots/full-${name}.png`);
  const meta = await img.metadata();
  const width = name === "m" ? 320 : 700;
  const buf = await sharp(`.shots/full-${name}.png`)
    .resize({ width })
    .jpeg({ quality: 60 })
    .toBuffer();
  const m2 = await sharp(buf).metadata();
  await sharp(buf)
    .composite([])
    .jpeg({ quality: 60 })
    .toFile(`.shots/review-${name}.jpg`);
  console.log(name, meta.width, meta.height, "->", width, m2.height);
}
await b.close();
