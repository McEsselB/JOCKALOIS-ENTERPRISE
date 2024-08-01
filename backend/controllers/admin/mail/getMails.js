import Email from "../../../models/Email.model.js";

export const getMails = async (req, res, next) => {
  try {
    const mails = await Email.find({}).sort({ createdAt: -1 });

    return res.status(200).json({ data: mails });
  } catch (error) {
    next(error);
  }
};
