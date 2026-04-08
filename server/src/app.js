import express from "express";
import logger from "morgan"
import cors from "cors";
import Router from "./routes/index.js"


const app = express();

app.use(cors());

app.use(logger("tiny"))
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({extended: true, limit: "16kb"}));


app.use("/api/v1/", Router);




export default app