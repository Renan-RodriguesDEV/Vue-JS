// config do express
const express = require("express");
// config do banco de dados com mysql2
const mysql = require("mysql2/promise");
// config do app que irá definir rotas
const app = express();
// middleware para parsear JSON no corpo das requisições
app.use(express.json());
// config da porta
const porteira = 3000;

// config do para conexão com db
const db_config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "escola",
};
// rota GET para retornar todos os alunos
app.get("/alunos", async (request, response) => {
  try {
    // cria a conexão com o banco de dados
    const conn = await mysql.createConnection(db_config);
    // faz a consulta no banco de dados e obtém os resultados
    const [rows] = await conn.execute(
      `SELECT 
            a.id AS alunoID,
            a.nome,
            m.id AS matriculaID,
            m.disciplina
            FROM alunos a
            LEFT JOIN matriculas m ON a.id = m.aluno_id
            `
    );
    // encerra a conexão
    await conn.end();
    // estancia do objeto alunosMap
    const alunosMap = {};
    // aplicando um forEach para percorrer as linhas do resultado
    rows.forEach((row) => {
      // se o aluno não existe no map, cria um novo objeto
      if (!alunosMap[row.alunoID]) {
        // adiciona o aluno ao map
        alunosMap[row.alunoID] = {
          id: row.alunoID,
          nome: row.nome,
          disciplinas: [],
        };
      }
      // se a matricula existe, adiciona a disciplina ao aluno
      if (row.matriculaID) {
        // adiciona a disciplina ao aluno
        alunosMap[row.alunoID].disciplinas.push({
          id: row.matriculaID,
          nome: row.disciplina,
        });
      }
    });
    // retorna o resultado em um formato JSON conventendo o alunosMap
    response.json(Object.values(alunosMap));
  } catch (error) {
    console.error(error);
    return response
      .status(500)
      .json({ error: "Erro ao conectar ao banco de dados" });
  }
});

// rota PUT para atualizar um aluno pelo id
app.put("/alunos/:id", async (request, response) => {
  try {
    // parametro id passado na URL
    const { id } = request.params;
    // corpo do JSON (lá ele) do aluno a ser atualizado
    const { nome } = request.body;

    // verifica se o nome do aluno foi passado
    if (!nome) {
      return response.status(400).json({
        error: "o nome do Aluno deve ser passado como body seu trouxa!!",
      });
    }
    // cria a conexão com o banco de dados
    const conn = await mysql.createConnection(db_config);
    // faz a consulta (UPDATE) no banco de dados e obtém os resultados
    const [result] = await conn.execute(
      `UPDATE alunos SET nome = ? WHERE id = ?`,
      [nome, id]
    );

    // encerra a conexão
    await conn.end();

    // verifica se o aluno foi encontrado e atualizado
    if (result.affectedRows === 0) {
      return response
        .status(404)
        .json({ error: "Aluno não encontrado seu trouxa!" });
    }
    // retorna o resultado no formato JSON
    response.json({ message: "Aluno atualizado com sucesso!", updated: id });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      error: "Erro ao conectar ao banco de dados",
    });
  }
});
// rota DELETE para deletar um aluno pelo id
app.delete("/alunos/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const conn = await mysql.createConnection(db_config);
    // faz a consulta (DELETE) no banco de dados e obtém os resultados
    const [result] = await conn.execute(`DELETE FROM alunos WHERE id = ? `, [
      id,
    ]);

    await conn.end();

    // verifica se o aluno foi encontrado e deletado
    if (result.affectedRows === 0) {
      return response
        .status(404)
        .json({ error: "Aluno não encontrado seu trouxa!" });
    }
    response.json({ message: "Aluno deletado com sucesso!", deleted: id });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      error: "Erro ao conectar ao banco de dados",
    });
  }
});
// rota POST para inserir um aluno pelo id
app.post("/alunos/", async (request, response) => {
  // TODO: implementar o metodo POST
  try {
    const { nome } = request.body;
    const conn = await mysql.createConnection(db_config);

    // verifica se o nome do aluno foi passado
    if (!nome) {
      return response.status(400).json({
        error: "o nome do Aluno deve ser passado como body seu trouxa!!",
      });
    }

    // faz a consulta (INSERT) no banco de dados e obtém os resultados
    const [result] = await conn.execute(
      `INSERT INTO alunos (nome) VALUES (?)`,
      [nome]
    );
    // encerra a conexão
    await conn.end();

    // verifica se o aluno foi encontrado e atualizado
    if (result.affectedRows === 0) {
      return response
        .status(404)
        .json({ error: "Aluno não encontrado seu trouxa!" });
    }
    // retorna o resultado no formato JSON
    response.json({
      message: "Aluno inserido com sucesso!",
      aluno: {
        id: result.insertId !== null ? result.insertId : null, // ternario para verificar se o id foi inserido
        nome: nome,
      },
    });
  } catch (error) {
    console.error(error);
    return response.status(500).json({
      error: "Erro ao conectar ao banco de dados",
    });
  }
});

app.listen(porteira, () => {
  console.log(
    `Servidor rodando na porta ${porteira} em http://localhost:${porteira}/alunos`
  );
});
