import { Router } from "express";
import folderRoute from "./folder/index.js"

const router = Router();

router.use("/folder", folderRoute)

export default router;