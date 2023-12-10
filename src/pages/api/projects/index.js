import Model from "@/model/project";
import dbConnect from "@/Config/DBconfi";

dbConnect();

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      // * Creating New Blog ------------------------------------------------------/
      try {
        // : Generating Slug ---------------------------------/
        var slug = req.body.title
          .trim()
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--/g, "-");
        // : Generating Slug ---------------------------------/

        // : Creating Blog -----------------------------------/

        const body = await Model.create({ ...req.body, slug });

        res.status(201).json({
          success: true,
          message: "Blog Added",
        });
        // : Creating Blog -----------------------------------/

        // ! Error Checking ----------------------------------/
      } catch (error) {
        res.status(401).json({
          success: false,
          message: error.message.split(":")[2].trim().split(",")[0],
        });
      }
      // ! Error Checking ----------------------------------/
      break;
    // * Creating New Blog ------------------------------------------------------/
    case "GET":
      // * Getting All Blogs ------------------------------------------------------/
      // :Finding Blogs -------------------------------------/
      try {
        const body = await Model.find().sort({ createdAt: -1 });
        res.status(201).json({
          success: true,
          message: body,
        });
        // :Finding Blogs -------------------------------------/
        // ! Error Checking Errors ----------------------------/
      } catch (error) {
        console.log(error);
      }
      // ! Error Checking Errors ----------------------------/
      break;
    // * Getting All Blogs ------------------------------------------------------/

    default:
      break;
  }
}
