
function adicionarProduto() {
 
  let produtos = []

  let nomeProduto = document.getElementById("nomeProduto").value;
  if ( nomeProduto == null || nomeProduto == ''  )  {
    alert("Nome do Produto inválido!");
    return
  }

  let PrecoProduto = parseFloat(document.getElementById("precoProduto").value)
  if ( isNaN(PrecoProduto) || PrecoProduto <= 0 ) {
    alert("Preço do Produto inválido!");
    return
  }

  let listaProdutos = document.querySelectorAll('tbody .align-middle');
  if ( listaProdutos.length == null || listaProdutos.length == undefined ) { 
    listaProdutos.length = 0
  }

  produtos[0] = listaProdutos.length + 1
  produtos[1] = nomeProduto
  produtos[2] = "R$ " + PrecoProduto.toFixed(2);

  let tr = document.createElement("tr");
  tr.setAttribute('class', 'align-middle');
  
  for (let i = 0; i < 4; i++) {
    let td = document.createElement("td");
    if (i < 3) {
      td.appendChild(document.createTextNode(produtos[i]));
    } else {
      let aElemento = document.createElement("a");
      aElemento.setAttribute('onclick', `excluirProduto(${produtos[0]})`);
      aElemento.setAttribute('class', 'text-dark');
      let iElemento = document.createElement("i");
      iElemento.setAttribute('class', 'fas fa-trash-alt fa- mx-1');
      aElemento.appendChild(iElemento);
      td.appendChild(aElemento);
    }
    tr.appendChild(td);
  }
  
  let tbody = document.querySelector('tbody');
  tbody.appendChild(tr);

}

function excluirProduto(idProduto) {
  let listaProdutos = document.querySelectorAll('tbody .align-middle');
  for (let i = 0; i < listaProdutos.length; i++) {
      if ( parseInt(listaProdutos[i].childNodes[0].textContent) == idProduto) {
        let elemento = listaProdutos[i];
        elemento.parentNode.removeChild(elemento);
      } 
  }
}
