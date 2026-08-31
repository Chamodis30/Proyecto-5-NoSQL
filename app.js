require("dotenv").config();

const express = require("express");
const connectDB = require("./config/db");

const app = express();

connectDB();

app.use(express.json());

const movieRoutes = require("./routes/movie.routes");

app.use("/movies", movieRoutes);

app.listen(3000, () => {
    console.log("Servidor funcionando en el puerto 3000");
});