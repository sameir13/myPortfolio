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

    case "PUT":
      if (req.query.comments) {
        let comments = req.query.comments;
        switch (comments) {
          case "POST":
            let comment = await Model.findOneAndUpdate(
              { slug: req.query.slug },
              { $push: { comments: req.body } },
              { new: true }
            );
            res.status(200).json({
              success: true,
              message: comment,
            });
            break;

          case "DELETE":
            let deleteComment = await Model.findOneAndUpdate(
              { slug: req.query.slug },
              { $pull: { comments: { _id: req.body._id } } },
              { new: true }
            );

            res.status(200).json({
              success: true,
              message: deleteComment,
            });
            break;
          default:
            res.send("Invalid Comment");
            break;
        }
      } else {
        try {
          const SingleBlog = await Model.findOne({
            slug: req.query.slug,
          });
          if (!SingleBlog) {
            res.status(404).json({ success: false, message: "Blog Not Found" });
          } else {
            const updateblog = await Model.findByIdAndUpdate(
              SingleBlog._id,
              {
                $set: req.body,
              },
              { new: true }
            );
            res.status(200).json({
              success: true,
              updateblog,
            });
          }
        } catch (e) {
          console.log(e);
          res.status(e).json({
            success: false,
            message: "Something Went Wrong!",
          });
        }
      }
      break;

    default:
      break;
  }
}
