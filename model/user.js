import mongoose from "mongoose";

const userschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is Required!"],
      trim: true,
    },
    description: {
      type: String,
      required: [false, "Discription is Required!"],
    },
    authorname: {
      type: String,
      required: [true, "Authorname is Required!"],
    },
    catagory: {
      type: String,
      required: [true, "Catagory is Required!"],
    },
    blogimg: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    subtitle: {
      type: String,
      required: true,
      trim: true,
    },
    comment: [
      {
        username: { type: String, trim: true },
        comment: { type: String, trim: true },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose?.models?.user || mongoose?.model("user", userschema);
