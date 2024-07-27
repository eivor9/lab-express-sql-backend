// DEPENDENCIES
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

// CONFIGURATION
const app = express();

// MIDDLEWARE
app.use(cors());
app.use(express.json());
app.use(morgan("tiny"));

// ROUTES
app.get("/", (req, res) => {
  res.send("Welcome to Songs App");
});

// Albums
const albumsController = require("./controllers/albumsController.js");
app.use("/albums", albumsController);

// Songs 
const songsController = require("./controllers/songsController.js");
app.use("/songs", songsController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

// EXPORT
module.exports = app;