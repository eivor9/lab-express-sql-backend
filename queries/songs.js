// queries/songs.js
const db = require("../db/dbConfig.js");

// queries/songs.js
const getAllSongs = async () => {
    try {
      const allSongs = await db.any("SELECT * FROM songs");
      return allSongs;
    } catch (error) {
      return error;
    }
};

const getSong = async (id) => {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE id=$1", id);
    return oneSong;
  } catch (error) {
    return error;
  }
};

// CREATE
const createSong = async (song) => {
  try {
    const { name, artist, album, time, is_favorite } = song;
    const newSong = await db.one(
      "INSERT INTO songs (name, artist, album, time, is_favorite) VALUES(${name}, ${artist}, ${album}, ${time}, ${is_favorite}) RETURNING *", 
      {name, artist, album, time, is_favorite}
    );
    return newSong;
  } catch (error) {
    return error;
  }
};

const deleteSong = async (id) => {
  try {
    const deletedBookmark = await db.one("DELETE FROM songs WHERE id = $[id] RETURNING *", {id});
    return deletedBookmark;
  }

  catch (error) {
    return error;
  }
};

const updateSong = async (id, song) => {
  try {
    const updatedBookmark = await db.one("UPDATE songs SET name=$[song.name], artist=$[song.artist], album=$[song.album], time=$[song.time], is_favorite=$[song.is_favorite] WHERE id=$[id] RETURNING *", {id, song});
    return updatedBookmark;
  } 
  
  catch (error) {
    return error;
  }
};

module.exports = { getAllSongs, getSong, createSong, deleteSong, updateSong };