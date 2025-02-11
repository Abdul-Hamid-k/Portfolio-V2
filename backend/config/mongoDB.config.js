import mongoose from "mongoose";

const connectDB = () => {
  mongoose.connect(process.env.MONGODB_URL)
    .then(res => console.log("MongoDB connectes"))
    .catch(err => console.error("Error connecting to MongoDB", err));
}


export default connectDB;