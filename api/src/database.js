import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

let db;

const __dirname = dirname(fileURLToPath(import.meta.url));

export async function createConnection() {
  const file = join(__dirname, "../../data/users.json");
  const adapter = new JSONFile(file);
  const defaultData = { posts: [] };
  db = new Low(adapter, defaultData);

  await db.read();

  db.data ||= { users: [] };

  await db.write();

  //console.log(db.data);
}

export const getConnection = () => db;
