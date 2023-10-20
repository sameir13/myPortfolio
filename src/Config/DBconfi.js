import mongoose from "mongoose";

export default function dbConnect() {

  // : Checking if The Database is Connected or Not ----------------------/

  if (mongoose.connection.readyState >= 1) {
    return;
  }

  // ? Connecting With The Database --------------------------------------/
  
  mongoose.connect(process.env.MONGO_URI);
}
