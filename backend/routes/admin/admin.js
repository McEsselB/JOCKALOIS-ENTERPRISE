import { Router } from "express";
import { addProducts } from "../../controllers/admin/manage_products/addProduct.js";
import { dashboardInfo } from "../../controllers/admin/dashboard/dashboardInfo.controller.js";
import { authToken } from "../../middleware/authToken.js";

const route = Router();

route.post("/manage-products/add", authToken, addProducts);
route.get("/get-dashboard-info", authToken, dashboardInfo);

export default route;
