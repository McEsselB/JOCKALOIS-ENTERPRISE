import { Router } from "express";
import { register } from "../../controllers/general/auth/register.controller.js";
import { login } from "../../controllers/general/auth/login.controller.js";
import { logout } from "../../controllers/general/auth/logout.controller.js";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);

export default router;
