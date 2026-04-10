import useHuggingFace from "../../utils/ai.utils.js";
import { internalError, success } from "../../utils/response.utils.js";

export const aiController = async (req, res) => {
    try {
        const { prompt } = req.params;
        console.log("chat", prompt);
        const answer = await useHuggingFace(prompt, process.env.HUGGING_FACE)

        return success(res, { answer });
    } catch (error) {
        return internalError(res, {}, error.message);
    }
}