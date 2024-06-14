class produtoDatabase {

  initConnection(connection) {
    this.connection = connection;
    this.initDatabase(); 
  }

  // Método para inicializar o banco de dados
  initDatabase() {
    this.connection.connect((error) => {
      if (error) {
        console.log("Ocorreu um erro ao conectar no banco de dados..."); 
        console.log(error.message); 
        return;
      }
      this.createDatabase(); 
      console.log("Banco de dados conectado com sucesso..."); 
    });
  }

  // Método para criar o banco de dados
  createDatabase() {
    const sql = "CREATE DATABASE IF NOT EXISTS  db_produto ";
    this.connection.query(sql, (error) => {
      if (error) {
        console.log("Ocorreu um erro ao criar o banco de dados...");
        console.log(error.message); 
        return;
      }
      console.log("Banco de dados criado com sucesso...");
      this.connection.query("USE db_produto", (error) => {
        if (error) {
          console.log("Ocorreu um erro ao selecionar o banco de dados..."); 
          console.log(error.message); 
          return;
        }
        console.log("Banco de dados selecionado com sucesso..."); 
        this.createTable(); 
      });
    });
  }

  createTable() {
    const sql = `
    CREATE TABLE  IF NOT EXISTS produtos (
      id  INT NOT NULL AUTO_INCREMENT,
      nome  VARCHAR(45) NULL,
      quantidade  INT NULL,
      unidadeDeMedida  ENUM('UN','CT','CX','DZ','PA','PÇ','PT','RL') NULL DEFAULT 'UN',
      preco  DECIMAL(12,4) NULL,
      dataCadastro  DATE NULL,
      PRIMARY KEY ( id )
    )
    `;
    // Executa a query para criar a tabela 
    this.connection.query(sql, (error) => {
      if (error) {
        console.log("Ocorreu um erro ao criar a tabela produto..."); 
        console.log(error.message); 
        return;
      }
      console.log("Tabela produto criada com sucesso..."); 
    });
  }
}

module.exports = new produtoDatabase();
