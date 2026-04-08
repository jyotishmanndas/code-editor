import dotenv from "dotenv";
dotenv.config();

import app from "./src/app.js";


const PORT = process.env.PORT || 3000

const startServer = async () => {

    try {

        app.listen(PORT, () => {
            console.log(`Server is running on the port ${PORT}`);
        })
    } catch (error) {
        console.log(`Server start to fail`, error);
        process.exit(1);
    }
};

startServer();