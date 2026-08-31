const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    director: { type: String, required: true },
    year: { type: Number, required: true },
    genre: { type: String },
    duration: { type: Number }, // minutos
    image: { type: String }
  },
  {
    timestamps: true
  }
);

const Movie = mongoose.model("movies", movieSchema);

module.exports = Movie;