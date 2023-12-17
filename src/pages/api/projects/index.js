import Model from "@/model/project";
import dbConnect from "@/Config/DBconfi";

dbConnect();

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      // * Creating New Project ------------------------------------------------------/
      try {
        // : Creating Project -----------------------------------/

        const body = await Model.create({ ...req.body, slug });

        res.status(201).json({
          success: true,
          message: "Project Have been Added",
        });
        // : Creating Project -----------------------------------/

        // ! Error Checking ----------------------------------/
      } catch (error) {
        res.status(401).json({
          success: false,
          message: error.message.split(":")[2].trim().split(",")[0],
        });
      }
      // ! Error Checking ----------------------------------/
      break;
    // * Creating New Project ------------------------------------------------------/

    // * Getting All Projects ------------------------------------------------------/
    case "GET":
      try {
        // :Finding Projects -------------------------------------/
        const body = await Model.find().sort({ createdAt: -1 });
        res.status(201).json({
          success: true,
          message: body,
          // :Finding projects -------------------------------------/
        });
        // ! Error Checking Errors ----------------------------/
      } catch (error) {
        console.log(error);
      }
      break;
    // ! Error Checking Errors ----------------------------/

    // * Getting All projects ------------------------------------------------------/

    // : Deleting Project ----------------------------------/

    case "DELETE":
      try {
        const Project = await Model.findOne({
          _id: req.query._id,
        });
        if (!Project) {
          res.status(404).json({ success: false, message: "Project Not Found" });
        } else {
          await Model.findByIdAndDelete(Project._id);
          res.status(200).json({
            success: true,
            message: "Your Project has been deleted successfuly",
          });
        }

        // ! Error Checking -----------------------------------/
      } catch (err) {
        res.status(err);
        // ! Error Checking ---------------------------------------/
      }

    // : Deleting Project ----------------------------------/

    default:
      break;
  }
}
