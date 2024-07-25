import { Router } from "express";
import { addProducts } from "../../controllers/admin/manage_products/addProduct.js";
import { dashboardInfo } from "../../controllers/admin/dashboard/dashboardInfo.controller.js";
import { authToken } from "../../middleware/authToken.js";
import { stuff } from "../../controllers/admin/stuff/stuff.controller.js";

const route = Router();

route.post("/manage-products/add", authToken, addProducts);
route.get("/get-dashboard-info", authToken, dashboardInfo);
route.get("/get-stuff-info", authToken, stuff);

export default route;
