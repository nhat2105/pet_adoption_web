CREATE DATABASE pets_adoption;

CREATE TABLE pets (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    type VARCHAR(255) NOT NULL,
    imgUrl VARCHAR(255),
    age INT
);
