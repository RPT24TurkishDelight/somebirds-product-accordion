
DROP TABLE IF EXISTS shoes;

CREATE TABLE shoes (
	id serial NOT NULL PRIMARY KEY,
	data jsonb
);

/*
CREATE TABLE shoes (
	id serial NOT NULL PRIMARY KEY,
	corefeatures json,
  gender VARCHAR(10),
  name varchar(100),
  price INT,
  description varchar(255)
);

INSERT INTO shoes (corefeatures, gender, name, price, description) VALUES
    ('{ "lala": "UA502"}', 'Male', 'Aowei', 120, 'Comedy');
*/
