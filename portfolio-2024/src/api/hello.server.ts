import { Elysia } from "fulgur/server";
import { db } from "../db/db.server";

type Projet = {
  ProjetNOM: string;
  TypeNOM: string;
  IMAGE: string;
};

export const helloRoutes = new Elysia().get("/project", async () => {
  const data: Projet[] = await db`
  SELECT p.NOM AS ProjetNOM, t.NOM AS TypeNOM, p.IMAGE
  FROM Projet AS p
  INNER JOIN Type AS t ON p.TypeID = t.ID;
 `;
  return data;
});
