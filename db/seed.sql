-- db/seed.sql
\c songs_dev;

INSERT INTO songs (name, artist, album, time, is_favorite) VALUES
('Not Like Us', 'Kendrick Lamar', 'Not Like Us - Single', '4 minutes', true),
('Lies Lies Lies', 'Morgan Wallen', 'Lies Lies Lies - Single', '3 minutes', true),
('A Bar Song (Tipsy)', 'Shaboozey', 'Where I''ve Been, Isn''t Where I''m Going', '2 minutes', true)
;