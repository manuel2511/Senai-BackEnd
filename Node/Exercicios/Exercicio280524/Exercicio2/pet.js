class Pet {
    constructor(nome, sexo, tipo) {
        this.nome = nome;
        this.sexo = sexo;
        this.tipo = tipo;
    }

    getDetalhes() {
        return `Nome: ${this.nome}, Sexo: ${this.sexo}, Tipo: ${this.tipo}`;
    }
}

export default Pet;