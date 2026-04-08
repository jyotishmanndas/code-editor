import { Router } from "express";
import { createFileController, readFileController } from "../../controllers/file/index.js";

const router = Router();

router.post("/create", createFileController);
router.get("/", readFileController);

export default router