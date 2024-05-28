
function* contadorInfinito() {
  let i = 0;
  while (true) {
    yield i++;
  }
}

const meuContador = contadorInfinito();
console.log(meuContador.next().value); // 0
console.log(meuContador.next().value); // 1
console.log(meuContador.next().value); // 2