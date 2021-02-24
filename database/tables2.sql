DROP DATABASE IF EXISTS shoespost2;
CREATE DATABASE shoespost2;

\c shoespost2;

DROP TABLE IF EXISTS features;
DROP TABLE IF EXISTS shoes;

CREATE TABLE shoes (
	id serial NOT NULL PRIMARY KEY,
  gender VARCHAR(10),
  name varchar(100),
  price INT,
  description varchar(1000),
  features text[]
);

-- CREATE TABLE features (
--   id serial NOT NULL PRIMARY KEY,
--   shoe_id INT references shoes(id),
--   description varchar(40),
-- );



-- INSERT INTO shoes (id, gender, name, price, description) VALUES (1, 'Male', 'NAMMEEE', 122, 'This is the description');
-- INSERT INTO features(shoe_id, description) VALUES (1, 'description 1'), (1, 'description 2');