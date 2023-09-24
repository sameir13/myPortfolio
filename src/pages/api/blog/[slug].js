import Model from "../../../../model/user";
import dbConnect from "@/Config/DBconfi";

dbConnect();

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      try {
        const body = await Model.findOne({
          slug: req.query.slug,
        });
        res.status(201).json({
          success: true,
          message: body,
        });
      } catch (error) {
        console.log(error);
      }
      break;
    case "DELETE":
      try {
        const singleBlog = await Model.findOne({
          slug: req.query.slug,
        });
        if (!singleBlog) {
          res.status(404).json({ success: false, message: "Blog Not Found" });
        } else {
          const DeleteBlog = await Model.findByIdAndDelete(singleBlog._id);
          res.status(200).json({
            success: true,
            message: "Your Blog has been deleted successfuly",
          });
        }
      } catch (err) {
        res.status(err);
      }

      break;

    default:
      break;
  }
}
