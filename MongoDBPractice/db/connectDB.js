import mongoose from "mongoose";
import "dotenv/config";

export const dbConnection = async (dbUrl) => {
  try {
    return await mongoose.connect(dbUrl);
  } catch (error) {
    console.log("DB connection failed!");
  }
};
