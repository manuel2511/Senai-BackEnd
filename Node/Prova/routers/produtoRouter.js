const Router = require("express").Router;
const router = Router();

// Importa o controlador de tarefa
const produtoController = require("../controllers/produtoController");

//Listar 
router.get("/produto", produtoController.readList);

//Lista por id
router.get("/produto/:id", produtoController.read);

//cria registro
router.post("/produto", produtoController.create);

//atualiza registro
router.put("/produto/:id", produtoController.update);

//deleta registro
router.delete("/produto/:id", produtoController.delete);

//exporta módulo
module.exports = router;
