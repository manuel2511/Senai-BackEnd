// Importa o módulo Express
const express = require("express");
//  Cria uma instância do aplicativo Express
const app = express();
//  Define a porta em que o servidor será executado
const port = 3000;
// Importa e executa a função do módulo 'database' localizado no diretório 'db'
const database = require("./db/index.js");
database();
const router = require("./routers/index.js");
router(app, express);
app.listen(
  port,
  function (error) {
    if (error) {
      console.log("Ocorreu um erro ao rodar o servidor!");
      return;
    } else {
      console.log("Servidor rodando com sucesso!");
    }
  }
);
