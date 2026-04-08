import { Router } from "express";
import { createFolderController, deleteFolderController, getFolderController, updateFolderController } from "../../controllers/folder/index.js";

const router = Router();


router.post("/create", createFolderController);
router.get("/:folderName", getFolderController);
router.patch("/update", updateFolderController);
router.delete("/delete/:folderName", deleteFolderController);


export default router;