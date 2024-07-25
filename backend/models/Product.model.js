import { Schema, model } from "mongoose";

const productSchema = new Schema(
  {
    name: String,
    category: String,
    price: String,
    discount: String,
    numberOfProductsAvailable: Number,
    colors: Array,
    images: Array,
  },
  { timestamps: true }
);

const Products = model("Product", productSchema);
export default Products;
