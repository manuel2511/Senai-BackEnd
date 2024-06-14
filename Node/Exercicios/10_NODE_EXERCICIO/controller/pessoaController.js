const pessoaModel = require("../models/pessoaModels.js");

class pessoaController{
   apiReadList(req, res) {
    const retorno = pessoaModel.apiReadList();
    return retorno
      .then((result) => result.length == 0
        ? res.status(404).send("Nenhuma pessoa foi encontrada!")
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  apiRead(req, res) {
    const { id } = req.params;
    const retorno = pessoaModel.apiRead(id);
    return retorno
      .then((result) =>
        result.length == 0 
        ? res.status(404).send("Pessoa não encontrada!") 
        : res.status(200).json(result)
      )
      .catch((error) => res.status(400).json(error.message));
  }

  apiCreate(req, res) {
    const reqBody = req.body; 
    const retorno = pessoaModel.apiCreate(reqBody);
    return retorno
      .then((result) =>
        res.status(201).send("Pessoa criada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  apiUpdate(req, res) {
    const { id } = req.params;
    const reqBody = req.body;
      
    const retorno = pessoaModel.apiUpdate(reqBody, id);
    return retorno
      .then((result) =>
        res.status(200).send("Pessoa atualizada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));

  }

  apiDelete(req, res) {
    const { id } = req.params;
    const retorno = pessoaModel.apiDelete(id);
    return retorno
      .then((result) =>
        res.status(200).send("Pessoa deletada com sucesso!")
      )
      .catch((error) => res.status(400).json(error.message));
  }

  
  // ----------------------------------------------------------------------------------------------
  // Integração Front End x Back End
  // ----------------------------------------------------------------------------------------------

  viewCreate(req, res) {
    return res.status(200).render("./pessoa/pessoa_create", { title: "Adicionar Vaga de Emprego" });
  }
  
  viewReadList(req, res) {
    const pessoaList = pessoaModel.readList();
    return pessoaList
      .then((result) =>
        result.length == 0
          ? res.status(404).render("./pessoa/pessoa_read", { title: "Pessoa", pessoas: result })
          : res.status(200).render("./pessoa/pessoa_read", { title: "Pessoa", pessoas: result })
      )
      .catch((error) => res.status(400).send(error.message));  
  }

  viewUpdate(req, res) {
    const { id } = req.params;
    const pessoa = pessoaModel.read(id);
    return pessoa
      .then((result) =>
        result.length == 0
          ? res.status(404).redirect("/")
          : res.status(200).render("./pessoa/pessoa_update", { title: "Atualizar cadastro de pessoa", pessoas: result })
      )
      .catch((error) => res.status(400).send(error.message));  
  }

  viewHomePage(req, res) {
    return res.status(200).render("./index", { title: "Página Inicial"});
  }

  create(req, res) {
    const newpessoa = req.body;
    const pessoa = pessoaModel.create(newpessoa);
    return pessoa
      .then((result) => {
        res.status(201).render('modal', {
            color: 'text-success',
            background: 'alert-success',
            icone: 'fa-check',
            modalTitle: 'Cadastro Inserido',
            message: `Pessoa cadastrada com sucesso!`,
            redirectUrl: '/pessoa'
        });
    })
      .catch((error) => res.status(400).send(error.message));    
  }
  update(req, res) {
    const { id } = req.params;
    const updatedpessoa = req.body;
    const pessoa = pessoaModel.update(updatedpessoa, id);
    return pessoa
      .then((result) => {
          res.render('modal', {
              color: 'text-primary',
              background: 'alert-primary',
              icone: 'fa-pen',
              modalTitle: 'Cadastro Atualizado',
              message: `Pessoa ${id} atualizada com sucesso!`,
              redirectUrl: '../../pessoa'
          });
      })
      .catch((error) => res.status(400).send(error.message));
}
  delete(req, res) {
    const { id } = req.params;
    const pessoa = pessoaModel.delete(id);
    return pessoa
      // .then((result) => res.status(200).send("<script> alert('Pessoa excluída com sucesso!'); window.location='../../pessoa' </script>"))
      .then((result) => {
        res.status(200).render('modal', {
            color: 'text-danger',
            background: 'alert-danger',
            icone: 'fa-trash',
            modalTitle: 'Cadastro Excluido',
            message: `Pessoa ${id} excluída com sucesso!`,
            redirectUrl: '/pessoa'
        });
    })
      .catch((error) => res.status(400).send(error.message));  
  }


}

module.exports = new pessoaController();