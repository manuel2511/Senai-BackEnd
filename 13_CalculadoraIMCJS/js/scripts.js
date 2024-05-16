// Função para calcular o IMC e exibir o resultado na página index_calcularIMC1.html
function calcularIMC1() {

  // Limpar qualquer conteúdo anterior nas divs de alerta e resultado
  document.getElementById("alerta").textContent = ``;  
  document.getElementById("alerta").removeAttribute('style');
  document.getElementById("alerta").setAttribute('style', 'display: none');
  document.getElementById("resultado").textContent = ``;
  document.getElementById("resultado").removeAttribute('style');
  document.getElementById("resultado").setAttribute('style', 'display: none');

  // Obter valores de peso e altura dos campos de entrada
  var peso = parseFloat(document.getElementById("imcPeso").value);
  var altura = parseFloat(document.getElementById("imcAltura").value);

  // Verificar se os valores de peso e altura são válidos
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    // Se os valores não forem válidos, exibir mensagem de alerta e interromper a execução da função
    document.getElementById("alerta").textContent = `Por favor, digite valores válidos para peso e altura!`;
    document.getElementById("alerta").removeAttribute('style');
    return;
  } 



  // Calcular o IMC
  var imc = peso / (altura * altura);

  // Determinar a classificação do IMC
  var classificacao = "";
  if (imc < 18.5) {
    classificacao = "Abaixo do Peso";
  } else if (imc < 24.9) {
    classificacao = "Peso Normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc < 34.9) {
    classificacao = "Obesidade Grau I";
  } else if (imc < 39.9) {
    classificacao = "Obesidade Grau II";
  } else {
    classificacao = "Obesidade Grau III";
  }

  // Exibir o resultado do IMC na página index_calcularIMC1.html
  document.getElementById("resultado").textContent = `Seu IMC é ${imc.toFixed(2)} - ${classificacao}`;  
  document.getElementById("resultado").removeAttribute('style');
}



// Função para calcular o IMC e exibir o resultado em um bloco específico na página index_calcularIMC2.html
function calcularIMC2() {
  // Selecionar o elemento que contém os blocos de IMC
  let conteudo = document.querySelector(".bloco-imc");
 
  // Remover qualquer bloco de alerta existente
  let divAlertaConteudo = document.querySelector(".bloco-imc .div_alerta");
  if (!(divAlertaConteudo == null)) {
    divAlertaConteudo.remove();
  }

  // Remover qualquer bloco de resultado existente
  let divResultadoConteudo = document.querySelector(".bloco-imc .div_resultado");
  if (!(divResultadoConteudo == null)) {
    divResultadoConteudo.remove();
  }

  // Obter valores de peso e altura dos campos de entrada
  var peso = parseFloat(document.getElementById("imcPeso").value);
  var altura = parseFloat(document.getElementById("imcAltura").value);

  // Verificar se os valores de peso e altura são válidos
  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
    // Se os valores não forem válidos, criar e exibir um bloco de alerta
    let divAlerta = document.createElement("div");
    divAlerta.classList = "div_alerta";
    divAlerta.appendChild(document.createTextNode(`Por favor, digite valores válidos para peso e altura!`));
    conteudo.appendChild(divAlerta);
    return;
  }

  // Calcular o IMC
  var imc = peso / (altura * altura);

  // Determinar a classificação do IMC
  var classificacao = "";
  if (imc < 18.5) {
    classificacao = "Abaixo do Peso";
  } else if (imc < 24.9) {
    classificacao = "Peso Normal";
  } else if (imc < 29.9) {
    classificacao = "Sobrepeso";
  } else if (imc < 34.9) {
    classificacao = "Obesidade Grau I";
  } else if (imc < 39.9) {
    classificacao = "Obesidade Grau II";
  } else {
    classificacao = "Obesidade Grau III";
  }
  
  // Criar e exibir um bloco de resultado com o IMC calculado na página index_calcularIMC2.html
  let divResultado = document.createElement("div");
  divResultado.classList = "div_resultado";
  divResultado.appendChild(document.createTextNode(`Seu IMC é ${imc.toFixed(2)} - ${classificacao}`));
  conteudo.appendChild(divResultado);
}
