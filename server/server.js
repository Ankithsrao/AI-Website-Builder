import dns from "dns";
dns.setDefaultResultOrder("ipv4first");

import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import "dotenv/config";

import { connectToDatbase } from "./config/db.js";
import authRouter from "./routes/authRoutes.js";
import projectRouter from "./routes/projectRoutes.js";

const app = express();

await connectToDatbase();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
    return res.send("Server is Live");
});

app.use("/api/auth", authRouter);
app.use("/api/projects", projectRouter);

app.use((err, _req, res, next) => {
    console.error("[Error]", err);

    if (res.headersSent) {
        return next(err);
    }

    return res.status(err.status || 500).json({
        error: err.message || "Internal server error",
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});