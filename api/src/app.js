import express from "express";
import usersRoutes from "./routes/users.js";
import morgan from "morgan";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

const acceso = "http://localhost:3000";

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", acceso); // update to match the domains you will make the request from
  res.header("Access-Control-Allow-Credentials", "true");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

app.use(usersRoutes);

export default app;
