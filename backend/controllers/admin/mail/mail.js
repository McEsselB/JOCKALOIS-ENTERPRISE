import nodemailer from "nodemailer";

export const sendEmail = async (req, res, next) => {
  try {
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
      from: "kelvinmhacwilson@gmail.com", 
      to: "kelvinattatsi@gmail.com",
      subject: "Hello the name is Kelvin ✔", 
      text: "Hello world?", 
      html: "<b>Hello world?</b>", 
    });

    return res.status(200).json({ message: "Email Sent" });
  } catch (error) {
    next(error);
  }
};
