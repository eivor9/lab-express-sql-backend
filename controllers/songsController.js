// Dependencies
const express = require("express");
const songs = express.Router({ mergeParams: true});
const  { getAlbum } = require("../queries/albums");

// Queries
const { getAllSongs, getSong, updateSong, newSong, deleteSong } = require("../queries/songs");

// INDEX
songs.get("/", async (req, res) => {
  const { album_id } = req.params;
  const songs = await getAllSongs(album_id);
  const album = await getAlbum(album_id);
  if(album.id){
    res.status(200).json({...album, songs});
  } else {
    res.status(500).json({error: "Album not found"});
  }
});

// SHOW
songs.get("/:track_no", async (req, res) => {
  const { album_id, track_no } = req.params;
  const song = await getSong(album_id, track_no);
  const album = await getAlbum(album_id);
  if (Object.keys(song).length){
    res.status(200).json({...song, album});
  } else {
    res.status(404).json("Song not found");
  }
});

// UPDATE
songs.put("/:track_no", async (req, res) => {
  const { album_id, track_no } = req.params;
  const updatedSong = await updateSong(album_id, track_no, req.body);
  if (updatedSong.track_no) {
    res.status(200).send(`Track number ${track_no} of Album ID: ${album_id}\nSuccessfully updated`);
  } else {
    res.status(404).json(updatedSong);
  }
});

// POST
songs.post("/", async (req, res) => {
  const { album_id } = req.params;
  const song = await newSong(album_id, req.body);
  if (song.track_no){
    res.status(200).json(song);
  } else {
    res.status(404).json({message: "an error occured", song});
  }
});

// DELETE
songs.delete("/:track_no", async (req, res) => {
  const { album_id, track_no } = req.params;
  const deletedSong = await deleteSong(album_id, track_no);
  if (deletedSong.track_no) {
    res.status(200).json(deletedSong);
  } else {
    res.status(404).json({ error: "Song not found", deletedSong});
  }
});

module.exports = songs;