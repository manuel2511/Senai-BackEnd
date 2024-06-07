const fs = require('fs');

class pessoaModel {
    constructor(pessoas) {
        // this.pessoas = pessoas;
        this.type = 0;
        this.dir ="database/pessoaDatabase.json.json";
        this.init();
    }
    init(){
        switch (this.type) {
            case 0:
                    this.pessoas = JSON.parse(fs.readFileSync(this.dir, "utf-8"));
                break;
                case 1:
                    fs.readFile(this.dir, "utf8", (error,file) => {
                        if (error) throw error;
                            this.pessoas = JSON.parse(file);
                    })
                break;
        }
    }
    readList(){
        return [this.pessoas];
    }
    read(id){
        const pessoa = this.pessoas.find((pessoa) => pessoa.id === parseInt(id));
        return pessoa;
    }
    readByName(name) {
        pessoaNome = this.pessoas.filter((pessoa) => pessoa.nome.toUpperCase().includes(name.toUpperCase()));
        return pessoaNome;
    }
    create(newPessoa){
        newPessoa.id = this.pessoas.lenght + 1;
        this.pessoas.push(newPessoa);
        this.commit();
        return newpessoa;
    }
    update(updatepessoa, id){
        const index = this.pessoas.findIndex((pessoa) => pessoa.id === parseInt(id) );
        if (index !== -1 ) {
            this.pessoas[index] = updatepessoa;
            this.commit();
            return this.pessoas[index];
        }

        return false;
    }
    delete(id){
        const index = this.pessoas.findIndex((pessoa) => pessoa.id === parseInt(id) );
        if (index !== -1 ) {
            this.pessoas.splice(index, 1);
            this.commit();
            return true;
        }
        return false;
    }
    commit() {
        switch (this.type) {
            case 0:
                fs.writeFileSync(this.dir, JSON.stringify(this.pessoas));
                break;
            case 1 :
                fs.writeFile(this.dir, JSON.stringify(this.pessoas), (error)=> {
                    if (error) throw error;
                });
                break;
        }
    }
}
module.exports = new pessoaModel();