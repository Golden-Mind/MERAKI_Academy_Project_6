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
is_deleted TINYINT DEFAULT 0,
FOREIGN KEY (role_id) REFERENCES roles(id),
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
phoneNumber varchar(255),
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
    commenter_id INT,
    is_deleted TINYINT DEFAULT 0,
    FOREIGN KEY (productId) REFERENCES products(id),
    FOREIGN KEY (commenter_id) REFERENCES  users(id),
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

INSERT INTO products (image, productName, description, price, type,date,forr,phoneNumber,address) VALUES ("https://f7432d8eadcf865aa9d9-9c672a3a4ecaaacdf2fee3b3e6fd2716.ssl.cf3.rackcdn.com/C2299/U8910/IMG_46780-large.jpg
", "Lambborghini", "model 2020, engine v8, 4.0liter tarbo,700hb,Fuel Tank Capacity 100.0, ,automatic transmission", 510000, "Car",CURRENT_DATE(),'Sell','962781750091','jordan');
INSERT INTO products (image, productName, description, price, type,date,forr,phoneNumber,address) VALUES ("https://img.favcars.com/bugatti/veyron/images_bugatti_veyron_2005_3_1280x960.jpg
", "bugatti ", "model 2022, Engine Displacemen 7993, Max Power 1001bhp@6000rpm,Fuel Tank Capacity 100.0, automatic transmission", 510000, "Car",CURRENT_DATE(),'Sell','962776594776','jordan');
INSERT INTO products (image, productName, description, price, type, date,forr,phoneNumber,address) VALUES ("https://cars.usnews.com/static/images/Auto/custom/14497/2021_Mazda_CX-3_1.jpg
", "Mazda CX-30", "model 2019, engine v8, a morsel of extra power from the engine, automatic transmission", 30055, "Car",CURRENT_DATE(),'Sell','962781750091','jordan'); 
INSERT INTO products (image, productName, description, price, type,date,forr,phoneNumber,address) VALUES ("https://img.favcars.com/mg/6/wallpapers_mg_6_2011_4_1280x960.jpg", "MG GT", "model 2022, engine v8, 4.0liter tarbo, 700hb, automatic transmission", 20000, "Car",CURRENT_DATE(),'Sell','962781750091','jordan');
INSERT INTO products (image, productName, description, price, type, date,forr,phoneNumber,address) VALUES ("https://img.favcars.com/shelby/cobra/images_shelby_cobra_1962_7_1280x960.jpg", "cobra 260 (MkI)", "model 2021, engine v8, Fuel type Petrol 700hb, Fuel System 2 Holley carbs,automatic transmission", 35045, "Car",CURRENT_DATE(),'Sell',"962781750091",'jordan');
INSERT INTO products (image, productName, description, price, type, date,forr,phoneNumber,address) VALUES ("https://data.1freewallpapers.com/download/luxurious-beach-villa-1280x960.jpg", "Villa", "Foundation: As per the Structural Engineer’s design either in Size Stone Masonry (SSM).Or RCC footings", 500000, "Home",CURRENT_DATE(),'Sell',"962781750091",'jordan');
INSERT INTO products (image, productName, description, price, type, date,forr,phoneNumber,address) VALUES ("https://www.cashadvance6online.com/data/archive/img/334765850.jpeg
", "Home", "Walls: Load bearing and external walls – 8” thick solid blocks,Partition / internal – 4” solid blocks.If it is framed structured then external walls will be 6” Solid blocks.", 517090, "Home",CURRENT_DATE(),'Sell','962781750091','jordan');
INSERT INTO products (image, productName, description, price, type, date,forr,phoneNumber,address) VALUES ("https://housesolutionegypt.com/images/properties/property-stunning-spacious-villa-with-swimming-pool-in-the-prime-location-of-new-maadi-cairo-egypt-5038-0.jpeg", "Castle", "Frame will be made of Sal or Honne wood, Shutters will be Modular which will be painted on both sides. Door fittings will be of Stainless steel which include Cylindrical ", 10000, "Home",CURRENT_DATE(),'Rent',"962781750091",'jordan');
INSERT INTO products (image, productName, description, price, type, date,forr,phoneNumber,address) VALUES ("https://data.1freewallpapers.com/download/home-1280x960.jpg
", "Home", "Toilet will have wall cladding up to 7’0” height. Kitchen dadooing will be upto 3’0” above cooking platform.", 5105000, "Home",CURRENT_DATE(),'Sell','962781750091','jordan');
INSERT INTO products (image, productName, description, price, type, date,forr,phoneNumber,address) VALUES ("https://data.1freewallpapers.com/download/houses-landscape-mansion-fir-grass-design-desktop-backgrounds-1280x960.jpg", "Home", "Pre polished 20mm thick black Granite fixed on MS angles with adouble bowl stainless steel sink with drain board", 2004040, "Home",CURRENT_DATE(),'Sell',"962781750091'",'jordan');
INSERT INTO products (image, productName, description, price, type, date,forr,phoneNumber,address) VALUES ("https://d1tydw6090df56.cloudfront.net/products/1280x960/iphone-12-pro-max-gold-0-2faaacb.jpg", "iPhone 12 pro gold", "6.1 1170x2532 pixels , iOS 14.1, upgradable to iOS 15.4", 1000, "Phone",CURRENT_DATE(),'Sell',"962781750091'",'jordan');
INSERT INTO products (image, productName, description, price, type, date,forr,phoneNumber,address) VALUES ("https://headtopics.com/images/2022/2/6/digitaltrends/samsung-please-don-t-let-accountants-build-the-galaxy-s22-digital-trends-1490286671514021888.webp", "Glaxy S22", "storage capacity 256GB  ", 666, "Phone",CURRENT_DATE(),'Sell',"962781750091'",'jordan');
INSERT INTO products (image, productName, description, price, type, date,forr,phoneNumber,address) VALUES ("https://media.pazar3.mk/Image/d73a0d8032764005aeece1dfbba2e13a/20180312/false/false/1280/960/Samsung-Galaxy-Note-8.jpeg", "Glaxy Note8 ", "1440x2960 pixels , 2160p , the color black ", 600, "Phone",CURRENT_DATE(),'Sell',"962781750091'",'jordan');
INSERT INTO products (image, productName, description, price, type, date,forr,phoneNumber,address) VALUES ("https://pictures-ethiopia.jijistatic.com/399578_MTI4MC05NjAtNjBlMzlkYzYyMw.jpg", "Glaxy A31", "4GB-A315G/DSL , Unclocked Dual sim Phone w/Quad camera 48Mp  ", 1000, "Phone",CURRENT_DATE(),'Sell',"962781750091'",'jordan');
INSERT INTO products (image, productName, description, price, type, date,forr,phoneNumber,address) VALUES ("https://d1tydw6090df56.cloudfront.net/products/1280x960/iphone-11-yellow-0-a9d8bec.jpg", "iPhone 11", "128 GB , shoot 4k videos , see true to life color in your photos , videos and games on the 6.1 -inch liquid ", 500, "Phone",CURRENT_DATE(),'Sell',"962781750091'",'jordan');