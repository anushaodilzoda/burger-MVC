
DROP DATABASE IF EXISTS yc5669fe5eih641g;
Create Database yc5669fe5eih641g;
USE yc5669fe5eih641g;
CREATE TABLE burgers(
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(255) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    PRIMARY KEY (id)
);

USE yc5669fe5eih641g;


INSERT INTO burgers (burger_name)
VALUES  ("Beer Cheeseburger"),
        ("Bacon Cheeseburger"),
        ("Cajun Chicken Burger"),
        ("Chicken Salad Burger");