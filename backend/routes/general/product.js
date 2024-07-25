import { Router } from "express";
import { getAllProducts } from "../../controllers/general/products/products.controller.js";

const route = Router();

route.get("/get-all-products", getAllProducts);

export default route;
