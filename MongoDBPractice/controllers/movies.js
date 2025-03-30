import MovieModel from "../models/movies.js";

export const addMovie = async () => {
  try {
    const m1 = new MovieModel({
      name: "Extraction 2",
      ratings: 4,
      money: 600000,
      genre: ["action", "adventure"],
      isActive: true,
      comments: [{ value: "That was an amazing movie." }],
    });

    const result = await m1.save();
    console.log("result : ", result);
  } catch (error) {
    console.log("Error while adding movie : ", error);
  }
};

export const addMultipleMovies = async () => {
  try {
    const m1 = new MovieModel({
      name: "The Prestige",
      ratings: 2,
      money: 7000,
      genre: ["magic", "sci-fi"],
      isActive: true,
      comments: [{ value: "That was an A grade movie." }],
    });
    const m2 = new MovieModel({
      name: "Se7en",
      ratings: 3,
      money: 605000,
      genre: ["triller", "action"],
      isActive: true,
      comments: [{ value: "That was an B grade movie." }],
    });
    const m3 = new MovieModel({
      name: "The Equalizer",
      ratings: 4,
      money: 6000,
      genre: ["action", "adventure"],
      isActive: false,
      comments: [{ value: "That was an C grade movie." }],
    });
    const m4 = new MovieModel({
      name: "Avengers",
      ratings: 5,
      money: 6500000,
      genre: ["action", "sci-fi"],
      isActive: true,
      comments: [{ value: "That was an A grade movie." }],
    });
    const m5 = new MovieModel({
      name: "Inception",
      ratings: 5,
      money: 6070000,
      genre: ["action", "sci-fi"],
      isActive: true,
      comments: [{ value: "That was an A grade movie." }],
    });

    const result = await MovieModel.insertMany([m1, m2, m3, m4, m5]);
    console.log("result : ", result);
  } catch (error) {
    console.log("Error while adding movies : ", error);
  }
};

export const fetchMovies = async () => {
  try {
    const result = await MovieModel.find();
    console.log("result : ", result);
  } catch (error) {
    console.log("Error while fetching movies : ", error);
  }
};
