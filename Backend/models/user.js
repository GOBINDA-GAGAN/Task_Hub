import mongoose from "mongoose";
import { boolean } from "zod";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    profilePicture: {
      type: String,
    },
    isEmailVerifier: {
      type: boolean,
      default: false,
    },
    lastLogin: {
      type: Date,
    },
    is2FAEnabled: { type: boolean, default: false },
    twoFAOtp: { type: String, select: false },
    twoFAOtpExpires: {
      type: Date,
      select: false,
    },
  },
  {
    timestamps: true,
  }
);

const User=mongoose.model("User",userSchema)
export default User;