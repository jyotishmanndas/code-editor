import { User } from "../../models/user.model.js";
import { createAccessToken, createRefreshToken } from "../../utils/authService.js";
import { badRequest, created, customError, internalError, success } from "../../utils/response.utils.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const registerController = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            return badRequest(res, {}, "All fields are required")
        };

        const existigUser = await User.findOne({ email });
        if (existigUser) {
            return badRequest(res, {}, "User already exists with email")
        };

        const passwordhashed = await bcrypt.hash(password, 10);

        const user = await User.create({
            name,
            email,
            password: passwordhashed
        });

        const accessToken = createAccessToken(user._id);
        const refreshToken = createRefreshToken(user._id);

        user.refreshToken = refreshToken;
        await user.save();

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 1000
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return created(res, {
            userId: user._id,
            name: user.name,
            email: user.email,
            accessToken: accessToken
        }, "User signup successfully");

    } catch (error) {
        return internalError(res, {}, error.message);
    }
};


export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return badRequest(res, {}, "All fields are required")
        };
        const existingUser = await User.findOne({ email })
        if (!existingUser) {
            return badRequest(res, {}, "User not found with this email")
        }

        const passwordCheck = await bcrypt.compare(password, existingUser.password);
        if (!passwordCheck) {
            return customError(res, {}, 401, "Invalid credentials");
        }

        const accessToken = createAccessToken(existingUser._id);
        const refreshToken = createRefreshToken(existingUser._id);

        existingUser.refreshToken = refreshToken;
        await existingUser.save();

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 1000
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return created(res, {
            userId: existingUser._id,
            name: existingUser.name,
            email: existingUser.email
        }, "login successfully");
    } catch (error) {
        return internalError(res, {}, error.message);
    }
};


export const userProfileController = async (req, res) => {
    try {
        if (req.user) {
            return success(res, {
                userId: req.user._id,
                name: req.user.name,
                email: req.user.email,
            }, "User profile fetched successfully")
        }
    } catch (error) {
        return internalError(res, {}, error.message);
    }
};

export const refreshTokenController = async (req, res) => {
    try {
        const IncomingRefreshToken = req.cookies?.refreshToken;
        if (!IncomingRefreshToken) {
            return customError(res, {}, 401, "Unauthorized request");
        };

        const decoded = jwt.verify(IncomingRefreshToken, process.env.REFRESH_TOKEN)

        const user = await User.findById(decoded.userId);
        if (!user || !user.refreshToken) {
            return customError(res, {}, 401, "Invalid refresh token")
        };

        if (user.refreshToken !== IncomingRefreshToken) {
            return customError(res, {}, 401, "Refresh token is expired or used")
        };

        const accessToken = createAccessToken(user._id);
        const refreshToken = createRefreshToken(user._id);

        user.refreshToken = refreshToken;
        await user.save();

        res.cookie("accessToken", accessToken, {
            httpOnly: true,
            secure: true,
            maxAge: 60 * 60 * 1000
        });

        res.cookie("refreshToken", refreshToken, {
            httpOnly: true,
            secure: true,
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        return success(res, { accessToken }, "Access token refreshed");

    } catch (error) {
        return internalError(res, {}, error.message);
    }
}

