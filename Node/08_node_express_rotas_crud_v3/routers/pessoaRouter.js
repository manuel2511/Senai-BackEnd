const Router = require("express").Router;

const router = Router();

class pessoa {
    constructor(pessoas) {
        this.pessoas = pessoas;
    }
    readList(){
        return [this.pessoas];
    }
    read(id){
        const pessoa = this.pessoas.find((pessoa) => pessoa.id === parseInt(id));
        return pessoa;
    }
    readByName(name) {
        return this.pessoas.filter((pessoa) => pessoa.nome.toUpperCase().includes(name.toUpperCase()));
    }
    create(newPessoa){
        const newpessoa = this.pessoas.findIndex((pessoa) => pessoa.id === parseInt(newPessoa.id) );
        this.pessoas.push(newPessoa);
        return newpessoa;
    }
    update(updatepessoa, id){
        const index = this.pessoas.findIndex((pessoa) => pessoa.id === parseInt(id) );
        if (index !== -1 ) {
            this.pessoas[index] = updatepessoa;
            return this.pessoas[index];
        }

        return false;
    }
    delete(id){
        const index = this.pessoas.findIndex((pessoa) => pessoa.id === parseInt(id) );
        if (index !== -1 ) {
            this.pessoas.splice(index, 1);
            return true;
        }
        return false;
    }
}
let pessoas = new pessoa([
    {id: 1, nome: "João", idade: 20,casado: true},
    {id: 2, nome: "Marcos", idade: 55, casado: true},
    {id: 3, nome: "Jonatan Eugenio", idade: 20, casado: false},
    {id: 4, nome: "Maria", idade: 15, casado: false},
])


router.get(
    "/pessoa",
    function (req, res) {
        try {
            let ArrayTodasAspessoas = pessoas.readList();
            if (ArrayTodasAspessoas) {
                res.status(200).json(ArrayTodasAspessoas);
            }else{
                res.status(404).send("Nenhuma pessoa foi encontrada");
            }
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
);
router.get(
    "/pessoa/:id",
    function (req, res) {
        try {
            const { id } = req.params;
            let ArrayPessoaId = pessoas.read(id);
            if (ArrayPessoaId) {
                res.status(200).json(ArrayPessoaId);
            }else{
                res.status(404).send("Pessoa não encontrada!");
            }
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
);
router.get(
    "/pessoa/nome/:nome", 
    function (req, res) {
        try {
            const { nome } = req.params;
            let pessoasPorNome = pessoas.readByName(nome);
            if (pessoasPorNome.length > 0) {
                res.status(200).json(pessoasPorNome);
            } else {
                res.status(404).send("Pessoa não encontrada!");
            }
        } catch (error) {
            res.status(400).json(error.message);
        }
});

router.post(
    "/pessoa",
    function (req, res) {
        try {
            const newpessoa = req.body;
            pessoas.create(newpessoa);
            res.status(201).send("Pessoa criada com sucesso!");
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
);
router.put(
    "/pessoa/:id",
    function (req, res) {
        try {
            const { id } = req.params;
            const updatepessoa = req.body;
            let atualizapessoa = pessoas.update(updatepessoa, id);
            if (atualizapessoa) {
                res.status(200).json("Pessoa atualizada com sucesso!");
            } else {
                res.status(404).send("Pessoa não encontrada");
            }
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
);
router.delete(
    "/pessoa/:id",
    function (req, res) {
        try {
            const { id } = req.params;
            let apagapessoa = pessoas.delete(id);
            if (apagapessoa) {
                res.status(200).json("Pessoa deletada com sucesso!");
            } else {
                res.status(404).send("Pessoa não encontrada");
            }
        } catch (error) {
            res.status(400).json(error.message);
        }
    }
);

module.exports = router;