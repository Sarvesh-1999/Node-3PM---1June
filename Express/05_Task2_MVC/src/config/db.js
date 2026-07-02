import mongoose from "mongoose";

export async function connectDB() {
  try {
    await mongoose.connect("mongodb://localhost:27017/task2-mvc");
    console.log("DB Connection successful");
  } catch (error) {
    console.log("DB Connection Failed", error);
  }
}
