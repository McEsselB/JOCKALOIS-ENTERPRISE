import { Router } from "express";
import { sendEmail } from "../../controllers/admin/mail/mail.js";

const router = Router();

router.post("/sendEmail", sendEmail);

export default router;
