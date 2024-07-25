import Products from "../../../models/Product.model.js";

export const getAllProducts = async (req, res, next) => {
  try {
    const allProducts = await Products.find();

    return res
      .status(200)
      .json({ data: allProducts, message: "All Products fetched" });
  } catch (error) {
    next(error);
  }
};
