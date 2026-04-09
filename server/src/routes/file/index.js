import { Router } from "express";
import { createFileController, deleteFileController, readFileController } from "../../controllers/file/index.js";

const router = Router();

router.post("/create", createFileController);
router.get("/", readFileController);
router.delete("/delete", deleteFileController);

export default router