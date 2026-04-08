import { Router } from "express";
import { loginController, refreshTokenController, registerController, userProfileController } from "../../controllers/auth/index.js";
import { verifyJWT } from "../../middleware/auth.middleware.js";

const router = Router();

router.post("/register", registerController);
router.post("/login", loginController);
router.get("/me", verifyJWT, userProfileController);
router.post("/refreshToken", refreshTokenController);

export default router;