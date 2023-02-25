import puppeteer from "puppeteer";
import { Rent } from "../interfaces";

export class ScrapingServices {
  static async getInfo(link: string): Promise<Rent> {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(link, { waitUntil: "domcontentloaded" });
    const result = await page.evaluate((): Rent => {
      return {
        rentValue:
          document.querySelector(
            "#content > div.ad__sc-18p038x-2.djeeke > div > div.sc-bwzfXH.ad__h3us20-0.ikHgMx > div.ad__duvuxf-0.ad__h3us20-0.eCUDNu > div.ad__h3us20-6.fSqFUh > div > div > div > div > div.sc-hmzhuo.ad__sc-1wimjbb-4.hTDqLB.sc-jTzLTM.iwtnNi > div > div.sc-hmzhuo.jHVgRQ.sc-jTzLTM.iwtnNi > h2"
          )?.textContent || "empty",
        propertyCategory:
          document.querySelector(
            "#content > div.ad__sc-18p038x-2.djeeke > div > div.sc-bwzfXH.ad__h3us20-0.ikHgMx > div.ad__duvuxf-0.ad__h3us20-0.eCUDNu > div.ad__h3us20-6.glaKaZ > div > div > div > div.sc-bwzfXH.ad__h3us20-0.ikHgMx > div:nth-child(1) > div > div > a"
          )?.textContent || "empty",
        propertyType:
          document.querySelector(
            "#content > div.ad__sc-18p038x-2.djeeke > div > div.sc-bwzfXH.ad__h3us20-0.ikHgMx > div.ad__duvuxf-0.ad__h3us20-0.eCUDNu > div.ad__h3us20-6.glaKaZ > div > div > div > div.sc-bwzfXH.ad__h3us20-0.ikHgMx > div:nth-child(2) > div > div > a"
          )?.textContent || "empty",
        condominiumFee:
          document.querySelector(
            "#content > div.ad__sc-18p038x-2.djeeke > div > div.sc-bwzfXH.ad__h3us20-0.ikHgMx > div.ad__duvuxf-0.ad__h3us20-0.eCUDNu > div.ad__h3us20-6.glaKaZ > div > div > div > div.sc-bwzfXH.ad__h3us20-0.ikHgMx > div:nth-child(3) > div > dd"
          )?.textContent || "empty",
        iptu:
          document.querySelector(
            "#content > div.ad__sc-18p038x-2.djeeke > div > div.sc-bwzfXH.ad__h3us20-0.ikHgMx > div.ad__duvuxf-0.ad__h3us20-0.eCUDNu > div.ad__h3us20-6.glaKaZ > div > div > div > div.sc-bwzfXH.ad__h3us20-0.ikHgMx > div:nth-child(4) > div > dd"
          )?.textContent || "empty",
        neighborhood:
          document.querySelector(
            "#content > div.ad__sc-18p038x-2.djeeke > div > div.sc-bwzfXH.ad__h3us20-0.ikHgMx > div.ad__duvuxf-0.ad__h3us20-0.eCUDNu > div.ad__h3us20-6.fSFeFx > div > div > div > div.sc-hmzhuo.gqoVfS.sc-jTzLTM.iwtnNi > div.sc-bwzfXH.ad__h3us20-0.ikHgMx > div:nth-child(3) > div > dd"
          )?.textContent || "empty",
      };
    });
    await browser.close();
    return result;
  }
}
