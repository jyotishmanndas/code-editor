import { Router } from "express";
import folderRoute from "./folder/index.js";
import fileRoute from "./file/index.js";
import authRoute from "./auth/index.js";
import aiRoute from "./ai/index.js";
import useHuggingFace from "../utils/ai.utils.js";
import { success } from "../utils/response.utils.js";

const router = Router();

router.use("/folder", folderRoute);
router.use("/file", fileRoute);
router.use("/auth", authRoute);
router.use("/ai", aiRoute);

export default router;