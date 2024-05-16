function calcularOperacao(operacao) {
    // Obtém os valores dos campos de entrada
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);

    // Verifica se os valores são válidos
    if (isNaN(num1) || isNaN(num2)) {
        alert("Por favor, insira números válidos.");
        return;
    }

    // Realiza a operação conforme escolha do usuário
    let resultado;
    switch (operacao) {
        case "soma":
            resultado = num1 + num2;
            break;
        case "subtracao":
            resultado = num1 - num2;
            operacao = "subtração";
            break;
        case "multiplicacao":
            resultado = num1 * num2;
            operacao = "multiplicação";
            break;
        case "divisao":
            if (num2 === 0) {
                alert("Não é possível dividir por zero.");
                return;
            }
            resultado = num1 / num2;
            operacao = "divisão";
            break;
        default:
            alert("Operação inválida.");
            return;
    }

    // Exibe o resultado na página
    document.getElementById("resultado").textContent = "Resultado da  " + operacao + " é " + resultado;
}
function limparOperacao(){
    document.getElementById("resultado").textContent = "";
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
}
function calcularIMC() {
    // Obtém os valores dos campos de entrada
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    // Verifica se os valores são válidos
    if (isNaN(altura) || isNaN(peso) || altura <= 0 || peso <= 0) {
        alert("Por favor, insira valores válidos para altura e peso.");
        return;
    }

    // Calcula o IMC
    let imc = peso / (altura * altura);
    if (imc < 18.5) {
        classificacao = "Baixo Peso";
    } else if (imc >= 18.5 && imc < 24.9) {
        classificacao = "Peso Normal";
    } else if (imc >= 25 && imc < 29.9) {
        classificacao = "Excesso de Peso";
    } else if (imc >= 30 && imc < 34.9) {
        classificacao = "Obesidade Classe I";
    } else if (imc >= 35 && imc < 39.9) {
        classificacao = "Obesidade Classe II";
    } else {
        classificacao = "Obesidade Mórbida";
    }
    // Exibe o resultado do IMC na página
    let resultado = "Seu IMC é: " + imc.toFixed(2) + " sua classificação é:  "+ classificacao; // Arredonda o resultado para 2 casas decimais
    document.getElementById("resultadoIMC").textContent = resultado;
}
function calcularCombustivel() {
    // Obtém os valores dos campos de entrada
    let consumo = parseFloat(document.getElementById("consumo").value);
    let precoGasolina = parseFloat(document.getElementById("precoGasolina").value);
    let precoAlcool = parseFloat(document.getElementById("precoAlcool").value);

    // Verifica se os valores são válidos
    if ( isNaN(consumo) || isNaN(precoGasolina) || isNaN(precoAlcool) ||
        consumo <= 0 || precoGasolina <= 0 || precoAlcool <= 0) {
        alert("Por favor, insira valores válidos.");
        return;
    }
    // Calcula o custo do combustível para gasolina e álcool
    let custoGasolina = consumo * precoGasolina;
    let custoAlcool = consumo * precoAlcool;

    // Calcula o custo total do combustível
    let custoTotal =  custoAlcool / custoGasolina;
    let opcao = "";
    if (custoTotal >= 0.7) {
        opcao = "A gasolina e mais vantajosa do que o álcool."
    }else{
        opcao = "O álcool e mais vantajoso do que a gasolina."
    }
    // Exibe o resultado na página
    let resultado = `O custo total da gasolina é: R$ ${custoGasolina.toFixed(2)}  e o custo total do álcool é: R$ ${custoAlcool.toFixed(2)} , ${opcao}`;
    document.getElementById("resultadoCombustivel").textContent = resultado;
}
function limparCombustivel() {
    document.getElementById("consumo").value = "";
    document.getElementById("precoGasolina").value = "";
    document.getElementById("precoAlcool").value = "";
    document.getElementById("resultadoCombustivel").textContent = "";
    
}