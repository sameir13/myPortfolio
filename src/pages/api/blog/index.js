import Model from "../../../../model/user";
import dbConnect from "@/Config/DBconfi";

dbConnect();

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      try {
        var slug = req.body.title
          .trim()
          .toLowerCase()
          .replace(/ /g, "-")
          .replace(/[^\w-]+/g, "")
          .replace(/--/g, "-");

        const body = await Model.create({ ...req.body, slug });

        res.status(201).json({
          success: true,
          message: "Blog Added",
        });
      } catch (error) {
        res.status(401).json({
          success: false,
          message: error.message.split(":")[2].trim().split(",")[0],
        });
      }
      break;
    case "GET":
      try {
        const body = await Model.find().sort({ createdAt: -1 });
        res.status(201).json({
          success: true,
          message: body,
        });
      } catch (error) {
        console.log(error);
      }
      break;

    default:
      break;
  }
}
