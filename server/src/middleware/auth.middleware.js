import jwt from "jsonwebtoken";
import { User } from "../models/user.model.js";
import { customError, internalError } from "../utils/response.utils.js";

export const verifyJWT = async (req, res, next) => {
    try {
        let token = req.cookies?.accessToken;
        if (!token) {
            return customError(res, {}, 401, "Unauthorized request");
        }

        const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
        if (!decoded?.userId) {
            return customError(res, {}, 401, "Invalid token payload");
        }

        const user = await User.findById(decoded.userId).select("-password -refreshToken");
        if (!user) {
            return res.status(401).json({ msg: "user not found" })
        }

        req.user = user
        next();

    } catch (error) {
        return internalError(res, {}, error.message);
    }
};
