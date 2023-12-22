import mongoose from "mongoose";

// ? Creating New Schema --------------------------------------------------------------/

const projectschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is Required!"],
      unique: true,
      trim: true,
    },
    catagory: {
      type: String,
      required: [true, "Catagory is Required!"],
    },
    img: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: [true, "Link is Required!"],
      unique: true,
      trim: true,
    },
    subtitle: {
      type: String,
      required: false,
      trim: true,
    },
  },
  { timestamps: true }
);
// ? Checking If Collection is Already Created ---------------------------------------/
export default mongoose?.models?.Project ||
  mongoose?.model("Project", projectschema);
