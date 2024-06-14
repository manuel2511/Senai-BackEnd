const mysql = require("mysql");
const dbConnection = require("../db/dbConnection");
class tarefaModel {
  executeSQL(sql, parameters = "") {
    return new Promise(function (resolve, reject) {
      dbConnection.query(sql, parameters, function (error, resposta) {
        if (error) {
          return reject(error);
        }
        return resolve(resposta);
      });
    });
  }

  // ----------------------------------------------------------------------------------------------
  // Integração API
  // ----------------------------------------------------------------------------------------------

  apiReadList() {
    const sql = "SELECT t.descricao,s.descricao,t.dataCadastro, t.dataFinalizado FROM tarefas t INNER JOIN status s on (s.id = t.status_id)"; 
    return this.executeSQL(sql); 
  }

  apiRead(id) {
    const sql = "SELECT t.descricao,s.descricao,t.dataCadastro, t.dataFinalizado FROM tarefas t INNER JOIN status s on (s.id = t.status_id) WHERE id = ?"; 
    return this.executeSQL(sql, id); 
  }

  apiCreate(newtarefa) {
    const sql = "INSERT INTO tarefas SET ?"; 
    return this.executeSQL(sql, newtarefa);
  }

  apiUpdate(updatedtarefa, id) {
    const sql = "UPDATE tarefas SET ? WHERE id = ?"; 
    return this.executeSQL(sql, [updatedtarefa, id]); 
  }

  apiDelete(id) {
    const sql = "DELETE FROM tarefas WHERE id = ?"; 
    return this.executeSQL(sql, id);
  }

  // ----------------------------------------------------------------------------------------------
  // Integração Front End x Back End
  // ----------------------------------------------------------------------------------------------

  readList() {
    const sql = "SELECT t.descricao,s.descricao,t.dataCadastro, t.dataFinalizado FROM tarefas t INNER JOIN status s on (s.id = t.status_id)"; 
    return this.executeSQL(sql); 
  }

  read(id) {
    const sql = "SELECT t.descricao,s.descricao,t.dataCadastro, t.dataFinalizado FROM tarefas t INNER JOIN status s on (s.id = t.status_id) WHERE id = ?"; 
    return this.executeSQL(sql, id); 
  }

  create(newtarefa) {
    const sql = "INSERT INTO tarefas (descricao, status_id, dataCadastro) VALUES (?,?,CURRENT_DATE)"; 
    const values = [newtarefa.descricao, newtarefa.status_id, newtarefa.datacadastro]; 
    return this.executeSQL(sql, values); 
  }

  update(updatedtarefa, id) {
    const sql = "UPDATE tarefas SET descricao = ?, status_id = ?, dataFinalizado = ? WHERE id = ?"; 
    const values = [updatedtarefa.descricao, updatedtarefa.status_id, updatedtarefa.dataFinalizado, id]; 
    return this.executeSQL(sql, values); 
  }

  delete(id) {
    const sql = "DELETE FROM tarefas WHERE id = ?"; 
    return this.executeSQL(sql, id); 
  }
}
module.exports = new tarefaModel();
