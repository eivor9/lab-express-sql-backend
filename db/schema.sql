-- db/schema.sql
DROP DATABASE IF EXISTS albums_dev;
CREATE DATABASE albums_dev;

\c albums_dev;

CREATE TABLE albums (
 id SERIAL PRIMARY KEY,
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 length_in_minutes INT,
 number_of_songs INT,
 release_year INT,
 genre TEXT
);

DROP TABLE IF EXISTS songs;

CREATE TABLE songs (
 track_no INT,
 name TEXT NOT NULL,
 artist TEXT NOT NULL,
 length TEXT,
 is_favorite BOOLEAN,
 album_id INTEGER REFERENCES albums (id)
 ON DELETE CASCADE
);