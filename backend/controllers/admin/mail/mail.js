import nodemailer from "nodemailer";
import Email from "../../../models/Email.model.js";
export const sendEmail = async (req, res, next) => {
  try {
    const { to, subject, body } = req.body;

    if (to === "" || subject === "" || body === "") {
      return res
        .status(400)
        .json({ message: "Please provide all required fields" });
    }
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      service: process.env.SMTP_SERVICE,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_PASSWORD,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_MAIL,
      to,
      subject,
      text: body,
      html: `<p>${body}</p>`,
    });

    await Email.create({ ...req.body, label: "Sent" });

    return res.status(200).json({ message: "Email Sent" });
  } catch (error) {
    next(error);
  }
};
