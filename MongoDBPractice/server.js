import express from "express";
import "dotenv/config";
import { dbConnection } from "./db/connectDB.js";
import { router } from "./routes/router.js";

const PORT = process.env.PORT || 8000;

const server = express();

const con = await dbConnection(process.env.DATABASE_URL);

server.use(router);

server.listen(() => {
  if (con) {
    console.log(`DB connected!`);
    console.log(`Server is running on http://localhost:${PORT}`);
  } else {
    console.log("Server connection failed!");
  }
});
