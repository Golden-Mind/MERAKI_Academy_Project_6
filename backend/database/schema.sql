DROP DATABASE  MERAKI_Academy_Project_6;
CREATE DATABASE  MERAKI_Academy_Project_6;
USE  MERAKI_Academy_Project_6;


CREATE TABLE roles (
id INT AUTO_INCREMENT NOT NULL,
role VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);


CREATE TABLE permission (
id INT AUTO_INCREMENT NOT NULL,
permission VARCHAR(255) NOT NULL,
PRIMARY KEY (id)
);


CREATE TABLE role_permission (
id INT AUTO_INCREMENT NOT NULL,
role_id INT,
permission_id INT,
-- both of the primary keys are set as foreign keys
FOREIGN KEY (role_id) REFERENCES roles(id),
FOREIGN KEY (permission_id) REFERENCES permission(id),
PRIMARY KEY (id)
);

CREATE TABLE users(
id INT AUTO_INCREMENT NOT NULL,
firstName VARCHAR(255),
lastName VARCHAR(255),
country VARCHAR(255),
email VARCHAR(255) UNIQUE,
password VARCHAR(255),
role_id INT,
image VARCHAR(255),
FOREIGN KEY (role_id) REFERENCES roles(id),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);

CREATE TABLE products(
id INT AUTO_INCREMENT NOT NULL,
image VARCHAR(255) ,
productName VARCHAR(255),
description VARCHAR(255),
price INT,
type VARCHAR(255),
date DATE NOT NULL,
forr VARCHAR(255),
phoneNumber INT,
address VARCHAR(255),
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(id),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);


CREATE TABLE intersted(
id INT AUTO_INCREMENT NOT NULL,
product_id INT,
user_id INT ,
FOREIGN KEY (product_id) REFERENCES products(id),
FOREIGN KEY (user_id) REFERENCES users(id),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);


CREATE TABLE comments(
    id INT AUTO_INCREMENT NOT NULL,
    comment VARCHAR(255),
    productId INT,
    FOREIGN KEY (productId) REFERENCES products(id),
    commenter_id INT,
    FOREIGN KEY (commenter_id) REFERENCES users(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);


CREATE TABLE favorite_list(
id INT AUTO_INCREMENT NOT NULL,
product_id INT,
user_id INT,
FOREIGN KEY (product_id) REFERENCES products(id),
FOREIGN KEY (user_id) REFERENCES users(id),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);

INSERT INTO roles (role) VALUES ("user");

INSERT INTO products (image, productName, description, price, type,date,forr,phoneNumber,address) VALUES ("https://www.motortrend.com/uploads/sites/5/2020/02/2020-Lamborghini-Aventador-SVJ-Roadster-44.jpg
", "Lambborghini", "model 2020, engine v8, 4.0liter tarbo,700hb, automatic transmission", 510000, "Car",CURRENT_DATE(),'buy',0791156784,'jordan');
INSERT INTO products (image, productName, description, price, type,date,forr,phoneNumber,address) VALUES ("https://images.netdirector.co.uk/gforces-auto/image/upload/w_343,h_257,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/4f3a94f309517d480173272c101fe224/thumbnail_mobile.jpg", "MG GT", "model 2022, engine v8, 4.0liter tarbo, 700hb, automatic transmission", 20000, "Car",CURRENT_DATE(),'buy',0781750091,'jordan');
INSERT INTO products (image, productName, description, price, type,date,forr,phoneNumber,address) VALUES ("https://www.motortrend.com/uploads/sites/5/2020/02/2020-Lamborghini-Aventador-SVJ-Roadster-44.jpg
", "Lambborghini", "model 2020, engine v8, 4.0liter tarbo,700hb, automatic transmission", 510000, "Car",CURRENT_DATE(),'buy',0791156784,'jordan');
INSERT INTO products (image, productName, description, price, type, date,forr,phoneNumber,address) VALUES ("https://images.netdirector.co.uk/gforces-auto/image/upload/w_343,h_257,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/4f3a94f309517d480173272c101fe224/thumbnail_mobile.jpg", "MG GT", "model 2022, engine v8, 4.0liter tarbo, 700hb, automatic transmission", 20000, "Car",CURRENT_DATE(),'buy',0781750091,'jordan');
INSERT INTO products (image, productName, description, price, type, date,forr,phoneNumber,address) VALUES ("https://www.motortrend.com/uploads/sites/5/2020/02/2020-Lamborghini-Aventador-SVJ-Roadster-44.jpg
", "Lambborghini", "model 2020, engine v8, 4.0liter tarbo,700hb, automatic transmission", 510000, "Car",CURRENT_DATE(),'buy',0791156784,'jordan');
INSERT INTO products (image, productName, description, price, type, date,forr,phoneNumber,address) VALUES ("https://images.netdirector.co.uk/gforces-auto/image/upload/w_343,h_257,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/4f3a94f309517d480173272c101fe224/thumbnail_mobile.jpg", "MG GT", "model 2022, engine v8, 4.0liter tarbo, 700hb, automatic transmission", 20000, "Car",CURRENT_DATE(),'buy',0781750091,'jordan');
INSERT INTO products (image, productName, description, price, type, date,forr,phoneNumber,address) VALUES ("https://www.motortrend.com/uploads/sites/5/2020/02/2020-Lamborghini-Aventador-SVJ-Roadster-44.jpg
", "Lambborghini", "model 2020, engine v8, 4.0liter tarbo,700hb, automatic transmission", 510000, "Car",CURRENT_DATE(),'buy',0791156784,'jordan');
INSERT INTO products (image, productName, description, price, type, date,forr,phoneNumber,address) VALUES ("https://images.netdirector.co.uk/gforces-auto/image/upload/w_343,h_257,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/4f3a94f309517d480173272c101fe224/thumbnail_mobile.jpg", "MG GT", "model 2022, engine v8, 4.0liter tarbo, 700hb, automatic transmission", 20000, "Car",CURRENT_DATE(),'buy',0781750091,'jordan');
INSERT INTO products (image, productName, description, price, type, date,forr,phoneNumber,address) VALUES ("https://www.motortrend.com/uploads/sites/5/2020/02/2020-Lamborghini-Aventador-SVJ-Roadster-44.jpg
", "Lambborghini", "model 2020, engine v8, 4.0liter tarbo,700hb, automatic transmission", 510000, "Car",CURRENT_DATE(),'buy',0791156784,'jordan');
INSERT INTO products (image, productName, description, price, type, date,forr,phoneNumber,address) VALUES ("https://images.netdirector.co.uk/gforces-auto/image/upload/w_343,h_257,dpr_2.0,q_auto,c_fill,f_auto,fl_lossy/auto-client/4f3a94f309517d480173272c101fe224/thumbnail_mobile.jpg", "MG GT", "model 2022, engine v8, 4.0liter tarbo, 700hb, automatic transmission", 20000, "Car",CURRENT_DATE(),'buy',0781750091,'jordan');