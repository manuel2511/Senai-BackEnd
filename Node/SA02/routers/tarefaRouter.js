// Importa o módulo Router do framework Express
const Router = require("express").Router;

// Cria uma instância de um roteador do Express
// O roteador é usado para definir rotas e manipular requisições HTTP em uma aplicação Express
const router = Router();

// ----------------------------------------------------------------------------------------------
// Métodos HTTP para fazer as requisições
// ----------------------------------------------------------------------------------------------


// Importa o controlador de tarefa
const tarefaController = require("../controllers/tarefaController");

// Define uma rota GET para listar todas as tarefa
// Quando uma solicitação GET é feita para "/tarefa", o método readList() do controlador de tarefa é chamado
router.get("/tarefa", tarefaController.readList);

// Define uma rota GET para ler uma tarefa específica por ID
// Quando uma solicitação GET é feita para "/tarefa/:id", o método read() do controlador de tarefa é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da tarefa
router.get("/tarefa/:id", tarefaController.read);

// Define uma rota POST para criar uma nova tarefa
// Quando uma solicitação POST é feita para "/tarefa", o método create() do controlador de tarefa é chamado
router.post("/tarefa", tarefaController.create);

// Define uma rota PUT para atualizar uma tarefa existente por ID
// Quando uma solicitação PUT é feita para "/tarefa/:id", o método update() do controlador de tarefa é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da tarefa
router.put("/tarefa/:id", tarefaController.update);

// Define uma rota DELETE para excluir uma tarefa existente por ID
// Quando uma solicitação DELETE é feita para "/tarefa/:id", o método delete() do controlador de tarefa é chamado,
// onde ":id" é um parâmetro na URL que representa o ID da tarefa
router.delete("/tarefa/:id", tarefaController.delete);

// Exporta o objeto router (roteador)
// O roteador contém definições de rotas e controles para as diferentes solicitações HTTP.
module.exports = router;
