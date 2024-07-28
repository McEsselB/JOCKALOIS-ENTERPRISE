import Products from "../../../models/Product.model.js";

export const editProduct = async (req, res, next) => {
  try {
    const { id, ...reqBody } = req.body;
    const updatedProduct = await Products.findByIdAndUpdate(id, reqBody);

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    next(error);
  }
};
