import app from "../src/app";
import mongoose from "mongoose";

let isConnected = false;

async function connectDB() {
  if (isConnected) return;

  try {
    await mongoose.connect(process.env.DATABASE_URL as string);
    isConnected = true;
    console.log(" MongoDB connected");
  } catch (error) {
    console.error(" MongoDB connection error:", error);
    throw error;
  }
}

export default async function handler(req: any, res: any) {
  await connectDB();
  return app(req, res);
}
