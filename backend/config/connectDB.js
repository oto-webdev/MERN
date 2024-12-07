import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO);
    console.log("Connected to Mongo");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
