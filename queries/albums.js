const db = require("../db/dbConfig.js");

const getAllAlbums = async () => {
    try {
      const allAlbums = await db.any("SELECT * FROM albums");
      return allAlbums;
    } catch (error) {
      return error;
    }
};

const getAlbum = async (id) => {
  try {
    const album = await db.one("SELECT * FROM albums WHERE id=$1", id);
    return album;
  } catch (error) {
    return error;
  }
};

const createAlbum = async (album) => {
  try {
    const newAlbum = await db.one(
      "INSERT INTO albums (name, artist, length_in_minutes, number_of_songs, release_year, genre) VALUES($1, $2, $3, $4, $5, $6) RETURNING *",
      [album.name, album.artist, album.length_in_minutes, album.number_of_songs, album.release_year, album.genre]
    );
    return newAlbum;
  } catch (error) {
    return error;
  }
};

const updateAlbum = async (id, album) => {
  try {
    const updatedAlbum = await db.one(
      "UPDATE albums SET name=$1, artist=$2, length_in_minutes=$3, number_of_songs=$4, release_year=$5, genre=$6 WHERE id=$7 RETURNING *",
      [album.name, album.artist, album.length_in_minutes, album.number_of_songs, album.release_year, album.genre, id]
    );
    return updatedAlbum;
  } catch (error) {
    return error;
  }
};

const deleteAlbum = async (id) => {
  try {
    const deletedAlbum = await db.one(
      "DELETE FROM albums WHERE id=$1 RETURNING *",
      id
    );
    return deletedAlbum;
  } catch (error) {
    return error;
  }
};

module.exports = {
    getAllAlbums,
    getAlbum,
    createAlbum,
    updateAlbum,
    deleteAlbum
};