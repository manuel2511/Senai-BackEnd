class Pet {
    constructor(nome, sexo, nomeDono, telefoneDono, raca, cor, idade, peso, altura) {
        this.nome = nome;
        this.sexo = sexo;
        this.nomeDono = nomeDono;
        this.telefoneDono = telefoneDono;
        this.raca = raca;
        this.cor = cor;
        this.idade = idade;
        this.peso = peso;
        this.altura = altura;
    }

    exibirInformacoesLog() {
        console.log(`Nome: ${this.nome}`);
        console.log(`Sexo: ${this.sexo}`);
        console.log(`Nome do Dono(a): ${this.nomeDono}`);
        console.log(`Telefone do Dono(a): ${this.telefoneDono}`);
        console.log(`Raça: ${this.raca}`);
        console.log(`Cor: ${this.cor}`);
        console.log(`Idade: ${this.idade} anos`);
        console.log(`Peso: ${this.peso} kg`);
        console.log(`Altura: ${this.altura} cm`);
        console.log('---------------------------');
    }

    exibirInformacoes() {
        const tabela = document.getElementById('tabelaPets');
        if (!tabela.querySelector('table')) {
            const tabelaHTML = `
            <h2 class="text-center">Informações dos Pets</h2>
                <table class="table table-bordered">
                    <thead class="table-active">
                        <tr>
                            <th>Nome</th>
                            <th>Sexo</th>
                            <th>Nome do Dono</th>
                            <th>Telefone do Dono</th>
                            <th>Raça</th>
                            <th>Cor</th>
                            <th>Idade</th>
                            <th>Peso (kg)</th>
                            <th>Altura (cm)</th>
                        </tr>
                    </thead>
                    <tbody></tbody>
                </table>`;
            tabela.innerHTML = tabelaHTML;
        }

        const tbody = tabela.querySelector('tbody');
        const novaLinha = `
            <tr>
                <td>${this.nome}</td>
                <td>${this.sexo}</td>
                <td>${this.nomeDono}</td>
                <td>${this.telefoneDono}</td>
                <td>${this.raca}</td>
                <td>${this.cor}</td>
                <td>${this.idade}</td>
                <td>${this.peso}</td>
                <td>${this.altura}</td>
            </tr>`;
        tbody.insertAdjacentHTML('beforeend', novaLinha);
    }
}

class Cachorro extends Pet {}
class Gato extends Pet {}

function cadastrarPets() {
    const nome = document.getElementById('nome').value;
    const sexo = document.getElementById('sexo').value;
    const nomeDono = document.getElementById('nomeDono').value;
    const telefoneDono = document.getElementById('telefoneDono').value;
    const raca = document.getElementById('raca').value;
    const cor = document.getElementById('cor').value;
    const idade = document.getElementById('idade').value;
    const peso = document.getElementById('peso').value;
    const altura = document.getElementById('altura').value;
    const animal = document.getElementById('animal').value;

    let pet;

    if (animal === 'Cachorro') {
        pet = new Cachorro(nome, sexo, nomeDono, telefoneDono, raca, cor, idade, peso, altura);
    } else if (animal === 'Gato') {
        pet = new Gato(nome, sexo, nomeDono, telefoneDono, raca, cor, idade, peso, altura);
    }

    if (pet) {
        pet.exibirInformacoes();
    }
}