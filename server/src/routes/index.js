import { Router } from "express";
import folderRoute from "./folder/index.js";
import fileRoute from "./file/index.js";

const router = Router();

router.use("/folder", folderRoute);
router.use("/file", fileRoute);

export default router;