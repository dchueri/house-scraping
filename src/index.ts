import puppeteer from "puppeteer";

console.log("Starting Bot");

const link =
  "https://sc.olx.com.br/florianopolis-e-regiao/imoveis/alugo-casa-no-canto-da-lagoa-1150299446";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(link, { waitUntil: "domcontentloaded" });
  await page.evaluate(() => window.stop());
  await page.screenshot({ path: "house.png" });

  await browser.close();
})();
