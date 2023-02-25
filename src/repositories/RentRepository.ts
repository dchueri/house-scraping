import { Rent } from "../interfaces";
import { databaseId, notion } from "../utils/api";

export class RentRepository {
  static async addRent(rent: Rent) {
    const result = await notion.pages.create({
      parent: {
        database_id: databaseId,
      },
      properties: {
        Valor: { title: [{ text: { content: rent.rentValue } }] },
        Categoria: {
          rich_text: [{ text: { content: rent.propertyCategory } }],
        },
        Tipo: { rich_text: [{ text: { content: rent.propertyType } }] },
        Condomínio: { rich_text: [{ text: { content: rent.condominiumFee } }] },
        IPTU: { rich_text: [{ text: { content: rent.iptu } }] },
        Bairro: { rich_text: [{ text: { content: rent.neighborhood } }] },
        Link: { url: rent.link! },
      },
    });
    return result;
  }
}
