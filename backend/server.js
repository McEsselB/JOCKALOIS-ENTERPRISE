import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import auth from "./routes/general/auth.js";
import admin from "./routes/admin/admin.js";
import product from "./routes/general/product.js";
import general from "./routes/general/general.js";
import { authToken } from "./middleware/authToken.js";
import cors from "cors";
import { verifyAdmin } from "./middleware/verifyAdmin.js";
import connectToMongoDb from "./db/connectToMongoDB.js";
import path from "path";

dotenv.config();
const app = express();
const __dirname = path.resolve();

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

const corsConfig = {
  origin: ["http://localhost:5173", "https://jockalois-enterprise.vercel.app/"],
  credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsConfig));

app.use("/api/auth", auth);
app.use("/api/admin", authToken, verifyAdmin, admin);
app.use("/api/", product);
app.use("/api/", general);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(process.env.PORT, () => {
  connectToMongoDb();
});
