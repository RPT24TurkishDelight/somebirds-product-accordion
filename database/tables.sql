
DROP TABLE IF EXISTS shoes;

CREATE TABLE shoes (
	id serial NOT NULL PRIMARY KEY,
	data json
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


-- delete from features where shoe_id = 9999999;
-- delete from shoes where id = 9999999;
-- insert into shoes(id, gender, name,  price, description) VALUES(9999999, 'Male', 'Air Force Ones', 90, 'I need two purrs');
-- insert into features(shoe_id, description) VALUES (9999999, 'So I can get tos'),  (9999999, 'Extra verere babyyyy');