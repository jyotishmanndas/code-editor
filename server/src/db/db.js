import mongoose from "mongoose"

export const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/code-editor`);
        console.log("mongoDb connected successfully");

    } catch (error) {
        console.log("MONGODB connection FAILED", error);
        process.exit(1)
    }
}