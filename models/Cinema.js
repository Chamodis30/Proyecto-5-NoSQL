const mongoose = require("mongoose");

const cinemaSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    address: {
      type: String
    },
    movies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "movies"
      }
    ]
  },
  {
    timestamps: true
  }
);

const Cinema = mongoose.model("cinemas", cinemaSchema);

module.exports = Cinema;