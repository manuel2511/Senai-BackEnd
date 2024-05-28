// /*
//  console.log:
//  É um método que exibe mensagens no console do navegador ou 
//  em ambientes de execução JavaScript. 
//  É frequentemente usado para depurar e exibir informações durante o desenvolvimento.

let Y = 5;
console.log("\nconsole.log:");
console.log("O valor de Y é:", Y);

let a = 1;
let b = 2;
let c = 3;
 
console.log("\nconsole.log:");
if (c > a) {
  a = b;
  console.log(a);
}

console.log("\nconsole.log:");
for (let i = 5; i > 0; i--) {
  b++;
  a = a + c + b;
  c += 2;
  console.log(a);
}

console.log("\nconsole.log:");
if (b == a) {
  a++;
} else {
  a = a + b + c;
}
console.log(a);

console.log("\nconsole.log:");
a = a * b;
console.log(a);



let valorInicial = prompt("Digite o valor inicial A para calcular A!");

if (Number.isInteger(Number(valorInicial))) {
  if (parseInt(valorInicial) < 0) {
    console.log("Não é possível calcular o fatorial de um número negativo.");
  } else {
    exibirSequenciaFatorial(parseInt(valorInicial));
  }
} else {
  console.log("Entrada inválida. Digite um número inteiro.");
}

function exibirSequenciaFatorial(valorInicial) {
  let sequencia = null;

  if (valorInicial === 0 || valorInicial === 1) {
    sequencia = valorInicial + "!";
  } else {
    sequencia = valorInicial + "! = ";
  }

  // 0!
  // 1!
  // 5! = 5 X 4 X 3 X 2 X 1 =

  let resultado = calcularFatorial(valorInicial);

  if (valorInicial > 1) {
    for (let i = valorInicial; i >= 1; i--) {
      sequencia += i;
      if (i > 1) {
        sequencia += " X ";
      }
    }
  }

  console.log(sequencia + " = " + resultado);
}

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  } else {
    let resultado = 1;
    for (let i = numero; i >= 1; i--) {
      resultado *= i;
    }
    return resultado;
  }
}





//  debugger:
//  É usada para criar um ponto de interrupção no código, 
//  permitindo a execução passo a passo e a inspeção do estado das variáveis em 
//  ambientes de desenvolvimento.

console.log("\ndebugger:");
function exemploDebug() {
    let x = 10;
   // debugger; // O código será pausado aqui se o console do desenvolvedor estiver aberto
    console.log("O valor de x é:", x);
}
exemploDebug();


a = 1;
b = 2;
c = 3;

console.log("\ndebugger:");
if (c > a) {
  a = b;
  debugger;
}
console.log(a);


console.log("\ndebugger:");
for (let i = 5; i > 0; i--) {
  b++;
  a = a + c + 1;
  c += 2;
  debugger;
}
console.log(a);

console.log("\ndebugger:");
if (b == a) {
  a++;
} else {
  a = a + b + c;
}
debugger;
console.log(a);

console.log("\ndebugger:");
a = a * b;
debugger;
console.log(a);
// */