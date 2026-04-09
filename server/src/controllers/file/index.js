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

        // create folder if missing
        await fs.mkdir(folderPath, { recursive: true });

        try {
            await fs.access(filePath);
            return badRequest(res, "File already exists")
        } catch { }

        await fs.writeFile(filePath, content);
        return created(res)
    } catch (error) {
        return customError(res, error.message)
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


// delete

export const deleteFileController = async (req, res) => {
    const { folderName, fileName } = req.body;
    if (!fileName || !folderName) {
        return badRequest(res, {}, "File and folder name is required")
    };

    const safeFolder = path.basename(folderName)
    const safeFile = path.basename(fileName);

    const folderPath = path.join(process.cwd(), "assets", safeFolder);
    const filePath = path.join(folderPath, safeFile);

    await fs.unlink(filePath);

    return success(res)
}

