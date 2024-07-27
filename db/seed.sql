-- db/seed.sql
\c albums_dev;

INSERT INTO albums (name, artist, length_in_minutes, number_of_songs, release_year, genre) VALUES
('Folie à Deux', 'Fall Out Boy', 50, 13, 2008, 'Alternative'),
('Common Courtesy (Deluxe Edition)', 'A Day To Remember', 63, 16, 2013, 'Hard Rock'),
('Collide With the Sky', 'Pierce the Veil', 49, 13, 2012, 'Alternative')
;

INSERT INTO songs (album_id, track_no, name, artist, length, is_favorite) VALUES
(1, 1,'Disloyal Order of Water Buffaloes', 'Fall Out Boy', '4:17', false),
(1, 2,'I Don''t Care', 'Fall Out Boy', '3:34', true),
(1, 3,'She''s My Winona', 'Fall Out Boy', '3:51', false),
(1, 4,'America''s Suitehearts', 'Fall Out Boy', '3:34', true),
(1, 5,'Headfirst Slide into Cooperstown on a Bad Bet', 'Fall Out Boy', '3:54', true),
(1, 6,'The (Shipped) Gold Standard', 'Fall Out Boy', '3:18', false),
(1, 7,'(Coffee''s for Closers)', 'Fall Out Boy', '4:35', false),
(1, 8,'What a Catch, Donnie', 'Fall Out Boy', '4:50', false),
(1, 9,'27', 'Fall Out Boy', '3:12', false),
(1, 10,'Tiffany Blews', 'Fall Out Boy', '3:43', false),
(1, 11,'w.a.m.s.', 'Fall Out Boy', '4:38', false),
(1, 12,'20 Dollar Nose Bleed', 'Fall Out Boy', '4:17', true),
(1, 13,'West Coast Smoker', 'Fall Out Boy', '2:45', false),
(2, 1,'City of Ocala', 'A Day to Remember', '3:29', false),
(2, 2,'Right Back at It Again', 'A Day to Remember', '3:20', true),
(2, 3,'Sometimes You''re the Hammer, Sometimes You''re the Nail', 'A Day to Remember', '4:34', true),
(2, 4,'Dead & Buried', 'A Day to Remember', '3:13', false),
(2, 5,'Best of Me', 'A Day to Remember', '3:27', false),
(2, 6,'I''m Already Gone', 'A Day to Remember', '4:04', false),
(2, 7,'Violence (Enough is Enough)', 'A Day to Remember', '4:01', false),
(2, 8,'Life @ 11', 'A Day to Remember', '3:22', false),
(2, 9,'I Surrender', 'A Day to Remember', '3:34', false),
(2, 10,'Life Lessons Learned the Long Way', 'A Day to Remember', '2:17', false),
(2, 11,'End of Me', 'A Day to Remember', '3:57', false),
(2, 12,'The Document Speaks for Itself', 'A Day to Remember', '4:43', false),
(2, 13,'I Remember', 'A Day to Remember', '9:04', false),
(2, 14,'Leave All the Lights On', 'A Day to Remember', '3:31', false),
(2, 15,'Good Things', 'A Day to Remember', '2:59', false),
(2, 16,'Same Book But Never the Same Page', 'A Day to Remember', '4:04', false),
(3, 1,'May These Noises Startle You in Your Sleep Tonight', 'Pierce the Veil', '1:21', false),
(3, 2,'Hell Above', 'Pierce the Veil', '3:43', false),
(3, 3,'A Match into Water', 'Pierce the Veil', '3:32', true),
(3, 4,'King for a Day (feat. Kellin Quinn)', 'Pierce the Veil', '3:56', true),
(3, 5,'Bulls in the Bronx', 'Pierce the Veil', '4:27', false),
(3, 6,'Props & Mayhem', 'Pierce the Veil', '3:37', false),
(3, 7,'Tangled in the Great Escape (feat. Jason Butler)', 'Pierce the Veil', '5:56', false),
(3, 8,'I''m Low on Gas and You Need a Jacket', 'Pierce the Veil', '4:12', false),
(3, 9,'The First Punch', 'Pierce the Veil', '3:25', false),
(3, 10,'One Hundred Sleepless Nights', 'Pierce the Veil', '3:41', false),
(3, 11,'Stained Glass Eyes and Colorful Tears', 'Pierce the Veil', '3:38', false),
(3, 12,'Hold on Till May (feat. Lindsey Stamey)', 'Pierce the Veil', '4:38', false),
(3, 13,'I''m Low on Gas and You Need a Jacket (Alternative Mix)', 'Pierce the Veil', '3:40', false)
;
