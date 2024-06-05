import Pet from './pet.js';

document.getElementById('cadastrar').addEventListener('click', () => {
    const nome = document.getElementById('nome').value;
    const sexo = document.getElementById('sexo').value;
    const tipo = document.querySelector('input[name="tipo"]:checked').value;

    const pet = new Pet(nome, sexo, tipo);

    const petsContainer = document.getElementById('petsContainer');
    const petElement = document.createElement('div');
    petElement.className = 'card mb-3';
    petElement.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${pet.tipo}</h5>
            <p class="card-text">${pet.getDetalhes()}</p>
        </div>
    `;
    petsContainer.appendChild(petElement);

    // Limpar os imputs
    document.getElementById('nome').value = '';
    document.getElementById('sexo').value = '';
    document.querySelector('input[name="tipo"]:checked').checked = false;
});