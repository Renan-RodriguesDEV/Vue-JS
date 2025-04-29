// config do express
const express = require("express");
// config do banco de dados com mysql2
const mysql = require("mysql2/promise");
// config do app que irá definir rotas
const app = express();
app.use(express.json());
const PORT = 3000;

const config = {
  host: "localhost",
  user: "root",
  password: "",
  database: "animes",
};
// GET para retornar todos os animes
app.get("/animes", async (req, res) => {
  try {
    const conn = await mysql.createConnection(config);
    const [rows] = await conn.execute(`SELECT nome,genero,autor FROM animes`);
    await conn.end();

    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao conectar ao banco de dados" });
  }
});

// POST para adicionar um novo anime
app.post("/animes/", async (req, res) => {
  try {
    const { nome, genero, autor } = req.body;
    const conn = await mysql.createConnection(config);
    if (!nome || !genero || !autor) {
      return res.status(400).json({ error: "Preencha todos os campos" });
    }
    const [result] = await conn.execute(
      `INSERT INTO animes (nome,genero,autor) VALUES (?,?,?)`,
      [nome, genero, autor]
    );
    await conn.end();

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Anime não encontrado" });
    }
    return res.json({
      message: "Anime inserido com sucesso",
      id: result.insertId,
      nome,
      genero,
      autor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao conectar ao banco de dados" });
  }
});
// PUT para alterar um anime
app.put("/animes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { nome, genero, autor } = req.body;
    const conn = await mysql.createConnection(config);
    if (!nome || !genero || !autor) {
      return res.status(400).json({ error: "Preencha todos os campos" });
    }
    const [result] = await conn.execute(
      `UPDATE animes SET nome = ?, genero = ?, autor = ? WHERE id = ?`,
      [nome, genero, autor, id]
    );
    await conn.end();

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Anime não encontrado" });
    }
    return res.json({
      message: "Anime atualizado com sucesso",
      id,
      nome,
      genero,
      autor,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao conectar ao banco de dados" });
  }
});
// DELETE para alterar um anime
app.delete("/animes/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const conn = await mysql.createConnection(config);
    const [result] = await conn.execute(`DELETE FROM animes WHERE id = ?`, [
      id,
    ]);
    await conn.end();

    if (result.affectedRows === 0) {
      return res.status(404).json({ error: "Anime não encontrado" });
    }
    return res.json({
      message: "Anime deletado com sucesso",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Erro ao conectar ao banco de dados" });
  }
});

app.listen(PORT, () => {
  console.log(
    `Servidor rodando na porta ${PORT}, http://localhost:${PORT}/animes`
  );
});
