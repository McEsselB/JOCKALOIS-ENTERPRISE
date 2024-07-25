import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    username: String,
    profilePicture: {
      type: String,
      default:
        "https://t3.ftcdn.net/jpg/03/53/11/00/360_F_353110097_nbpmfn9iHlxef4EDIhXB1tdTD0lcWhG9.jpg",
    },
    email: { type: String, unique: true, require: true },
    password: String,
    role: { type: String, default: "CUSTOMER" },
    isEmailVerified: { type: Boolean, default: false },
  },
  { timestamps: true }
);

const User = model("users", userSchema);

export default User;
