const readlineSync = require('readline-sync');
// 1) Crie um programa que gera e escreve os números ímpares
// entre 0 e 50. No início da 30a iteração o sistema deve sair do
// laço de repetição.

// let contador = 0;
// for (let i = 0; i <= 50; i++) {
//   if (i % 2 != 0) {
//       if (contador > 30) {
//           break;
//         }
//         console.log(`Numero impar ${i}`);
//     }
//   contador++;
// }

// 2) Crie um programa que gera e escreve os números pares entre
// 0 e 50. No início da 30a iteração o sistema deve pular o laço
// de repetição.

// let contador = 0;
// for (let i = 0; i <= 50; i++) {
//   if (i % 2 == 0) {
//       if (contador > 30) {
//           break;
//         }
//         console.log(`Numero Par ${i}`);
//     }
//   contador++;
// }

// 3) Crie um programa para receber um número qualquer e
// exibir no console se é par ou ímpar.

// let numero = parseInt(readlineSync.question(`Digite um número: `));
// let valor = "";
// if (numero % 2 == 0) {
//   valor = "Par";
// } else {
//   valor = "Impar";
// }
// console.log(`O número ${numero},ele é ${valor}`);

// 4) Crie um programa que leia um valor inicial A e exiba a
// sequência de valores do cálculo de A! e o seu resultado.
// Ex: 5! = 5 X 4 X 3 X 2 X 1 = 120

// let numero = parseInt(readlineSync.question(`Digite um número: `));
// let total = 1;
// for (let i = numero; i > 1; i--) {
//   total = total * i;  
// }
// console.log(total);

// 5) Crie um programa que efetue a soma de todos os números
// ímpares que são múltiplos de três e que se encontram no
// conjunto dos números de 1 até 100.
// let contador = 0;
// for (let i = 3; i <=100; i=i+3) {
//   if (i % 2 !=0) {
//     contador++;
//   }
//   console.log(i);
// }
// console.log(`A quantidade de números impares multiplos de 3 são: ${contador}`);

// 6) Crie um programa que leia os valores A, B, C e exiba no
// console os números ordenados em ordem crescente e
// depois em ordem decrescente.



// 7) Crie um programa que leia dois valores inteiros A e B se os
// valores forem iguais deverá se somar os dois, caso contrário
// multiplique A por B. Ao final de qualquer um dos cálculos
// deve-se atribuir o resultado para uma variável C e mostrar
// seu conteúdo no console.

// let numeroA = parseInt(readlineSync.question(`Digite um número A: `));
// let numeroB = parseInt(readlineSync.question(`Digite um número B: `));
// let numeroC = 0;
// if (numeroA === numeroB) {
//   numeroC = numeroA+numeroB;
// } else {
//   numeroC = numeroA * numeroB;
// }
// console.log("Resultado da variável C é: "+ numeroC);

// 8) Crie um programa que leia os dados de um aluno: nome,
// matrícula, disciplina, nota. Se a nota do aluno for maior ou
// igual a 60 exiba no console “Aprovado”, se a nota do aluno
// for menor que 60 porém maior ou igual a 50 exiba no
// console “Em recuperação” e se a nota do aluno for menor
// que 50 exiba no console “Reprovado”.

// let aluno = {
//   nome : "",
//   matricula : "",
//   diciplina : "",
//   nota : ""
// }
// aluno.nome = readlineSync.question(`Digite o nome do aluno: `);
// aluno.matricula = parseInt(readlineSync.question(`Digite um número da matricula: `));
// aluno.diciplina = readlineSync.question(`Digite o nome da diciplina: `);
// aluno.nota = parseInt(readlineSync.question(`Digite a nota do aluno: `));

// if (aluno.nota >= 60) {
//   console.log(`Aluno ${aluno.nome}, Aprovado`);
// } else if (aluno.nota < 50)  {
//   console.log(`Aluno ${aluno.nome}, Reprovado`);
// }else{
//   console.log(`Aluno ${aluno.nome}, Recuperação`);
// }


// 9) Crie um programa que leia a idade de 10 pessoas, exibindo
// ao final do programa:
// - Qual é a média de idade do grupo
// - Quantas pessoas tem mais de 20 anos
// - Quantas pessoas tem menos de 10 anos
// - Qual foi a maior idade lida
// - Qual foi a menor idade lida

// const quantidadeDePessoas = 10;
// let soma = 0;
// let maiorIdade = 0;
// let maior20anos = 0;
// let menor10anos = 0;
// let menorIdade = 0;
// for (let i = 0; i < quantidadeDePessoas; i++) {
//   let idade = parseInt(readlineSync.question(`Digite a idade da ${i + 1}° pessoa : `));
//   soma = soma + idade;
//   if (idade >= 18) {
//       maiorIdade++;
//       if ( idade >= 20){
//         maior20anos++;
//       }
//   } else {
//     menorIdade++ ;
//     if ( idade <= 10){
//       menor10anos++;
//     }
//   }
// }
// console.log(`A média de idade é: ${soma / quantidadeDePessoas},
//                     ${maior20anos} são maiores de 20 anos,
//                     ${menor10anos} são menores de 10 anos,
//                     ${maiorIdade} são maiores de idade,
//                     ${menorIdade} são menores de idade.
//                     `);

// 10) Faça um programa que leia a largura e o comprimento de um terreno
// retangular, calculando e mostrando a sua área em m2 (largura x
// comprimento). O programa também deve mostrar a classificação desse
// terreno, de acordo com a lista abaixo:
// - Abaixo de 100m2 = TERRENO POPULAR
// - Entre 100m2 e 500m2 = TERRENO MASTER
// - Acima de 500m2 = TERRENO VIP

// let largura = parseInt(readlineSync.question(`Digita largura do terreno: `));
// let comprimento = parseInt(readlineSync.question(`Digita comprimento do terreno: `));
// let areaDoTerreno = largura * comprimento;
// if (areaDoTerreno > 500 ) {
//   console.log(`TERRENO VIP sua dimensão é ${areaDoTerreno}m² `);
// } else if (areaDoTerreno < 100) {
//   console.log(`TERRENO POPULAR sua dimensão é ${areaDoTerreno}m² `);
// } else {
//   console.log(`TERRENO MASTER sua dimensão é ${areaDoTerreno}m² `  );
// }


// 11) Crie um programa que calcule o que deve ser pago por um produto,
// considerando o preço normal de etiqueta e a escolha da condição de
// pagamento. Utilize os códigos da tabela a seguir para ler qual a
// condição de pagamento escolhida e efetuar o cálculo adequado.
// Código – Condição de Pagamento
// 1 – À vista em dinheiro ou cheque, recebe 10% de desconto
// 2 – À vista no cartão de crédito, recebe 15% de desconto
// 3 – Em duas vezes, preço normal de etiqueta sem juros
// 4 – Em duas vezes, preço normal de etiqueta mais juros de 10%

// let valorProduto = parseFloat(readlineSync.question(`Digita o Valor do Produto: `));
// let condicaoPagamento = parseInt(readlineSync.question(`Informe a condição de pagamento: `));
// switch (condicaoPagamento) {
//   case 1:
//     valorProduto = valorProduto * 0.90;
//     break;
//   case 2:
//     valorProduto = valorProduto * 0.85;
//     break;
//   case 3:
//     valorProduto = valorProduto;
//     break;
//   case 4:
//     valorProduto = valorProduto * 1.10;
//     break;

//   default:
//     console.log("Condição inválida");
//     break;
// }
// console.log(`O valor do é: ${valorProduto}, devido a condição de pagamento ${condicaoPagamento}`);


// 12) Tendo como dados de entrada a altura e o sexo de uma pessoa, crie um
// programa que calcule seu peso ideal, utilizando as seguintes fórmulas:
// para homens: (72.7 * h) - 58; para mulheres: (62.1 * h) - 44.7.

// let altura = parseFloat(readlineSync.question(`Digita sua altura: `));
// let sexo = readlineSync.question(`Informe "F"- Feminino e "M" - Masculino : `);
// let pessoIdeal = 0;
// if (sexo === "F") {
//   pessoIdeal = (62.1 * altura) - 44.7;
// } else {
//   pessoIdeal = (72.7 * altura) - 58; 
// }
// console.log(`O Peso ideal para a altura de ${altura} e ${pessoIdeal}`);

// 13) Tendo como dados de entrada dois valores numéricos digitados pelo
// usuário, crie um programa para uma calculadora com as seguintes
// operações: soma, subtração, multiplicação e divisão. Após a escolha da
// operação exiba no console o resultado.

// let valor1 = parseInt(readlineSync.question(`Digita primeiro valor: `));
// let valor2 = parseInt(readlineSync.question(`Digita o segundo valor: `));
// let operacao = parseInt(readlineSync.question(`Digita a operação: 1 - adição, 2 - subtração, 3 - Multiplicação e 4 - Divisão `));
// switch (operacao) {
//   case 1:
//       console.log(`A Soma dos dois números é: ${valor1 + valor2}`);
//     break;
//   case 2:
//       console.log(`A Subitração dos dois números é: ${valor1 - valor2}`);
//     break;
//   case 3:
//       console.log(`A Multiplicação dos dois números é: ${valor1 * valor2}`);
//     break;
//   case 4:
//       console.log(`A Divisão dos dois números é: ${valor1 / valor2}`);
//     break;

//   default:
//     console.log("Operação inválida!");
//     break;
// }



// 14) Tendo como dados de entrada o peso (em quilogramas) e a altura (em
//     metros) de uma pessoa, crie um programa que calcule o Índice de
//     Massa Corporal (IMC) dessa pessoa.
//     Calcule o IMC usando a fórmula: IMC = peso / (altura * altura).
//     Classifique o IMC da seguinte forma:
//     - IMC < 18,5 Kg/m2: Abaixo do Peso
//     - IMC >= 18,5 Kg/m2 e < 24,9 Kg/m2: Peso Ideal
//     - IMC >= 25 Kg/m2 e < 29,9 Kg/m2: Excesso de Peso
//     - IMC >= 30 Kg/m2: Obesidade

// let peso = parseInt(readlineSync.question(`Digita o peso em quilogramas: `));
// let altura = parseFloat(readlineSync.question(`Digita a altura: `));
// let massaCorporal = peso / (altura * altura);
// if (massaCorporal < 18.5) {
//   console.log("Seu IMC e Abaixo do Peso. ");
// }
// else if ((massaCorporal >= 18.5) &&  (massaCorporal < 24.9)) {
//   console.log("Seu IMC e Peso Ideal. ");
// } 
// else if ((massaCorporal >= 25) &&  (massaCorporal < 29.9)) {
//   console.log("Seu IMC e Excesso de Peso. ");
// } else {
//   console.log("Seu IMC e Obesidade. ");
// }


// 15) Crie um programa para controlar os saques de um caixa eletrônico que
// deve possuir algum mecanismo para decidir o número de notas de cada
// valor que deve ser disponibilizado para o cliente que realizou o saque.
// – O caixa eletrônico trabalhará com notas de R$ 100,00, R$ 50,00, R$
// 20,00, R$ 10,00, R$ 5,00, R$ 2,00 e R$ 1,00. Não serão aceitos valores
// com casas decimais, caso o usuário informe uma valor com casa
// decimais o sistema deverá informar que o valor solicitado para o
// saque é inválido, e pedir que o usuário informe um novo valor.
// – Um possível critério seria o da "distribuição ótima" no sentido de
// que as notas de menor valor fossem distribuídas em número mínimo
// possível. Por exemplo, se a quantia solicitada fosse R$ 188,00, o
// programa deveria indicar uma nota de R$ 100,00, um nota de R$
// 50,00, uma nota de R$ 20,00, uma nota de R$ 10,00, uma nota de R$
// 5,00, um nota de R$ 2,00 e uma nota de R$ 1,00.
// – Com base nessas informações, crie um programa que receba o valor
// da quantia solicitada e retorne a distribuição das notas de acordo
// com o critério da distribuição ótima.
