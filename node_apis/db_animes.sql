CREATE DATABASE animes;

USE animes;

CREATE TABLE animes (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(255),
    genero VARCHAR(255),
    autor VARCHAR(255)
);

INSERT INTO
    animes (nome, genero, autor)
VALUES (
        'Nanatsu no Taizai',
        'Ação, Fantasia',
        'Nakaba Suzuki'
    ),
    (
        'Dragon Ball',
        'Ação, Aventura',
        'Akira Toriyama'
    ),
    (
        'Jujutsu Kaisen',
        'Ação, Sobrenatural',
        'Gege Akutami'
    );