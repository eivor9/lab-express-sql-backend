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

module.exports = { getAllSongs, getSong, createSong };