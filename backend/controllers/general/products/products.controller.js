import Products from "../../../models/Product.model.js";
import { errorHandler } from "../../../utils/error.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await Products.find().sort({ createdAt: -1 });

    return res
      .status(200)
      .json({ data: allProducts, message: "All Products fetched" });
  } catch (error) {
    next(error);
  }
};

export const getProductDetails = async (req, res, next) => {
  try {
    const { productId } = req.body;

    const productDetails = await Products.findById(productId);

    if (!productDetails) {
      return errorHandler(400, "Product Deleted");
    }

    return res
      .status(200)
      .json({ data: productDetails, message: "Product Details fetched" });
  } catch (error) {
    next(error);
  }
};
