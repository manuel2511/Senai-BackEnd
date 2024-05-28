function calcular(event) {
    event.preventDefault(); // Evita o envio do formulário
  let fator = document.getElementById('fator').value;
  let soma = fator;
  if (fator <= 1) {
    soma = 1;
  } else {
    for (let i = fator ; i > 1; i--) {
      soma = soma * (i -1)
    }
  }
  alert(`A função de ${fator}, o valor é: ${soma}`);
}