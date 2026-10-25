import { chromium } from "playwright";
const url = "file://" + process.cwd() + "/dist/index.html";
const b = await chromium.launch();
for (const vp of [{ width: 1440, height: 900 }, { width: 390, height: 844 }]) {
  const p = await b.newPage({ viewport: vp });
  await p.goto(url, { waitUntil: "load" });
  await p.waitForTimeout(800);
  // slow scroll through the page
  await p.evaluate(async () => {
    const step = window.innerHeight * 0.6;
    for (let y = 0; y < document.body.scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 220));
    }
    window.scrollTo(0, 0);
  });
  await p.waitForTimeout(1500);
  const res = await p.evaluate(() => {
    const imgs = [...document.querySelectorAll("img")];
    return {
      total: imgs.length,
      broken: imgs.filter((i) => !i.complete || i.naturalWidth === 0).length,
      noAlt: imgs.filter((i) => !i.getAttribute("alt")).length,
      overflowX: document.documentElement.scrollWidth > window.innerWidth + 1
        ? document.documentElement.scrollWidth
        : 0,
      docWidth: document.documentElement.scrollWidth,
      winWidth: window.innerWidth,
    };
  });
  console.log(vp.width, JSON.stringify(res));
  await p.close();
}
await b.close();
