import About from "@/model/about";
import dbConnect from "@/Config/DBconfi";
import mongoose from "mongoose";

dbConnect();

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      // * Creating New  ------------------------------------------------------/
      try {
        // : Creating  -----------------------------------/

        const body = await About.create({ ...req.body });

        res.status(201).json({
          success: true,
          message: "Data Added",
        });
        // : Creating  -----------------------------------/

        // ! Error Checking ----------------------------------/
      } catch (error) {
        res.status(401).json({
          success: false,
          message: error.message.split(":")[2].trim().split(",")[0],
        });
      }
      // ! Error Checking ----------------------------------/
      break;
    // * Creating New  ------------------------------------------------------/

    // * Getting Data  ------------------------------------------------------/
    case "GET":
      try {
        // :Finding  -------------------------------------/

        const body = await About.findById(req.query._id);

        if (!body) {
          res.status(201).json({
            success: false,
            message: "No data avalible",
          });
        }
        res.status(201).json({
          success: true,
          message: body,
          // :Finding  -------------------------------------/
        });
        // ! Error Checking Errors ----------------------------/
      } catch (error) {
        res.status(500).json({
          success: false,
          message: error,
          // :Finding  -------------------------------------/
        });
        console.log(error);
      }
      break;
    // ! Error Checking Errors ----------------------------/

    // * Getting Data  ------------------------------------------------------/

    case "PUT":
      try {
        const _id = req.query._id;
        const { ...updateData } = req.body;

        // Check if _id is not provided or is not a valid ObjectId format -------------------------
        if (!_id || !mongoose.Types.ObjectId.isValid(_id)) {
          return res
            .status(400)
            .json({ success: false, message: "Invalid ID format" });
        }

        const about = await About.findByIdAndUpdate(_id, updateData, {
          new: true,
        });

        // If the ID is valid but not found in the database -----------------------------------------------
        if (!about) {
          return res
            .status(404)
            .json({ success: false, message: "Resource not found" });
        }

        res.status(200).json({
          success: true,
          message: "Updated successfully",
          updatedData: about,
        });
      } catch (err) {
        res.status(500).json({
          success: false,
          message: "Internal server error",
          error: err.message,
        });
      }
      break;

    default:
      break;
  }
}
