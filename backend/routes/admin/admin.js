import { Router } from "express";
import { addProducts } from "../../controllers/admin/manage_products/addProduct.js";

const route = Router();

route.post("/manage-products/add", addProducts);

export default route;
