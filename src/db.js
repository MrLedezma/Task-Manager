import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost/tm");
    console.log("Database connected sucessfully");
  } catch (error) {
    console.log(error);
  }
};
