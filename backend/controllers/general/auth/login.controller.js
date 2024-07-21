import User from "../../../models/User.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Fill in all fields" });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const isPassword = await bcrypt.compare(password, user?.password || "");

    if (!isPassword) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const tokenData = {
      id: user.id,
    };

    const token = jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "24h",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
    });

    return res
      .status(201)
      .json({ data: token, message: "User Logged In Successfully" });
  } catch (error) {
    // next(error);
    return res.status(400).json(error);
  }
};
