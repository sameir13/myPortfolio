import mongoose from "mongoose";

// ? Creating New Schema --------------------------------------------------------------/

const projectschema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is Required!"],
      trim: true,
    },
    // desc: {
    //   type: String,
    //   required: [true, "Discription is Required!"],
    // },
    catagory: {
      type: String,
      required: [true, "Catagory is Required!"],
    },
    img: {
      type: [],
      required: true,
    },
    link: {
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
  },
  { timestamps: true }
);
// ? Checking If Collection is Already Created ---------------------------------------/
export default mongoose?.models?.Project ||
  mongoose?.model("Project", projectschema);
