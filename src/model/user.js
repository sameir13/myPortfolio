import mongoose from "mongoose";

const userschema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Username is Required!"],
      trim: true,
    },
    password: {
      type: String,
      required: [true, "Password is Required!"],
    },
  },
  { timestamps: true }
);

export default mongoose?.models?.users || mongoose?.model("users", userschema);