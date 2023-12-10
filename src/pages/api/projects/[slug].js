import Model from "@/model/project";
import dbConnect from "@/Config/DBconfi";

dbConnect();

export default async function handler(req, res) {
  // * Performing Operation on Blogs Through Slug -------------------------------------------------------------/
  switch (req.method) {
    case "GET":
      // : Finding Single ----------------------------------/
      try {
        const body = await Model.findOne({
          slug: req.query.slug,
        });

        res.status(201).json({
          message: body,
        });
        // ! Error Checking ----------------------------------/
      } catch (error) {
        console.log(error);
        // ! Error Checking -----------------------------------/
      }
      break;
    // : Finding Single ----------------------------------/

    case "DELETE":
      // : Deleting Blog ----------------------------------/
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

        // ! Error Checking -----------------------------------/
      } catch (err) {
        res.status(err);
        // ! Error Checking ---------------------------------------/
      }
    // : Deleting Blog ----------------------------------/

    case "PUT":
      // : Updating/Adding Comments ----------------------------------/
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
          // : Updating/Adding Comments ----------------------------------/
          // : Deleting Comments  ----------------------------------------/
          case "DELETE":
            let deleteComment = await Model.findOneAndUpdate(
              { slug: req.query.slug },
              { $pull: { comments: { _id: req.body._id } } },
              { new: true }
            );
            console.log(deleteComment);
            res.status(200).json({
              success: true,
              message: "Comment Deleted",
            });
            break;
          default:
            res.send("Invalid Comment");
            break;
        }
        // : Deleting Comments  ----------------------------------------/
      } else {
        // : Updating Blog ---------------------------------------------/
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
          // ! Error Checking -------------------------------------------/
        } catch (e) {
          console.log(e);
          res.status(e).json({
            success: false,
            message: "Something Went Wrong!",
          });
          // ! Error Checking -------------------------------------------/
        }
      }
      break;
    // : Updating Blog ---------------------------------------------/

    default:
      break;
  }
  // * Performing Operation on Blogs Through Slug -------------------------------------------------------------/
}
