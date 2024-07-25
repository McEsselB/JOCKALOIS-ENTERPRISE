import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import mongoose from "mongoose";

import auth from "./routes/general/auth.js";

dotenv.config();
const app = express();

app.use(express.json());
app.use(cookieParser());

app.post("/api/", (req, res) => {
  res.send("JOCKALOIS ENTERPRISE Server is UP and Running");
});

app.use("/api/auth", auth);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(8000, () => {
  mongoose
    .connect("mongodb+srv://kelvinmhacwilson:MakeMoney247@cluster0.yxhb8d4.mongodb.net/JOCKALOIS-ENTERPRISE")
    .then(() => {
      console.log("Connected to DB");
      console.log(`Server listening on PORT ${process.env.PORT}`);
    })
    .catch((err) => {
      //   console.log(err);
      console.error("Check Mongo DB Connection String");
    });
});
