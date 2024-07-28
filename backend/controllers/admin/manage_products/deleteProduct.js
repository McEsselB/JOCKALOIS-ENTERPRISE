import Products from "../../../models/Product.model.js";

export const deleteProduct = async (req, res, next) => {
  try {
    const { productId } = req.body;

    const deletedProduct = await Products.findByIdAndDelete(productId);

    if (!deletedProduct) {
      return res.status(400).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    next(error);
  }
};
