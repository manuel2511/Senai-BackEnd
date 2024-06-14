const mysql = require("mysql");
const dbConnection = require("../db/dbConnection");
class pessoaModel {
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
    const sql = "SELECT id,name,idade,casado FROM pessoas"; 
    return this.executeSQL(sql); 
  }

  apiRead(id) {
    const sql = "SELECT id,name,idade,casado FROM pessoas WHERE id = ?"; 
    return this.executeSQL(sql, id); 
  }

  apiCreate(newpessoa) {
    const sql = "INSERT INTO pessoas SET ?"; 
    return this.executeSQL(sql, newpessoa);
  }

  apiUpdate(updatedpessoa, id) {
    const sql = "UPDATE pessoas SET ? WHERE id = ?"; 
    return this.executeSQL(sql, [updatedpessoa, id]); 
  }

  apiDelete(id) {
    const sql = "DELETE FROM pessoas WHERE id = ?"; 
    return this.executeSQL(sql, id);
  }

  // ----------------------------------------------------------------------------------------------
  // Integração Front End x Back End
  // ----------------------------------------------------------------------------------------------

  readList() {
    const sql = "SELECT id,name,idade,casado FROM pessoas"; 
    return this.executeSQL(sql); 
  }

  read(id) {
    const sql = "SELECT id,name,idade,casado FROM pessoas WHERE id = ?"; 
    return this.executeSQL(sql, id); 
  }

  create(newpessoa) {
    const sql = "INSERT INTO pessoas (name, idade, casado, dataCadastro) VALUES (?,?,?,CURRENT_DATE)"; 
    const values = [newpessoa.name, newpessoa.idade, newpessoa.casado]; 
    return this.executeSQL(sql, values); 
  }

  update(updatedpessoa, id) {
    const sql = "UPDATE pessoas SET name = ?, idade = ?, casado = ? WHERE id = ?"; 
    const values = [updatedpessoa.name, updatedpessoa.idade, updatedpessoa.casado, id]; 
    return this.executeSQL(sql, values); 
  }

  delete(id) {
    const sql = "DELETE FROM pessoas WHERE id = ?"; 
    return this.executeSQL(sql, id); 
  }
}
module.exports = new pessoaModel();
