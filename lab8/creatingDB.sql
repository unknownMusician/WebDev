create database Calendar default character set utf8;
use Calendar;

create table Users (
    id smallint unsigned AUTO_INCREMENT primary key,
    title varchar(30) not null unique key,
    password varchar(30) not null
) ENGINE = INNODB;

create table Events (
    id smallint unsigned AUTO_INCREMENT primary key,
    idUser smallint unsigned not null, foreign key (idUser) references Users(id) on delete cascade on update cascade,
    title varchar(30) not null,
    description text(1000) null,
    dateTimeStart datetime not null,
    dateTimeEnd datetime not null
) ENGINE = INNODB;