import express from "express";
import "dotenv/config";
import { connectDB } from "./db/connectDB.js";
import {
  addMovie,
  addMultipleMovies,
  fetchMovies,
} from "./controllers/movies.js";

const port = process.env.PORT || 8000;

const server = express();

const con = await connectDB(process.env.DATABASE_URL);

// addMovie();
// addMultipleMovies();
fetchMovies();

server.listen(port, () => {
  if (con) {
    console.log(`DB connected!`);
    console.log(`Server is running on http://localhost:${port}`);
  } else {
    console.log("Server connection failed!");
  }
  // console.log(`Server is running on http://localhost:${port}`);
});
