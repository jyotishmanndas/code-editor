import jwt from "jsonwebtoken";

export const createAccessToken = (userId) => {
    return jwt.sign({ userId }, process.env.ACCESS_TOKEN, { expiresIn: "1d" })
}

export const createRefreshToken = (userId) => {
    return jwt.sign({ userId }, process.env.REFRESH_TOKEN, { expiresIn: "7d" })
}