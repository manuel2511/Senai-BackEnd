//Função para calcular a média
function calcularMediaEStatus(nota1, nota2) {
    let media = (nota1 + nota2) / 2;
    let status = media >= 60 ? "Aprovado" : "Reprovado";
    return { media, status };
  }
  //Função para validar se é um nome válido 
  function validarNome(nome) {
    if (/[a-zA-Z\\s]{2,3}$/.test(nome)) {
        return true;
    } else {
        return false;
    }
  }

  let numeroAlunos = parseInt(prompt.question("Digite o número de alunos da turma: "));
  
  for (let i = 1; i <= numeroAlunos; i++) {
    let nome;
    do {
      nome = prompt.question(`Digite o nome do aluno ${i}: `);  
    } while (!validarNome(nome));

    let nota1 = parseFloat(prompt.question(`Digite a nota da primeira avaliação do aluno ${i}: `));
    let nota2 = parseFloat(prompt.question(`Digite a nota da segunda avaliação do aluno ${i}: `));
    let { media, status } = calcularMediaEStatus(nota1, nota2);
  
    console.log(`Aluno ${nome}:`);
    console.log(`  Média: ${media.toFixed(2)}`);
    console.log(`  Status: ${status}`);