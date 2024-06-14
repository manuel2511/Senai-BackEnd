const mysql = require("mysql");

// Cria uma conexão com o banco de dados
const sqlConnection = mysql.createConnection({
  host: "localhost",       
  port: 3306,             
  user: "root",           
  password: "admin",      
  database: "db_produto",     
});

module.exports = sqlConnection;