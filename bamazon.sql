DROP DATABASE IF EXISTS bamazon_DB;

CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NULL,
  department VARCHAR(45) NOT NULL,
  quantity INT NULL,
  PRIMARY KEY (id)
);

INSERT INTO products (name, price, department, quantity)
VALUES ("iphone", 200, "gadgets", 20), ("jacket", 120, "clothing", 30), ("shoes", 50, "footwear", 15), ("jeans", 60, "pants", 35), ("wallet", 50, "accessories", 45), ("calculator", 35, "school supplies", 25), ("notebook", 5, "stationary", 50), ("basketball", 5, "sporting goods", 50), ("beanie", 10, "head gear", 50), ("water bottle", 35, "essentials", 40)


-- ### Alternative way to insert more than one row
-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("vanilla", 2.50, 100), ("chocolate", 3.10, 120), ("strawberry", 3.25, 75);
