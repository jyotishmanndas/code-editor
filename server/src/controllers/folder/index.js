import fs from "fs/promises";
import path from "path";
import { badRequest, created, deleted, success, updated } from "../../utils/response.utils.js";


// create folder
export const createFolderController = async (req, res) => {
    const { folderName } = req.body;
    if (!folderName) {
        return badRequest(res, "Folder name is required")
    };

    const safeFolderName = path.basename(folderName);

    // const currdir = path.resolve(); 
    const folderPath = path.join(process.cwd(), "assets", safeFolderName)

    await fs.mkdir(folderPath, { recursive: true });
    return created(res);
};


// read folder
export const getFolderController = async (req, res) => {
    const { folderName } = req.params;
    if (!folderName) {
        return badRequest(res, "Folder name is required")
    };

    const safeFolderName = path.basename(folderName);

    // const currdir = path.resolve();
    const folderPath = path.join(process.cwd(), "assets", safeFolderName);

    await fs.access(folderPath);

    const files = await fs.readdir(folderPath);
    return success(res, files)
};

// update
export const updateFolderController = async (req, res) => {
    const { oldFolderName, newFolderName } = req.body;
    if (!oldFolderName || !newFolderName) {
        return badRequest(res, "Folder names is required")
    };

    const base = path.join(process.cwd(), "assets");

    const oldPath = path.join(base, path.basename(oldFolderName));
    const newPath = path.join(base, path.basename(newFolderName))

    await fs.access(oldPath);

    try {
        await fs.access(newPath);
        return badRequest(res, "Folder already exits")
    } catch { }

    fs.rename(oldPath, newPath)
    return updated(res)
}


// delete folder
export const deleteFolderController = async (req, res) => {
    const { folderName } = req.params;
    if (!folderName) {
        return badRequest(res, "Folder name is required")
    };

    const safeFolderName = path.basename(folderName);

    // const currdir = path.resolve();
    const folderPath = path.join(process.cwd(), "assets", safeFolderName);

    await fs.access(folderPath);

    await fs.rm(folderPath, { recursive: true, force: true });
    return deleted(res)
};