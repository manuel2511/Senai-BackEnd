const pessoaModel = require("../models/pessoaModels.js");

class pessoaController{
    readList (req, res) {
        try {
            let ArrayTodasAspessoas = pessoaModel.readList();
            if (ArrayTodasAspessoas) {
                res.status(200).json(ArrayTodasAspessoas);
            }else{
                res.status(404).send("Nenhuma pessoa foi encontrada");
            }
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
    read (req, res) {
        try {
            const { id } = req.params;
            let ArrayPessoaId = pessoaModel.read(id);
            if (ArrayPessoaId) {
                res.status(200).json(ArrayPessoaId);
            }else{
                res.status(404).send("Pessoa não encontrada!");
            }
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
    readByName (req, res) {
        try {
            const { nome } = req.params;
            let pessoasPorNome = pessoaModel.readByName(nome);
            if (pessoasPorNome.length > 0) {
                res.status(200).json(pessoasPorNome);
            } else {
                res.status(404).send("Pessoa não encontrada!");
            }
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
    create (req, res) {
        try {
            const newpessoa = req.body;
            pessoas.create(newpessoa);
            res.status(201).send("Pessoa criada com sucesso!");
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
    update (req, res) {
        try {
            const { id } = req.params;
            const updatepessoa = req.body;
            let atualizapessoa = pessoaModel.update(updatepessoa, id);
            if (atualizapessoa) {
                res.status(200).json("Pessoa atualizada com sucesso!");
            } else {
                res.status(404).send("Pessoa não encontrada");
            }
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
    delete (req, res) {
        try {
            const { id } = req.params;
            let apagapessoa = pessoaModel.delete(id);
            if (apagapessoa) {
                res.status(200).json("Pessoa deletada com sucesso!");
            } else {
                res.status(404).send("Pessoa não encontrada");
            }
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
}

module.exports = new pessoaController();