import Products from "../../../models/Product.model.js";
import User from "../../../models/User.model.js";

export const dashboardInfo = async (req, res, next) => {
  try {
    const totalUsers = (await User.find()).length;
    const totalProducts = (await Products.find()).length;
    const totalSales = 0;
    const pendingOrders = 0;

    const dashboardInfo = {
      totalUsers,
      totalProducts,
      totalSales,
      pendingOrders,
    };
    return res
      .status(200)
      .json({ data: dashboardInfo, message: "Data Retrieved" });
  } catch (error) {
    next(error);
  }
};
