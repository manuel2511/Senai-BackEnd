const readlineSync = require('readline-sync');

// 1 Crie um programa que exiba no console uma mensagem digitada pelo usuário
// const mensagem = readlineSync.question('Digite sua mensagem: '); 
// console.log(mensagem);

// 2) Crie um programa que leia o nome de uma pessoa e mostre uma mensagem de boas-vindas para ela.
// const nome = readlineSync.question('Digite seu nome: ');
// console.log(`Olá, ${nome}!`);

// 3) Crie um programa que leia os dados de um aluno: matrícula,
// nome, sobrenome, CPF, sexo, data de nascimento, endereço
// e telefone e exiba no console.

// let aluno = {}
//     aluno.nome = "Manuel";
//     aluno.sobrenome = "Machado";
//     aluno.CPF = "123123123-12";
//     aluno.sexo= "Masculino";
//     aluno.dataDeNascimento = "01/01/2000";
//     aluno.endereco = "Rua Senhor dos aneis";
//     aluno.telefone = "(32) 99999-9999";

// console.log(aluno);

// 4) Crie um programa que leia uma disciplina, um aluno e as
// quatro notas desse aluno naquela disciplina. Ao final, mostre
// na tela a média do aluno na disciplina.

// const diciplina = readlineSync.question('Digite o nome da sua disciplina: ');
// const aluno = readlineSync.question('Digite o nome do aluno: ');
// const avaliacoes = 4;
// let soma = 0;
// for (let index = 0; index < avaliacoes; index++) {
//     let nota = parseInt(readlineSync.question(`Digite sua ${index + 1} nota: `));
//     soma =  soma + nota;    
// }
// let media = soma / avaliacoes;
// console.log(`A média ${diciplina} do aluno ${aluno} é: ${media}`);

// 5) Crie um programa que exiba na tela a tabuada do número
// digitado pelo usuário.

// const tabuada = parseInt(readlineSync.question('Digite o númeroa para a tabuada: '));
// console.log(`A tabuada de ${tabuada} é :`);
// for (let index = 1; index <= 10; index++) {
//     console.log(` ${tabuada} x ${index} = ${tabuada * index}`);
// }

// 6) Crie um programa que leia o nome e o salário de um
// funcionário, mostrando no final uma mensagem.
// const nome = readlineSync.question('Digite o nome do funcionário: ');
// const salario = parseFloat(readlineSync.question('Digite o salário do funcionário: '));
// console.log(`O Salário do funcionário ${nome} é: ${salario}`);

// 7) Crie um programa que leia 5 números e mostre o somatório
// entre eles.

// let soma = 0
// for (let index = 0; index < 5; index++) {
//     let nota = parseInt(readlineSync.question(`Digite seu ${index + 1} número: `));
//     soma =  soma + nota;  
// }
// console.log(`A soma dos 5 números é : ${soma}`);

// 8) Crie um programa que leia a idade de uma pessoa expressa
// em anos, meses e dias e mostre-a expressa apenas em dias.

// let idade = parseInt(readlineSync.question(`Digite sua idade e anos: `));
// let meses = parseInt(readlineSync.question(`Digite seu mes: `));
// let dias = parseInt(readlineSync.question(`Digite seus dias: `));
// let soma = 0;
// soma = (idade * 365) + (meses * 30) + dias;
// console.log(` Sua idade em dias são:  ${soma}`);

// 9) Crie um programa que leia a idade de uma pessoa expressa
// em dias e mostre-a expressa em anos, meses e dias.

// let dias = parseInt(readlineSync.question(`Digite sua idade em dias: `));
// let anos = Math.floor(dias / 365);
// dias = dias % 365;
// let mes = Math.floor(dias / 30);
// dias = dias % 30;
// console.log(`Sua idade em dias são: ${anos} ano(s), ${mes} mês, e ${dias} dias. `);

// 10) Crie um programa que leia o tempo de duração de uma
// atividade em horas, minutos e segundos e mostre-o expresso
// em segundos.

// let horas = parseInt(readlineSync.question(`Digite quantidade de horas da atividade: `));
// let minutos = parseInt(readlineSync.question(`Digite quantidade de minutos da atividade: `));
// let segundos = parseInt(readlineSync.question(`Digite quantidade de segundos da atividade: `));
// let totalSegundos = 0;

// totalSegundos = totalSegundos + (((horas * 60) * 60)
//                                                     + (minutos * 60)
//                                                     + segundos) ;
// console.log(`Total de segundos é : ${totalSegundos}` );


// 11) Crie um programa que leia o tempo de duração de uma
// atividade em segundos e mostre-o expresso em horas,
// minutos e segundos.

// let segundos = parseInt(readlineSync.question(`Digite os segundos da sua atividade: `));
// let horas = Math.floor(segundos / 365);
// segundos = segundos % 365;
// let minutos = Math.floor(segundos / 30);
// segundos = segundos % 30;
// console.log(`Sua idade em dias são: ${horas} hora(s), ${minutos} minuto(s), e ${segundos} segundo(s). `);

// 12) Crie um programa que leia o preço de um produto, calcule e
// mostre o seu preço promocional, com 15% de desconto.
// let valor = parseInt(readlineSync.question(`Digite o valor do produto: `));
// let preco = valor * 0.85;
// console.log(`O valor do preço promocional é: R$ ${preco}`);


// 13) Crie um programa que leia o salário de um funcionário,
// calcule e mostre o seu novo salário, com 27,50% de aumento.
// let salario = parseInt(readlineSync.question(`Digite o valor do salário: `));
// let novoSalario = salario * 1.275;
// console.log(`O valor do preço promocional é: R$ ${novoSalario}`);

// 14) Crie um programa que leia o valor da matrícula de um curso,
// calcule e mostre o seu novo valor, com 20% de desconto.

// let matricula = parseInt(readlineSync.question(`Digite o valor matricula: `));
// let valorNovaDaMatricula = matricula * 0.80;
// console.log(`O valor do preço promocional é: R$ ${valorNovaDaMatricula}`);

// 15) Crie um programa que leia o valor de um boleto que será
// pago com atraso, a quantidade de dias em atraso, calcule ecls
// mostre o seu novo valor com uma taxa de 1,25% ao dia.

// let valorDoBoleto = parseInt(readlineSync.question(`Digite o valor do Boleto: `));
// let qtdDiasAtrasado = parseInt(readlineSync.question(`Digite a quantidade de dias atrasado: `));
// const taxa = 1.25 / 100;
// let valorCobrado = valorDoBoleto +( valorDoBoleto * (qtdDiasAtrasado * taxa));
// console.log(`O valor do preço promocional é: R$ ${valorCobrado}`);