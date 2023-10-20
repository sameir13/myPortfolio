import User from "@/model/user";
import dbConnect from "@/Config/DBconfi";

dbConnect();

export default async function POST(req, res) {
  // :Create a new user --------------------------------/

  try {
    const body = await User.create(req.body);

    res.status(201).json({
      success: true,
      message: "Created Successfully",
      body,
    });

    // :Create a new user --------------------------------/
  // ?-------------------------------------------------------------------------------------------//
    // ! Error Checking ----------------------------------/
  } catch (error) {
    if (error.code == 11000) {
      res.status(401).json({
        success: false,
        message: "Already Exist!",
      });
    }
    res.status(401).json({
      success: false,
      message: error.message.split(":")[2].trim().split(",")[0],
    });
    // ! Error Checking ----------------------------------/
  }
}
