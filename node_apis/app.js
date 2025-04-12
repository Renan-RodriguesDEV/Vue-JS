// config do express
const express = require("express");
// config do banco de dados com mysql2
const mysql = require("mysql2/promise");
// config do app que irá definir rotas
const app = express();
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
    await conn.end();
    // estancia do objeto alunosMap
    const alunosMap = {};
    // aplicando um forEach para percorrer as linhas do resultado
    rows.forEach((row) => {
      // se o aluno não existe no map, cria um novo objeto
      if (!alunosMap[row.alunosID]) {
        // adiciona o aluno ao map
        alunosMap[row.alunosID] = {
          id: row.alunosID,
          nome: row.nome,
          disciplinas: [],
        };
      }
      // se a matricula existe, adiciona a disciplina ao aluno
      if (row.matriculaID) {
        // adiciona a disciplina ao aluno
        alunosMap[row.alunosID].disciplinas.push({
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
  // TODO: implementar o metodo PUT
  try {
    const { id } = request.params;
    const { aluno } = request.body;
  } catch (error) {}
});

app.listen(porteira, () => {
  console.log(`Servidor rodando na porta ${porteira}`);
});
