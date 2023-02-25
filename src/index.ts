import { RentRepository } from "./repositories/RentRepository";
import { ScrapingServices } from "./services/ScrapingServices";
import { links } from "./utils/links";

console.log("Starting Bot...");

(async () => {
  links.map(async (link) => {
    const rent = await ScrapingServices.getInfo(link);
    const result = await RentRepository.addRent(rent);
    console.log(result);
  });
})();
