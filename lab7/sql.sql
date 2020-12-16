CREATE DATABASE radioDirectory DEFAULT CHARACTER SET utf8;
USE radioDirectory;

CREATE TABLE chapters (id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                      name VARCHAR(30) NOT NULL UNIQUE KEY,
                      amountPages SMALLINT UNSIGNED NOT NULL,
                      epigraph TEXT(1000) NULL
                      )ENGINE = INNODB;

CREATE TABLE paragraphs (id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                         name VARCHAR(30) NOT NULL UNIQUE KEY,
                         idChapter SMALLINT UNSIGNED NOT NULL, 
                         FOREIGN KEY (idChapter) REFERENCES chapters(id) ON DELETE CASCADE ON UPDATE CASCADE,
                         epigraph TEXT(1000) NULL,
                         amountPages SMALLINT UNSIGNED NOT NULL)
                         ENGINE=INNODB;

CREATE TABLE radioEngineering (id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                               name VARCHAR(30) NOT NULL UNIQUE KEY,
                               description TEXT(65335) NOT NULL,
                               price SMALLINT UNSIGNED NOT NULL)
                               ENGINE=INNODB;

CREATE TABLE paragraphRadio (id SMALLINT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
                             idParagraph SMALLINT UNSIGNED NOT NULL,
                             FOREIGN KEY (idParagraph) REFERENCES paragraphs(id) ON  DELETE CASCADE ON UPDATE CASCADE,
                             idRadioEngr SMALLINT UNSIGNED NOT NULL,
                             FOREIGN KEY (idRadioEngr) REFERENCES radioEngineering(id) ON  DELETE CASCADE ON UPDATE CASCADE)ENGINE=INNODB;