export const logout = async (req, res, next) => {
  try {
    res.clearCookie("token");

    return res.status(200).json({ message: "User Logged Out" });
  } catch (error) {
    next(error);
  }
};
