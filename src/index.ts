import { ScrapingServices } from "./services/ScrapingServices";

console.log("Starting Bot");

const links = [
  "https://sc.olx.com.br/florianopolis-e-regiao/imoveis/alugo-casa-no-canto-da-lagoa-1150299446",
  "https://sc.olx.com.br/florianopolis-e-regiao/imoveis/apartamento-para-aluguel-ingleses-2-quartos-58-m2-1149963480",
  "https://sc.olx.com.br/florianopolis-e-regiao/imoveis/apartamento-para-aluguel-ingleses-2-quartos-58-m2-1149963480",
  "https://sc.olx.com.br/florianopolis-e-regiao/imoveis/lindo-apartamento-mobiliado-e-decorado-para-locacao-anual-localizado-a-100-metros-do-mar-1148803602",
  "https://sc.olx.com.br/florianopolis-e-regiao/imoveis/florianopolis-apartamento-padrao-ingleses-do-rio-vermelho-1148609530",
];

(async () => {
  links.map((link) => ScrapingServices.getInfo(link));
})();
