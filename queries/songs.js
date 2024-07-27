const db = require("../db/dbConfig");
const { deleteAlbum } = require("./albums");

const getAllSongs = async (album_id) => {
  try {
    const allSongs = await db.any("SELECT * FROM songs WHERE album_id=$1", album_id);
    return allSongs;
  } catch (err) {
    return err;
  }
};

const getSong = async (album_id, track_no) => {
  try {
    const oneSong = await db.one("SELECT * FROM songs WHERE album_id=$1 AND track_no=$2", [album_id, track_no]);
    return oneSong;
  } catch (error) {
    return error;
  }
};

const updateSong = async (album_id, track_no, newSongData) => {
  try{
    const updatedSong = await db.one("UPDATE songs SET track_no=$1, name=$2, artist=$3, length=$4, is_favorite=$5, album_id=$6 WHERE album_id=$7 AND track_no=$8 RETURNING *", 
    [newSongData.track_no, newSongData.name, newSongData.artist, newSongData['length'], newSongData.is_favorite, newSongData.album_id, album_id, track_no]);
    return updatedSong;
  } catch (error) {
    return error;
  }
}

const newSong = async (album_id, newSongData) => {
  try {
    const newSong = await db.one("INSERT INTO songs (track_no, name, artist, length, is_favorite, album_id) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *",
      [newSongData.track_no, newSongData.name, newSongData.artist, newSongData['length'], newSongData.is_favorite, album_id]);
    return newSong;
  } catch (error){
    return error;
  }
}

const deleteSong = async (album_id, track_no) => {
  try {
    const deletedReview = await db.one("DELETE FROM songs WHERE album_id = $1 AND track_no = $2 RETURNING *",
      [album_id, track_no]
    );
    return deletedReview;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllSongs, getSong, updateSong, newSong, deleteSong };