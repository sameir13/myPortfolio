import mongoose from "mongoose";


export default function dbConnect(){

    if(mongoose.connection.readyState >= 1 ){
        return
    }

    mongoose.connect("mongodb://127.0.0.1:27017/Blogs")
}