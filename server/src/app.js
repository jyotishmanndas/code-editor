import express, { urlencoded } from "express";
import cors from "cors";
import Router from "./routes/index.js"


const app = express();

app.use(cors());

app.use(express.json({ limit: "16kb" }));
app.use(urlencoded({ extended: true, limit: "16kb" }))


app.use("/api/v1/", Router);




export default app