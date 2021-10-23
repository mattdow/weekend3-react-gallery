
CREATE TABLE galleryItems (
    id SERIAL PRIMARY KEY,
    path VARCHAR(255),
    description VARCHAR(255),
    likes INT
);

INSERT INTO galleryItems (path, description, likes)
VALUES  ('images/goat_small.jpg', 'Photo of a goat taken at Glacier National Park.', 0),
('images/Ira_mini.jpg', 'The extraterrestrial Ira, who took the form of a ridiculous dog.',  1),
('images/mattdow_mini.jpg', 'A Matt Dow appears in his natural environment.', 0);