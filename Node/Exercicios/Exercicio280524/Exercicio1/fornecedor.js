class Fornecedor {
    constructor(nome, sobrenome, cnpj, sexo, dataNascimento, endereco, telefone) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.cnpj = cnpj;
        this.sexo = sexo;
        this.dataNascimento = dataNascimento;
        this.endereco = endereco;
        this.telefone = telefone;
    }

    getFullName() {
        return `${this.nome} ${this.sobrenome}`;
    }

    getEnderecoCompleto() {
        return `${this.endereco.logradouro}, ${this.endereco.numero}, ${this.endereco.bairro}, CEP: ${this.endereco.cep}, ${this.endereco.municipio} - ${this.endereco.estado}`;
    }

    getDetalhes() {
        return `
            Nome: ${this.getFullName()}
            CNPJ: ${this.cnpj}
            Sexo: ${this.sexo}
            Data de Nascimento: ${this.dataNascimento}
            Endereço: ${this.getEnderecoCompleto()}
            Telefone: ${this.telefone}
        `;
    }
}

export default Fornecedor;