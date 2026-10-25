// Optional dev check of the published site.
// Requires: npm install --no-save playwright && npx playwright install chromium
import { chromium } from "playwright";
const url = "https://kalaamuwaheed-hue.github.io/musa-fashion-design/";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
const errs = [];
p.on("console", (m) => m.type() === "error" && errs.push(m.text().slice(0, 120)));
p.on("pageerror", (e) => errs.push("pageerror: " + e.message.slice(0, 120)));
await p.goto(url, { waitUntil: "load" });
await p.waitForTimeout(2500);
await p.evaluate(async () => {
  const step = window.innerHeight * 0.7;
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 200));
  }
  window.scrollTo(0, 0);
});
await p.waitForTimeout(2000);
await p.screenshot({ path: ".shots/live-hero.png" });
await p.locator("#gallery button[aria-label^='Open larger view']").first().click();
await p.waitForTimeout(1200);
await p.screenshot({ path: ".shots/live-lightbox.png" });
await p.keyboard.press("Escape");
const stats = await p.evaluate(() => ({
  imgs: document.querySelectorAll("img").length,
  broken: [...document.querySelectorAll("img")].filter((i) => !i.complete || !i.naturalWidth).length,
  fonts: document.fonts.size,
  title: document.title,
  h1: document.querySelector("h1")?.textContent.trim(),
  heroBg: getComputedStyle(document.querySelector("#home")).backgroundColor,
}));
console.log(JSON.stringify(stats));
console.log("console errors:", errs.length ? errs : "none");
await b.close();
