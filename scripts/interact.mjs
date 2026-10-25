import { chromium } from "playwright";
const url = "file://" + process.cwd() + "/dist/index.html";
const b = await chromium.launch();

// Desktop: open lightbox
const p = await b.newPage({ viewport: { width: 1440, height: 900 } });
await p.goto(url, { waitUntil: "load" });
await p.waitForTimeout(1500);
await p.locator("#gallery button[aria-label^='Open larger view']").first().click();
await p.waitForTimeout(900);
await p.screenshot({ path: ".shots/lightbox.png" });
await p.keyboard.press("ArrowRight");
await p.waitForTimeout(700);
await p.screenshot({ path: ".shots/lightbox2.png" });
await p.keyboard.press("Escape");
await p.waitForTimeout(500);
const dialogGone = await p.locator("[role=dialog]").count();
console.log("lightbox closed after Escape:", dialogGone === 0);

// Mobile: menu drawer
const m = await b.newPage({ viewport: { width: 390, height: 844 }, isMobile: true, hasTouch: true });
await m.goto(url, { waitUntil: "load" });
await m.waitForTimeout(1200);
await m.getByLabel("Open menu").click();
await m.waitForTimeout(700);
await m.screenshot({ path: ".shots/m-menu.png" });
const links = await m.locator("nav[aria-label='Mobile'] a").count();
console.log("mobile drawer links:", links);
await m.getByLabel("Close menu").click();
await m.waitForTimeout(500);

// Check all links/phones
const p2 = await b.newPage({ viewport: { width: 1280, height: 800 } });
await p2.goto(url, { waitUntil: "load" });
const audit = await p2.evaluate(() => {
  const imgs = [...document.querySelectorAll("img")];
  const broken = imgs.filter((i) => !i.complete || i.naturalWidth === 0).map((i) => i.src.slice(0, 60));
  const noAlt = imgs.filter((i) => !i.alt).length;
  const tel = [...document.querySelectorAll("a[href^='tel:']")].map((a) => a.getAttribute("href"));
  const mail = [...document.querySelectorAll("a[href^='mailto:']")].map((a) => a.getAttribute("href"));
  const wa = [...document.querySelectorAll("a[href*='wa.me']")].map((a) => a.getAttribute("href"));
  const badWa = wa.filter((h) => !h.includes("2347040773767"));
  const headings = [...document.querySelectorAll("h1,h2")].map((h) => h.textContent.trim().slice(0, 42));
  return { imgCount: imgs.length, broken, noAlt, tel, mail, waCount: wa.length, badWa, headings, title: document.title };
});
console.log(JSON.stringify(audit, null, 2));
await b.close();
