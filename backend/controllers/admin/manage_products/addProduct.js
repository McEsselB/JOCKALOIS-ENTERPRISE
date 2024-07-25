import Product from "../../../models/Product.model.js";

export const addProducts = async (req, res, next) => {
  try {
    const newProduct = await Product.create({ ...req.body });

    return res.status(200).json({
      // data: newProduct,
      message: "New Product Added",
    });
  } catch (error) {
    next(error);
  }
};
