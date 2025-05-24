DROP database escola;
-- Cria o banco de dados
CREATE DATABASE IF NOT EXISTS escola;
USE escola;
show tables;

-- Cria a tabela de alunos
CREATE TABLE alunos (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL
);

-- Cria a tabela de matrículas
CREATE TABLE matriculas (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    aluno_id INT NOT NULL,
    disciplina VARCHAR(100) NOT NULL,
    FOREIGN KEY (aluno_id) REFERENCES alunos(id) 
);

INSERT INTO alunos (nome) VALUES ('João Silva');
INSERT INTO alunos (nome) VALUES ('Maria Oliveira');
INSERT INTO alunos (nome) VALUES ('Carlos Souza');
INSERT INTO alunos (nome) VALUES ('Ana Paula');
INSERT INTO alunos (nome) VALUES ('Fernanda Lima');
INSERT INTO alunos (nome) VALUES ('Lucas Pereira');
INSERT INTO alunos (nome) VALUES ('Juliana Costa');
INSERT INTO alunos (nome) VALUES ('Rafael Santos');
INSERT INTO alunos (nome) VALUES ('Beatriz Rocha');
INSERT INTO alunos (nome) VALUES ('Gabriel Almeida');

INSERT INTO matriculas (aluno_id, disciplina) VALUES (1, 'Matemática');
INSERT INTO matriculas (aluno_id, disciplina) VALUES (1, 'Português');
INSERT INTO matriculas (aluno_id, disciplina) VALUES (2, 'História');
INSERT INTO matriculas (aluno_id, disciplina) VALUES (2, 'Geografia');
INSERT INTO matriculas (aluno_id, disciplina) VALUES (3, 'Física');
INSERT INTO matriculas (aluno_id, disciplina) VALUES (4, 'Química');
INSERT INTO matriculas (aluno_id, disciplina) VALUES (5, 'Biologia');
INSERT INTO matriculas (aluno_id, disciplina) VALUES (6, 'Inglês');
INSERT INTO matriculas (aluno_id, disciplina) VALUES (7, 'Artes');
INSERT INTO matriculas (aluno_id, disciplina) VALUES (8, 'Educação Física');