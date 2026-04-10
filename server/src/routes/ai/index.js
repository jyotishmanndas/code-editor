import { Router } from "express";
import { aiController } from "../../controllers/ai/index.js";

const router = Router();

router.get("/:prompt", aiController)

export default router;