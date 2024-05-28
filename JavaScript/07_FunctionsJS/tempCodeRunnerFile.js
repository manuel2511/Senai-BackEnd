const prompt = require("readline-sync");
Imc = (peso = 0 , altura = 0) => {
  let massaCorporal = peso / (altura * altura);
  let mensagem = "";
  if (massaCorporal < 18.5) {
    mensagem = "à Abaixo do Peso";
  } else if (massaCorporal >= 18.5 && massaCorporal < 24.9) {
    mensagem = "com Peso Ideal";
  } else if (massaCorporal >= 25 && massaCorporal < 29.9 ){
    mensagem = "com Excesso de Peso";
  }else{
    mensagem = "com Obesidade";
  }
  return console.log(`A massa corporal de ${peso}KG e ${altura}M está ${mensagem} `);
}


let peso = parseFloat( prompt.question("Informe o peso em KG: "));
let altura = parseFloat( prompt.question("Informe o altura em metros: "));
Imc(peso,altura );