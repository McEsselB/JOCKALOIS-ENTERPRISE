import User from "../models/User.model.js";

export const verifyAdmin = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);

    if (!user || user.role !== "ADMIN") {
      return res.status(403).json({ message: "Unauthorized" });
    }
    next();
  } catch (error) {
    next(error);
  }
};
