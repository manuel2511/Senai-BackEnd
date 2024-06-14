const produtoModel = require("../models/produtoModel");

class produtoController {
  //Método para ler todos registros
  readList(req, res) {
    const retorno = produtoModel.readList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma produto foi encontrado!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }
  // Método para ler uma registro por id
  read(req, res) {
    const { id } = req.params;
    const retorno = produtoModel.read(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Produto não encontrado!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para criar registro
  create(req, res) {
    const reqBody = req.body; 
    const retorno = produtoModel.create(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("Produto criado com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  // Método para atualizar por ID
  update(req, res) {
    const { id } = req.params;
    const reqBody = req.body;
    const retorno = produtoModel.update(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Produto atualizado com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

  // Método para excluir por ID
  delete(req, res) {
    const { id } = req.params;
    const retorno = produtoModel.delete(id);
    return retorno
      .then((result) =>
        res.status(200).send("Produto deletado com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }
  
}

module.exports = new produtoController();
