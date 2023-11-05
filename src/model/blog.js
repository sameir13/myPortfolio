import mongoose from "mongoose";

// ? Creating New Schema --------------------------------------------------------------/

const blogschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is Required!"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Discription is Required!"],
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
    comments: [
      {
        username: { type: String, trim: true },
        comment: { type: String, trim: true },
      },
      { timestamps: true },
    ],
  },
  { timestamps: true }
);
// ? Checking If Collection is Already Created ---------------------------------------/
export default mongoose?.models?.blog || mongoose?.model("blog", blogschema);
