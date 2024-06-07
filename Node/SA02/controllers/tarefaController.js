// Importa o modelo de tarefa para fazer as operações CRUD relacionadas as tarefas
const tarefaModel = require("../models/tarefaModel");

// Define a classe tarefaController, responsável por controlar as operações relacionadas as tarefas
class tarefaController {
  // Método para ler a lista de todas as tarefas
  readList(req, res) {
    // Chama a função readList() do modelo tarefaModel para obter a lista de tarefas
    const retorno = tarefaModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma tarefa foi encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para ler uma tarefa específica por ID
  read(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função read() do modelo tarefaModel para obter a tarefa por ID fornecido
    const retorno = tarefaModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Tarefa não encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para criar uma nova tarefa
  create(req, res) {
    // Obtém os dados da nova tarefa do corpo da requisição
    const reqBody = req.body; 
    // Chama a função create() do modelo tarefaModel para criar uma nova tarefa
    const retorno = tarefaModel.create(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("Tarefa criada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para atualizar uma tarefa existente por ID
  update(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Obtém os dados atualizados da tarefa do corpo da requisição
    const reqBody = req.body;
      
    // Chama a função update() do modelo tarefaModel para atualizar a tarefa com o ID fornecido
    const retorno = tarefaModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Tarefa atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

  // Método para excluir uma tarefa existente por ID
  delete(req, res) {
    // Obtém o parâmetro ID da requisição
    const { id } = req.params;
    // Chama a função delete() do modelo tarefaModel para excluir a tarefa com o ID fornecido
    const retorno = tarefaModel.delete(id);
    return retorno
      .then((result) =>
        res.status(200).send("Tarefa deletada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }
  
}

// Exporta uma instância da classe tarefaController para ser utilizada em outros arquivos do projeto
module.exports = new tarefaController();
