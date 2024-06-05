import Fornecedor from './fornecedor.js';

document.getElementById('cadastrarFornecedores').addEventListener('click', () => {
    const numeroFornecedores = parseInt(document.getElementById('numeroFornecedores').value);
    const fornecedores = [];

    for (let i = 0; i < numeroFornecedores; i++) {
        const nome = prompt('Nome:');
        const sobrenome = prompt('Sobrenome:');
        const cnpj = prompt('CNPJ (14 dígitos):');
        const sexo = prompt('Sexo (M-Masculino, F-Feminino, O-Outros):');
        const dataNascimento = prompt('Data de Nascimento:');
        const logradouro = prompt('Logradouro:');
        const numero = prompt('Número:');
        const bairro = prompt('Bairro:');
        const cep = prompt('CEP:');
        const municipio = prompt('Município:');
        const estado = prompt('Estado:');
        const telefone = prompt('Telefone ((032) 00000-0000):');

        const endereco = { logradouro, numero, bairro, cep, municipio, estado };
        const fornecedor = new Fornecedor(nome, sobrenome, cnpj, sexo, dataNascimento, endereco, telefone);
        fornecedores.push(fornecedor);
    }

    const fornecedoresContainer = document.getElementById('fornecedoresContainer');
    fornecedoresContainer.innerHTML = '';

    const table = document.createElement('table');
    table.className = 'table table-striped';
    table.innerHTML = `
        <thead>
            <tr>
                <th>#</th>
                <th>Nome</th>
                <th>Sobrenome</th>
                <th>CNPJ</th>
                <th>Sexo</th>
                <th>Data de Nascimento</th>
                <th>Endereço</th>
                <th>Telefone</th>
            </tr>
        </thead>
        <tbody>
        </tbody>
    `;
    fornecedoresContainer.appendChild(table);

    const tbody = table.querySelector('tbody');

    fornecedores.forEach((fornecedor, index) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${index + 1}</td>
            <td>${fornecedor.nome}</td>
            <td>${fornecedor.sobrenome}</td>
            <td>${fornecedor.cnpj}</td>
            <td>${fornecedor.sexo}</td>
            <td>${fornecedor.dataNascimento}</td>
            <td>${fornecedor.getEnderecoCompleto()}</td>
            <td>${fornecedor.telefone}</td>
        `;
        tbody.appendChild(tr);
    });
});