const express = require("express");
const Movie = require("../models/Movie");

const router = express.Router();

// Obtener todas las películas
router.get("/", async (req, res) => {
  try {
    const movies = await Movie.find();
    return res.status(200).json(movies);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Obtener una película por id
router.get("/:id", async (req, res) => {
  try {
    const movie = await Movie.findById(req.params.id);

    if (!movie) {
      return res.status(404).json({ message: "Película no encontrada" });
    }

    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Crear una película
router.post("/", async (req, res) => {
  try {
    const newMovie = new Movie(req.body);
    const movieSaved = await newMovie.save();

    return res.status(201).json(movieSaved);
  } catch (error) {
    return res.status(400).json(error);
  }
});

// Modificar una película
router.put("/:id", async (req, res) => {
  try {
    const movieUpdated = await Movie.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    return res.status(200).json(movieUpdated);
  } catch (error) {
    return res.status(400).json(error);
  }
});

// Eliminar una película
router.delete("/:id", async (req, res) => {
  try {
    await Movie.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      message: "Película eliminada correctamente",
    });
  } catch (error) {
    return res.status(400).json(error);
  }
});

module.exports = router;