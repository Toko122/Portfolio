import mongoose from "mongoose";

const connectDb = async() => {
      try{
        await mongoose.connect(process.env.MONGODB)
        console.log("MONGODB connected well");
      }catch(err){
        console.log(err)
      }
}

export default connectDb