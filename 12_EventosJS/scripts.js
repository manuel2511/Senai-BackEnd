/*
  Eventos JavaScript com DOM:

  Eventos são ações ou ocorrências que acontecem no navegador, como clique do mouse, pressionamento de tecla, carregamento da página, etc.
  O JavaScript pode ser usado para responder a esses eventos.

*/
 

/*
*/
// Declaração de uma função chamada evento_onLoad, que será chamada quando a página terminar de carregar
function evento_onLoad() {
  console.log("Executado evento onLoad()!");
}

// Declaração de uma função chamada evento_onMouseOver, que será chamada quando o cursor do mouse passar sobre um elemento
function evento_onMouseOver() {
  console.log("Executado evento onMouseOver!");
}

// Declaração de uma função chamada evento_onScroll, que será chamada quando ocorrer uma rolagem na página
function evento_onScroll() {
  console.log("Executado evento onScroll!");
}

// Declaração de uma função chamada evento_onFocus, que será chamada quando um elemento receber foco
function evento_onFocus() {
  console.log("Executado evento onFocus!");
}

// Declaração de uma função chamada evento_onFocusOut, que será chamada quando um elemento perder foco
function evento_onFocusOut() {
  console.log("Executado evento onFocusOut!");
}



// Seleciona o primeiro elemento input de tipo texto na página e armazena-o na variável letras.
let letras = document.querySelector("input[type=text]");

// Declaração de uma função chamada evento_onKeyPress, que será chamada quando uma tecla for pressionada dentro do elemento input de tipo texto.
function evento_onKeyPress() {
  let numLetras = 1;
  console.log("Teclou " + (letras.value.length + numLetras) + " caracter(es)");
}




/*

  Adicionando EventListeners:

  Um eventListener, ou "ouvinte de eventos", é uma função em JavaScript que "ouve" ou "escuta" eventos específicos que ocorrem em elementos HTML. 
  Eventos podem ser ações do usuário, como cliques do mouse, movimentos do mouse, pressionamentos de teclas, entre outros.

  O método addEventListener() é utilizado para associar uma função a um evento específico em um elemento.
  Ele permite que você especifique o tipo de evento que deseja acompanhar e a função que deve ser executada quando esse evento ocorre.
  Por exemplo, ao adicionar um eventListener para o evento de clique em um botão, você pode definir uma função que será chamada sempre que o botão for clicado. 
  Isso possibilita que você adicione interatividade à sua página da web, respondendo dinamicamente às ações do usuário.

*/

/*
*/
// Seleciona os botões da página e os armazena em variáveis.
let botao1 = document.querySelector("#btn1");
let botao2 = document.querySelector("#btn2");
let botaoEnviar = document.querySelector("#btn3");

// addEventListener: Adiciona um ouvinte de evento para o evento "mouseover" ao botão 1, que exibe uma mensagem no console quando o mouse passa sobre ele.
botao1.addEventListener("mouseover", function () {
  console.log("MouseOver no botão 1!");
});

// addEventListener: Adiciona um ouvinte de evento para o evento "focus" ao botão 2, que exibe uma mensagem no console quando ele recebe foco.
botao2.addEventListener("focus", function () {
  console.log("Focus no botão 2!");
});

// addEventListener: Adiciona um ouvinte de evento para o evento "focusout" ao botão 2, que exibe uma mensagem no console quando ele perde o foco.
botao2.addEventListener("focusout", function () {
  console.log("FocusOut no botão 2!");
});

// addEventListener: Adiciona um ouvinte de evento para o evento "blur" ao botão 2, que exibe uma mensagem no console quando ele perde o foco.
botao2.addEventListener("blur", function () {
  console.log("Blur no botão 2!");
});

// addEventListener: Adiciona um ouvinte de evento para o evento "click" ao botão de enviar (botão 3), 
// que previne o comportamento padrão do formulário e exibe uma mensagem no console.

// botaoEnviar.addEventListener("click", function () {
//  console.log("Click no botão 3 - Enviar!");
// });  

botaoEnviar.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Click no botão 3 - Enviar!");
});


/*

ATIVIDADES

1. Utilizando função: Tendo como dados de entrada o peso (em quilogramas)
   e a altura (em metros) de uma pessoa, 
   crie um programa que calcule o Índice de Massa Corporal (IMC) dessa pessoa. 
Calcule o IMC usando a fórmula: IMC = peso / (altura * altura). 
Classifique o IMC da seguinte forma:
- IMC < 18,5 Kg/m²: Abaixo do Peso
- IMC >= 18,5 Kg/m² e < 24,9 Kg/m²: Peso Normal
- IMC >= 25 Kg/m² e < 29,9 Kg/m²: Sobrepeso
- IMC >= 30 Kg/m² e < 34.9 Kg/m²: Obesidade Grau I
- IMC >= 35 Kg/m² e < 39.9 Kg/m²: Obesidade Grau II
- IMC >= 39.9 Kg/m²: Obesidade Grau III  

2. Utilizando objeto: Crie um programa que leia os dados de um usuário: 
    nome, sobrenome, CPF, sexo, data de nascimento, endereço e telefone e exiba no console.

3. Utilizando objeto: Crie um programa que leia os dados de um aluno: nome, matrícula,
     disciplina, nota. 
   - Se a nota do aluno for maior ou igual a 60 exiba no console “Aprovado”.
   - Se a nota do aluno for menor que 60 porém maior ou igual a 50 
   exiba no console “Em recuperação” 
   - Se a nota do aluno for menor que 50 exiba no console “Reprovado”.
   criar nova propriedade chamada situacao para o aluno.
  
4. Utilizando função: Crie um programa que leia um valor inicial A e exiba a sequência de valores do cálculo de A! e o seu resultado. 
	Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120 

5. Utilizando função: Crie um programa que leia a largura e o comprimento de um terreno 
retangular, calculando e mostrando a sua área em m² (largura x comprimento). 
O programa também deve mostrar a classificação desse terreno, de acordo com a lista abaixo: 
- Abaixo de 100m² = TERRENO POPULAR 
- Entre 100m² e 500m² = TERRENO MASTER 
- Acima de 500m² = TERRENO VIP


*/