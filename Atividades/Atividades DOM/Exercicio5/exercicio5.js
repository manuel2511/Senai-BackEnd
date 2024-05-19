function calcular(event) {
    event.preventDefault(); // Evita o envio do formulário
// Obtendo valores dos inputs
const largura = parseFloat(document.getElementById('largura').value);
const comprimento = parseFloat(document.getElementById('comprimento').value);

// Verificando se os valores são válidos
if (isNaN(largura) || isNaN(comprimento)) {
    alert("Por favor, insira valores válidos para largura e comprimento.");
    return;
}

// Calculando a área
const resultado = largura * comprimento;

// Determinando a classificação do terreno
let classificacao;
if (resultado < 100) {
    classificacao = "Terreno Popular";
} else if (resultado >= 500) {
    classificacao = "Terreno Vip";
} else {
    classificacao = "Terreno Master";
}

// Exibindo o resultado
document.getElementById('resultado').innerHTML = `<span>${classificacao}</span>`;
document.getElementById('resultado').style.display = 'flex';
}
