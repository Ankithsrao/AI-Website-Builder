import dns from "dns";
dns.setDefaultResultOrder("ipv4first");

import express from "express";
import cookieParser from "cookie-parser";
import "dotenv/config"; 
import { connectToDatbase } from "./config/db.js";
import authRouter from "./routes/authRoutes.js";

const app = express();

connectToDatbase();

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => res.send("Server is Live"));
app.use('/api/auth', authRouter)
app.use((err, _req, res, _next) => {
    console.error(`[Error] ${err.message}`);
    res.status(500).json({ error: err.message });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
