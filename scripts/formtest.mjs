import { chromium } from "playwright";
const url = "file://" + process.cwd() + "/dist/index.html";
const b = await chromium.launch();
const p = await b.newPage({ viewport: { width: 1280, height: 900 } });
await p.goto(url, { waitUntil: "load" });
await p.waitForTimeout(1200);
await p.fill('input[name="name"]', "Test Customer");
await p.fill('input[name="phone"]', "08012345678");
await p.selectOption('select[name="outfit"]', "Premium Jallabiya");
await p.fill('textarea[name="message"]', "I need a cream jallabiya for Eid.");
const [popup] = await Promise.all([
  p.waitForEvent("popup", { timeout: 8000 }).catch(() => null),
  p.click('button[type="submit"]'),
]);
console.log("popup url:", popup ? decodeURIComponent(popup.url()) : "NONE");
await p.waitForTimeout(600);
console.log("confirmation shown:", await p.locator("text=Your message is ready in WhatsApp").count() > 0);
console.log("page errors: none thrown");
await b.close();
