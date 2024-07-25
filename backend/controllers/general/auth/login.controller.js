import User from "../../../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { errorHandler } from "../../../utils/error.js";

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return next(errorHandler(400, "Fill in all fields"));
    }

    const user = await User.findOne({ email });

    if (!user) {
      return next(errorHandler(400, "Invalid Credentials"));
    }

    const isPassword = await bcrypt.compare(password, user?.password || "");

    if (!isPassword) {
      return next(errorHandler(400, "Invalid Credentials"));
    }

    const tokenData = {
      id: user._id,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
    });

    const { password: pass, ...rest } = user._doc;

    return res
      .status(201)
      .json({ data: rest, message: "User Logged In Successfully" });
  } catch (error) {
    next(error);
  }
};
