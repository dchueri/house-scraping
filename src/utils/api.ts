import { Client } from "@notionhq/client";
require("dotenv").config();

export const notion = new Client({
  auth: process.env.NOTION_TOKEN,
});

export const databaseId = process.env.DATABASE_ID!;
