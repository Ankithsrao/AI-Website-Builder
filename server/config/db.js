import mongoose from "mongoose";
import "dotenv/config"

import dns from "node:dns";
dns.setServers(["1.1.1.1", "8.8.8.8"]);


export const connectToDatbase = async () => {
    try {
        // Strip spaces or quotes passed down from the .env configuration
        const cleanUri = process.env.MONGODB_URI?.trim().replace(/^["']|["']$/g, '');

        if (!cleanUri) {
            throw new Error("MONGODB_URI environment variable is missing.");
        }

        await mongoose.connect(cleanUri);
        console.log("Database connected successfully!");
    } catch (error) {
        console.error("Database connection error:", error.message);
        process.exit(1);
    }
};
