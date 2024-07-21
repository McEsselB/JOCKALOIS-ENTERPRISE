import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    email: { type: String, unique: true, require: true },
    password: String,
  },
  { timestamps: true }
);

const User = model("users", userSchema);

export default User;
