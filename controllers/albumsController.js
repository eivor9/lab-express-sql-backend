// DEPENDENCIES
const express = require("express");
const albums = express.Router();

// QUERIES
const { getAllAlbums, getAlbum, createAlbum, updateAlbum, deleteAlbum } = require("../queries/albums");

// SONGS
const songsController = require("./songsController");
albums.use("/:album_id/songs", songsController);
// INDEX
albums.get("/", async (req, res) => {
    const allAlbums = await getAllAlbums();
    if (allAlbums.length) {
        res.status(200).json(allAlbums);
    } else {
        res.status(500).json({ error: "server error" });
    }
});

// SHOW
albums.get("/:id", async (req, res) => {
    const { id } = req.params;
    const album = await getAlbum(id);
    if (album.id) {
      res.json(album);
    } else {
      res.status(404).json({ error: "not found" });
    }
});

// CREATE
albums.post("/", async (req, res) => {
    try {
      const album = await createAlbum(req.body);
      res.json(album);
    } catch (error) {
      res.status(400).json({ error: error });
    }
});

// UPDATE
albums.put("/:id", async (req, res) => {
      const { id } = req.params;
      const updatedAlbum = await updateAlbum(id, req.body);
      res.status(200).json(updatedAlbum);
    }
);

// DELETE
albums.delete("/:id", async (req, res) => {
    const { id } = req.params;
    const deletedAlbum = await deleteAlbum(id);
    if (deletedAlbum.id) {
      res.status(200).json(deletedAlbum);
    } else {
      res.status(404).json("Album not found");
    }
});

module.exports = albums;