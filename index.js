import express from "express";
import * as dotenv from "dotenv";
import getall from "./routes/rotas.routes.js";
import processId from "./routes/processId.js";
import open from "./routes/open.js";
import close from "./routes/close.js";
import addComent from "./routes/addComent.js";
import dbConnect from "./config/db.config.js";

dotenv.config();

dbConnect();

const app = express();
app.use(express.json());

app.use("/all", getall);
app.use("/process", processId);
app.use("/status", open);
app.use("/status", close);
app.use("/addComent", addComent);

app.listen(Number(process.env.PORT), () =>
  console.log("servidor na porta 4000")
);
