CREATE DATABASE pharmacy DEFAULT CHARACTER SET utf8;
USE pharmacy;

CREATE TABLE Clients (
    ID SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(30) UNIQUE KEY NOT NULL,
    Surname VARCHAR(30) NOT NULL,
    Middlename VARCHAR(30) NULL
    ) ENGINE = INNODB;

CREATE TABLE Workers (
    ID SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    Name VARCHAR(30) UNIQUE KEY NOT NULL,
    Surname VARCHAR(30) NOT NULL,
    Middlename VARCHAR(30) NULL
    ) ENGINE = INNODB;

CREATE TABLE Products (
    ID SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(30) UNIQUE KEY NOT NULL,
    description TEXT(65335) NOT NULL,
    price SMALLINT UNSIGNED NOT NULL
    ) ENGINE=INNODB;

CREATE TABLE Deals (
    ID SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    IDClient SMALLINT UNSIGNED NOT NULL, 
    FOREIGN KEY (IDClient) REFERENCES Clients(ID) ON  DELETE CASCADE ON UPDATE CASCADE,
    IDWorker SMALLINT UNSIGNED NOT NULL, 
    FOREIGN KEY (IDWorker) REFERENCES Workers(ID) ON  DELETE CASCADE ON UPDATE CASCADE,
    IDProduct SMALLINT UNSIGNED NOT NULL, 
    FOREIGN KEY (IDProduct) REFERENCES Products(ID) ON  DELETE CASCADE ON UPDATE CASCADE
    ) ENGINE=INNODB;