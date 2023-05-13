import app from "./app.js";
import { createConnection } from "./database.js";

createConnection();
app.listen(3001);
console.log("server is runing on port 3001");
