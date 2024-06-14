
class pessoaDatabase {
  
  initConnection(connection) {
    this.connection = connection; 
    this.initDatabase(); 
  }


  initDatabase() {
    this.connection.connect((error) => {
      if (error) {
        console.log("Ocorreu um erro ao conectar no banco de dados...");
        console.log(error.message); 
        return;
      }
      console.log("Banco de dados conectado com sucesso..."); 
      this.createDatabase(); 
    });
  }

  createDatabase() {
    const sql = "CREATE DATABASE IF NOT EXISTS db_pessoa";
    this.connection.query(sql, (error) => {
      if (error) {
        console.log("Ocorreu um erro ao criar o banco de dados..."); 
        console.log(error.message); 
        return;
      }
      console.log("Banco de dados criado com sucesso..."); 
      this.connection.query("USE db_pessoa", (error) => {
        if (error) {
          console.log("Ocorreu um erro ao selecionar o banco de dados..."); 
          return;
        }
        console.log("Banco de dados selecionado com sucesso..."); 
        this.createTable(); 
    });
  });
}

  createTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS pessoas(  
          id int NOT NULL PRIMARY KEY AUTO_INCREMENT COMMENT 'Primary Key',
          name VARCHAR(255),
          idade INT,
          casado BOOLEAN,
          dataCadastro DATETIME COMMENT 'Data de inclusão'
      ) COMMENT ''
      `;
    this.connection.query(sql, (error) => {
      if (error) {
        console.log("Ocorreu um erro ao criar a tabela pessoa..."); 
        console.log(error.message); 
        return;
      }
      console.log("Tabela pessoa criada com sucesso..."); 
    });
  }
}

module.exports = new pessoaDatabase();
