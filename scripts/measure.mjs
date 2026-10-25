import { chromium } from "playwright";
const url = "file://" + process.cwd() + "/dist/index.html";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(url, { waitUntil: "load" });
await p.waitForTimeout(1200);
const data = await p.evaluate(() => {
  const img = document.querySelector("#home img");
  const box = img.parentElement.getBoundingClientRect();
  const r = img.getBoundingClientRect();
  const cs = getComputedStyle(img);
  return {
    parent: { w: box.width, h: box.height },
    img: { w: r.width, h: r.height },
    natural: { w: img.naturalWidth, h: img.naturalHeight },
    objectPosition: cs.objectPosition,
    objectFit: cs.objectFit,
  };
});
console.log(JSON.stringify(data, null, 2));
await b.close();
