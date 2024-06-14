const dbConnection = require("../db/dbConnection");

class produtoModel {

  // Método para executar consultas SQL no banco de dados
  executeSQL(sql, parametros = "") {
    return new Promise( function (resolve, reject) {
        dbConnection.query(sql, parametros, function (error, resposta) {
          if (error) {
            return reject(error);
          }
          return resolve(resposta);
        });
      }
    );
  }

  // Método para obter a lista de todas as tarefas no banco de dados
  readList() {
    const sql = "select id,nome,quantidade,unidadeDeMedida,preco,dataCadastro  from produtos";
    return this.executeSQL(sql); 
  }
  // Método para obter uma tarefa específica por ID no banco de dados
  read(id) {
    const sql = "select id,nome,quantidade,unidadeDeMedida,preco,dataCadastro  from produtos WHERE id = ?";
    return this.executeSQL(sql, id); 
  }
  // Método para criar uma nova tarefa no banco de dados
  create(newProduto) {
    const sql = "INSERT INTO produtos SET ?"; 
    return this.executeSQL(sql, newProduto); 
  }
  // Método para atualizar uma tarefa existente por ID no banco de dados
  update(updatedProduto, id) {
    const sql = "UPDATE produtos SET ? WHERE id = ?"; 
    return this.executeSQL(sql, [updatedProduto, id]); 
  }
  // Método para excluir uma tarefa existente por ID no banco de dados
  delete(id) {
    const sql = "DELETE FROM produtos WHERE id = ?"; 
    return this.executeSQL(sql, id); 
  }
}
// Exporta o modelo
module.exports = new produtoModel();