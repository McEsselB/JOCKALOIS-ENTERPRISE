import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";

export const authToken = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    if (!token) {
      return res.json({ message: "User not logged in" });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        console.log("Token Authentication", err);
        return res.json({ message: "Token Authentication Failed" });
      }

      req.userId = decoded?.id;

      next();
    });
  } catch (error) {
    next("jwt token", error);
  }
};
