import { Router } from "express";
import { addProducts } from "../../controllers/admin/manage_products/addProduct.js";
import { dashboardInfo } from "../../controllers/admin/dashboard/dashboardInfo.controller.js";
import { authToken } from "../../middleware/authToken.js";
import { stuff } from "../../controllers/admin/stuff/stuff.controller.js";
import { deleteProduct } from "../../controllers/admin/manage_products/deleteProduct.js";
import { editProduct } from "../../controllers/admin/manage_products/editProduct.js";
import { addStuff } from "../../controllers/admin/stuff/addStuff.js";
import { totalUsers } from "../../controllers/admin/dashboard/totalUsers.controller.js";

const route = Router();

route.post("/manage-products/add", addProducts);
route.post("/manage-products/delete", deleteProduct);
route.put("/manage-products/edit", editProduct);
route.get("/get-dashboard-info", dashboardInfo);
route.get("/stuff/view-members", stuff);
route.put("/stuff/add-member", addStuff);
route.get("/get-all-users", totalUsers);

export default route;
