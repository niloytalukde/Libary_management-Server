import { Server } from "http";
import app from "./app";
import mongoose from "mongoose";
require("dotenv").config();

let server: Server;
const port = 5000;

async function main() {
  try {
    await mongoose.connect(process.env.DATABASE_URL!);

    server = app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`);
    });
  } catch (error) {
    console.log('MongoDB connection error:', error);
  }
}

main();
