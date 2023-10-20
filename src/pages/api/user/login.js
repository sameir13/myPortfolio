import User from "@/model/user";
import dbConnect from "@/Config/DBconfi";
import { GenAccessToken } from "@/helper/jwt";
import { serialize } from "cookie";

dbConnect();

export default async function POST(req, res) {
  try {
    // * Checking User-------------------------------------------------

    // : username ---------------------------------/
    var foundUser = await User.findOne({
      $or: [{ username: req.body.username }],
    });

    if (!foundUser) {
      res.status(400).json({
        success: false,
        message: "User not found!",
      });
    }
    // : username --------------------------------/

    // : Check Password Validity------------------/

    var isValidated = await User.findOne({
      $or: [{ password: req.body.password }],
    });

    if (!isValidated) {
      res.status(400).json({
        success: false,
        message: "Invalid Password!",
      });
    }
    // : Check Password Validity------------------/

    // * Checking User-----------------------------------------------------------------/
    // ?-------------------------------------------------------------------------------------------------------------//
    // * Storing Token-----------------------------------------------------------------/

    // :Payload-----------------------------------/

    var userData = {
      id: foundUser._id,
      username: foundUser.username,
    };

    const AccessToken = await GenAccessToken(userData);
    // :Payload-----------------------------------/

    // :Storing in Head---------------------------/

    res.setHeader(
      "Set-Cookie",
      serialize("AccessToken", AccessToken, {
        path: "/",
        httpOnly: true,
        secure: true,
      })
    );
    // :Storing in Head---------------------------/

    // * Storing Token-----------------------------------------------------------------/
    // ?-------------------------------------------------------------------------------------------------------------//


    res.status(201).json({
      message: "Login Successfully",
      success: true,
    });
    // ! Error Checking----------------------------------------------------------------/
  } catch (error) {
    console.log(error);
    res.status(401).json({
      success: false,
      message: error,
    });
    // ! Error Checking----------------------------------------------------------------/
  }
}
