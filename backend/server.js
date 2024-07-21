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
