import { Router } from "express";
import {
  getAllProducts,
  getProductDetails,
} from "../../controllers/general/products/products.controller.js";

const route = Router();

route.get("/get-all-products", getAllProducts);
route.post("/product-details", getProductDetails);

export default route;
