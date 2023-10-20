import mongoose from "mongoose";

// ? Creating New Schema --------------------------------------------------------------/

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

// ? Checking If Collection is Already Created ---------------------------------------/ 
export default mongoose?.models?.users || mongoose?.model("users", userschema);