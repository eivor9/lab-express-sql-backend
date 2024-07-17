-- db/seed.sql
\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('Not Like Us', 'Kendrick Lamar', 'Not Like Us - Single', '4:34', true),
('Lies Lies Lies', 'Morgan Wallen', 'Lies Lies Lies - Single', '3:18', false),
('A Bar Song (Tipsy)', 'Shaboozey', 'Where I''ve Been, Isn''t Where I''m Going', '2:51', false)
;