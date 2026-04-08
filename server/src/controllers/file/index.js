import fs from "fs/promises";
import path from "path";
import { badRequest, created, customError, success } from "../../utils/response.utils.js";


// create file
export const createFileController = async (req, res) => {
    try {
        const { folderName, fileName, content = "" } = req.body;
        if (!fileName || !folderName) {
            return badRequest(res, "File name and folderName is required")
        };

        const safeFolder = path.basename(folderName);
        const safeFile = path.basename(fileName);

        const folderPath = path.join(process.cwd(), "assets", safeFolder);
        const filePath = path.join(folderPath, safeFile);

        await fs.access(folderPath);

        try {
            await fs.access(filePath);
            return badRequest(res, "File already exists")
        } catch { }

        await fs.writeFile(filePath, content);
        return created(res)
    } catch (error) {
        res.status(500).json({ msg: "Internal server error" })
    }
};


// read file
export const readFileController = async (req, res) => {
    const { folderName, fileName } = req.body;
    if (!fileName || !folderName) {
        return badRequest(res, "File name and folderName is required")
    };

    const safeFolder = path.basename(folderName);
    const safeFile = path.basename(fileName);

    const folderPath = path.join(process.cwd(), "assets", safeFolder);
    const filePath = path.join(folderPath, safeFile);

    const data = await fs.readFile(filePath, "utf-8");

    return success(res, { data })
};


// update

