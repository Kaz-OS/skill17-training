import { db } from "./db.server";

await db`
  CREATE TABLE IF NOT EXISTS Type  (
    ID INT PRIMARY KEY,
    NOM VARCHAR(50) NOT NULL
  )
 `;

await db`
  CREATE TABLE IF NOT EXISTS Projet  (
    ID INT PRIMARY KEY,
    NOM TEXT NOT NULL,
    IMAGE TEXT NOT NULL,
    TypeID INT, CONSTRAINT fk_Type
    FOREIGN KEY (TypeID)
    REFERENCES Type(ID)
  )
`;

const [categorie]: { Value: number }[] = await db`
  SELECT COUNT(*) AS Value
  FROM Type
`;

const [projet]: { Value: number }[] = await db`
  SELECT COUNT(*) AS Value
  FROM Projet
`;

if (categorie.Value === 0) {
  await db`
  INSERT INTO Type (ID, NOM)
  VALUES (1, "Mobile"),
   (2, "Web"),
   (3, "Interaction")
`;
}

if (projet.Value === 0) {
  await db`
  INSERT INTO Projet (ID, NOM, IMAGE, TypeID)
  VALUES (1, "PROJET 1", "App-Screens-Perspective-MockUp-full.jpg", 1),
   (2, "PROJET 2", "sample_2.jpg", 3),
   (3, "PROJET 3", "sample_6.jpg", 2),
   (4, "PROJET 4", "sample_4.jpg", 3),
   (5, "PROJET 5", "sample_5.jpg", 3),
   (6, "PROJET 6", "sample_1.jpg", 3)
`;
}
