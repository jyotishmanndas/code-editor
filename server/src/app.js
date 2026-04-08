import express, { urlencoded } from "express";
import cors from "cors";


const app = express();

app.use(cors());

app.use(express.json({limit: "16kb"}));
app.use(urlencoded({extended: true, limit: "16kb"}))


app.get("/", (req, res) => {
    res.json({msg: "Hello"})
})



export default app