import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";
import auth from "./routes/general/auth.js";
import admin from "./routes/admin/admin.js";
import product from "./routes/general/product.js";
import general from "./routes/general/general.js";
import { authToken } from "./middleware/authToken.js";
import cors from "cors";
import { verifyAdmin } from "./middleware/verifyAdmin.js";

dotenv.config();
const app = express();

const corsConfig = {
  origin: "http://localhost:5173",
  credentials: true,
};

app.use(express.json());
app.use(cookieParser());
app.use(cors(corsConfig));

app.post("/api/", (req, res) => {
  res.send("JOCKALOIS ENTERPRISE Server is UP and Running");
});

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
  mongoose
    .connect(process.env.MONGO_DB_CONNECTION_STRING)
    .then(() => {
      console.log("Connected to DB");
      console.log(`Server listening on PORT ${process.env.PORT}`);
    })
    .catch((err) => {
      //   console.log(err);
      console.error("Check Mongo DB Connection String");
    });
});
