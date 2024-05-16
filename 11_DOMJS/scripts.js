/* 

    DOM: Document Object Model
    Uma interface de programação que representa documentos HTML como uma árvore de objetos. 
    Ele fornece uma representação estruturada do documento, uma cópia do HTML, permitindo que os scripts (como JavaScript) interajam dinamicamente com o conteúdo.
    Por meio dele temos métodos para acessar ou modificar o conteúdo da árvore de objetos. 
    É possível manipular eventos pelo DOM para afetar o HTML.

    DOM é composto por nós: um nó em DOM é um objeto que representa um elemento na estrutura hierárquica de uma página da web. 
    Cada elemento HTML, como parágrafos <p>, divs <div>, ou mesmo o texto dentro desses elementos, é representado por um nó.

    Propriedades:
    As propriedades do DOM referem-se aos atributos e métodos que estão disponíveis nos objetos DOM. 
    Esses objetos representam a estrutura do documento HTML e permitem interagir com os elementos da página.

    Algumas propriedades comuns do DOM incluem:
    - document.body: Retorna uma referência ao elemento <body> do documento HTML.
    - document.head: Retorna uma referência ao elemento <head> do documento HTML.
    - document.URL: Retorna a URL completa do documento atual.
    - document.title: Retorna ou define o título do documento HTML.

    Essas propriedades fornecem acesso a diferentes partes do documento HTML, 
    permitindo que você leia ou modifique informações, como o conteúdo da página, a URL atual ou o título do documento. 
    Isso é útil para realizar operações dinâmicas e manipulação da página dentro do navegador.

*/

/*

// Propriedades do DOM

// Exibe no console o objeto do elemento body do documento
console.log(document.body);

// Exibe no console o objeto do elemento head do documento
console.log(document.head);

// Exibe no console a URL do documento
console.log(document.URL);

// Exibe no console  o título atual do documento
console.log(document.title);

// Atualiza o título do documento para "DOM".
document.title = "DOM";

// Exibe no console o novo título do documento após a atualização.
console.log(document.title);

*/

/*

    Acessando o DOM:

    Acessar o DOM significa encontrar e trabalhar com elementos em uma página da web. 
    É como procurar por algo em uma sala cheia de coisas bagunçadas para poder mexer nele depois. 
    E a maneira como fazemos isso é semelhante às regras que usamos no CSS para estilizar elementos. 
    Ou seja, podemos buscar esses elementos usando o nome da tag (como <div> ou <p>), 
    o ID único que eles têm ou a classe que compartilham com outros elementos.

    Método getElementsByTagName(): é utilizado para selecionar elementos HTML com base em suas tags.

    Método getElementById(): é utilizado para selecionar elementos HTML com base em seu id.

    Método getElementsByClassName(): é utilizado para selecionar elementos HTML com base em sua classe.

*/


/*


// Método getElementsByTagName()

// Seleciona todos os elementos <div> da página e os armazena em uma variável chamada testeTag
let testeTag = document.getElementsByTagName("div");

// Exibe no console a lista de elementos <div>
console.log(testeTag);


// Exibe no console o conteúdo de texto do primeiro elemento <div>
console.log(testeTag[0].textContent);

// Exibe no console o conteúdo de texto do segundo elemento <div>
console.log(testeTag[1].textContent);

// Exibe no console o conteúdo de texto do terceiro elemento <div>
console.log(testeTag[2].textContent);

// Exibe no console o conteúdo de texto do quarto elemento <div>
console.log(testeTag[3].textContent);


// Escreve o conteúdo de texto do primeiro elemento <div> no documento HTML
document.write(testeTag[0].textContent);

// Escreve o conteúdo de texto do segundo elemento <div> no documento HTML
document.write(testeTag[1].textContent);

// Escreve o conteúdo de texto do terceiro elemento <div> no documento HTML
document.write(testeTag[2].textContent);

// Escreve o conteúdo de texto do quarto elemento <div> no documento HTML
document.write(testeTag[3].textContent);

*/



/*

// Método getElementById():


// Seleciona o elemento com o ID "titulo_h1" e armazena-o na variável testeId
let testeId = document.getElementById("titulo_h1");

// Exibe no console o conteúdo de texto do elemento com o ID "titulo_h1"
console.log(testeId.textContent);

testeId.textContent = "Aula de Back-End";
// Escreve o conteúdo de texto do elemento com o ID "titulo_h1" no documento HTML
document.write(testeId.textContent);


// Seleciona o elemento com o ID "conteudo" e armazena-o na variável conteudoID
let conteudoID = document.getElementById("conteudo");

conteudoID.textContent = "Esté é o meu conteudo";
// Exibe no console o conteúdo de texto do elemento com o ID "conteudo"
console.log(conteudoID.textContent);

// Escreve o conteúdo de texto do elemento com o ID "conteudo" no documento HTML
document.write(conteudoID.textContent);

*/


/*

// Método getElementsByClassName():

// Seleciona todos os elementos com a classe "divisao" e os armazena em uma variável chamada testeClass
let testeClass = document.getElementsByClassName("divisao");

// Exibe no console a lista de elementos com a classe "divisao"
console.log(testeClass);


// Exibe no console o conteúdo de texto do primeiro elemento com a classe "divisao"
console.log(testeClass[0].textContent);

// Exibe no console o conteúdo de texto do segundo elemento com a classe "divisao"
console.log(testeClass[1].textContent);

// Exibe no console o conteúdo de texto do terceiro elemento com a classe "divisao"
console.log(testeClass[2].textContent);


// Escreve o conteúdo de texto do primeiro elemento com a classe "divisao" no documento HTML
document.write(testeClass[0].textContent);

// Escreve o conteúdo de texto do segundo elemento com a classe "divisao" no documento HTML
document.write(testeClass[1].textContent);

// Escreve o conteúdo de texto do terceiro elemento com a classe "divisao" no documento HTML
document.write(testeClass[2].textContent);


// Seleciona todos os elementos com a classe "item" e os armazena em uma variável chamada itensClasse
let itensClasse = document.getElementsByClassName('item');

// Exibe no console a lista de elementos com a classe "item"
console.log(itensClasse);

// Inicia um loop para percorrer cada elemento com a classe "item"
for (let i = 0; i < itensClasse.length; i++) {
    // Escreve o conteúdo de texto do elemento atual com a classe "item" no documento HTML
    document.write(itensClasse[i].textContent);
    // Adiciona uma quebra de linha para separar os conteúdos dos elementos.
    document.write("<br>");
}

*/



/*

    Outras formas de acessar o DOM:

    Com o avanço da linguagem, foram introduzidos dois métodos que simplificam muito a tarefa de acessar o DOM: 
    querySelector e querySelectorAll. 
    Esses métodos permitem que você selecione elementos da página usando regras semelhantes às que usamos no CSS. 
    Por exemplo, você pode selecionar elementos com base em suas classes, IDs ou até mesmo em sua posição na árvore de elementos.

    Método querySelector(): é utilizado para selecionar um elemento ou o primeiro elemento com base na tag, id ou class

    Método querySelectorAll(): é utilizado para selecionar todos os elementos com base na tag, id ou class

*/




// Método querySelector():


// Seleciona o primeiro elemento <h1> encontrado na página e armazena-o em selecaoH1Tag
let selecaoH1Tag = document.querySelector("h1");
selecaoH1Tag.textContent = "Este e novo conteudo";
console.log(selecaoH1Tag);

// Seleciona o elemento com o ID "titulo_h1" (se existir) e armazena-o em selecaoH1Id
let selecaoH1Id = document.querySelector("#titulo_h1");
console.log(selecaoH1Id);

// Seleciona o primeiro elemento com a classe "titulo_classe" (se existir) e armazena-o em selecaoH1Classe
let selecaoH1Classe = document.querySelector(".titulo_classe");
console.log(selecaoH1Classe);

// Seleciona o elemento com o ID "lista" e armazena-o em lista. Em seguida, exibe o conteúdo de texto desse elemento no console
let lista = document.querySelector('#lista');
console.log(lista.textContent);

// Seleciona o primeiro elemento <ul> encontrado na página e armazena-o em primeiraLista. Em seguida, exibe o conteúdo de texto desse elemento no console
let primeiraLista = document.querySelector('ul');
console.log(primeiraLista.textContent);

// Seleciona o primeiro elemento <span> dentro de um elemento com o ID "paragrafo" e armazena-o em span
let span = document.querySelector('#paragrafo span');
console.log(span);

// Exibe o conteúdo de texto do elemento <span> no console.
console.log(span.textContent);


 

/*

// Método querySelectorAll():


// Seleciona todos os elementos com a classe "divisao" e os armazena em selecaoDivisao
let selecaoDivisao = document.querySelectorAll(".divisao");
console.log(selecaoDivisao);


// Exibe no console o conteúdo de texto do primeiro elemento com a classe "divisao"
console.log(selecaoDivisao[0].textContent);

// Exibe no console o conteúdo de texto do segundo elemento com a classe "divisao"
console.log(selecaoDivisao[1].textContent);

// Exibe no console o conteúdo de texto do terceiro elemento com a classe "divisao"
console.log(selecaoDivisao[2].textContent);



// Escreve o conteúdo de texto do primeiro elemento com a classe "divisao" no documento HTML
document.write(selecaoDivisao[0].textContent);

// Escreve o conteúdo de texto do segundo elemento com a classe "divisao" no documento HTML
document.write(selecaoDivisao[1].textContent);

// Escreve o conteúdo de texto do terceiro elemento com a classe "divisao" no documento HTML
document.write(selecaoDivisao[2].textContent);



// Altera o conteúdo de texto do primeiro elemento com a classe "divisao" para 'Teste de DOM'
selecaoDivisao[0].textContent = 'Teste de DOM';

// Exibe no console o novo conteúdo de texto do primeiro elemento com a classe "divisao"
console.log(selecaoDivisao[0].textContent);

// Escreve o novo conteúdo de texto do primeiro elemento com a classe "divisao" no documento HTML
document.write(selecaoDivisao[0].textContent);



// Seleciona todos os elementos <li> dentro do elemento com o ID "lista2" e os armazena em itensQuery
let itensQuery = document.querySelectorAll('#lista2 li');

// Exibe no console o conteúdo de texto do primeiro elemento <li> dentro do elemento com o ID "lista2"
console.log(itensQuery[0].textContent);

// Exibe no console o conteúdo de texto do segundo elemento <li> dentro do elemento com o ID "lista2"
console.log(itensQuery[1].textContent);

// Exibe no console o conteúdo de texto do terceiro elemento <li> dentro do elemento com o ID "lista2"
console.log(itensQuery[2].textContent);

// Exibe no console o conteúdo de texto do quarto elemento <li> dentro do elemento com o ID "lista2"
console.log(itensQuery[3].textContent);



// Seleciona todos os elementos com a classe "item" dentro do elemento com o ID "lista" e os armazena em itensQuery2
let itensQuery2 = document.querySelectorAll('#lista .item');

// Exibe no console o conteúdo de texto do primeiro elemento com a classe "item" dentro do elemento com o ID "lista"
console.log(itensQuery2[0].textContent);

// Exibe no console o conteúdo de texto do segundo elemento com a classe "item" dentro do elemento com o ID "lista"
console.log(itensQuery2[1].textContent);

// Exibe no console o conteúdo de texto do terceiro elemento com a classe "item" dentro do elemento com o ID "lista"
console.log(itensQuery2[2].textContent);

// Exibe no console o conteúdo de texto do quarto elemento com a classe "item" dentro do elemento com o ID "lista"
console.log(itensQuery2[3].textContent);



// Seleciona todos os elementos <ul> da página e os armazena em todasAsListas
let todasAsListas = document.querySelectorAll('ul');

// Exibe no console o conteúdo de texto do primeiro elemento <ul>
console.log(todasAsListas[0].textContent);

// Exibe no console o conteúdo de texto do segundo elemento <ul>
console.log(todasAsListas[1].textContent);


*/


/*

    Alterando o conteúdo de um elemento:

    É possível alterar o conteúdo de um elemento DOM em uma página da web usando JavaScript. 
    Isso significa que podemos modificar o texto, inserir novos elementos HTML ou até mesmo remover partes do conteúdo existente. 
    Para fazer isso, usamos propriedades como innerHTML, innerText ou textContent, dependendo do tipo de manipulação que queremos realizar. 
    Por exemplo, podemos usar innerHTML para substituir o conteúdo HTML de um elemento, 
    ou innerText e textContent para modificar apenas o texto visível ou todo o conteúdo de texto de um elemento, respectivamente. 
    Essas capacidades de manipulação dinâmica do conteúdo são essenciais para criar páginas da web interativas e dinâmicas.


    Propriedade innerHTML:
    Utilizado na manipulação do DOM, o innerHTML retorna todo o texto e o html que existem no elemento. 
    Ele retorna todo o html existente, retornando também às tags, e não somente o texto.
    
    Importante:
    O innerHTML pode ser usado para inserção de tags, textos e imagens em uma página web, gerando um risco de segurança. 
    Por esta razão, recomenda-se não utilizar o innerHTML para inserção de texto puro.


    Propriedade innerText:
    Utilizado na manipulação do DOM, o innerText retorna apenas o texto. 
    Ele ignora todas as tags HTML que estão dentro do elemento, mas ainda assim, “entende” o css do elemento, retornando apenas textos visíveis. 
    Utiliza-se o innerText quando queremos buscar apenas o texto visível disponível no elemento.

    Propriedade textContent:
    Utilizado na manipulação do DOM, o textContent funciona de forma muito semelhante ao innerText, porém, retornando todo o conteúdo de texto, 
    incluindo o texto oculto pelo css, bem como as quebras de linha (\n). 
    Utiliza-se o textContent quando queremos buscar todo o texto disponível no elemento.

*/

/*

// Exibe no console o conteúdo HTML dentro do elemento <body>
console.log(document.body.innerHTML);

// Exibe no console o conteúdo de texto visível dentro do elemento <body>
console.log(document.body.innerText);

// Exibe no console o conteúdo de texto dentro do elemento <body>
console.log(document.body.textContent);



// Exibe no console o conteúdo HTML dentro do elemento com o ID "titulo_h1"
console.log(titulo_h1.innerHTML);

// Exibe no console o conteúdo de texto visível dentro do elemento com o ID "titulo_h1"
console.log(titulo_h1.innerText);

// Exibe no console o conteúdo de texto dentro do elemento com o ID "titulo_h1"
console.log(titulo_h1.textContent);



// Exibe no console o conteúdo de texto dentro do primeiro elemento <h2>
console.log(titulo_h2[0].textContent);

// Exibe no console o conteúdo de texto visível dentro do primeiro elemento <h2>
console.log(titulo_h2[0].innerText);

// Exibe no console o conteúdo HTML dentro do primeiro elemento <h2>
console.log(titulo_h2[0].innerHTML);



// Exibe no console o conteúdo de texto dentro do segundo elemento <h2> 
console.log(titulo_h2[1].textContent);

// Exibe no console o conteúdo de texto visível dentro do segundo elemento <h2>
console.log(titulo_h2[1].innerText);

// Exibe no console o conteúdo HTML dentro do segundo elemento <h2>
console.log(titulo_h2[1].innerHTML);


// Exibe no console o conteúdo de texto dentro do terceiro elemento <h2>
console.log(titulo_h2[2].textContent);

// Exibe no console o conteúdo de texto visível dentro do terceiro elemento <h2>
console.log(titulo_h2[2].innerText);

// Exibe no console o conteúdo HTML dentro do terceiro elemento <h2>
console.log(titulo_h2[2].innerHTML);


// Exibe no console o conteúdo de texto dentro do elemento <h3>
console.log(titulo_h3.textContent);

// Exibe no console o conteúdo de texto visível dentro do elemento <h3>
console.log(titulo_h3.innerText);

// Exibe no console o conteúdo HTML dentro do elemento <h3>
console.log(titulo_h3.innerHTML);


// Define o conteúdo HTML do elemento com o ID "titulo_h1" como "DOM - Document Object Model innerHTML".
titulo_h1.innerHTML = "DOM - Document Object Model innerHTML";
console.log(titulo_h1.innerHTML);

// Define o conteúdo de texto visível do elemento com o ID "titulo_h1" como "DOM - Document Object Model innerText".
titulo_h1.innerText = "DOM - Document Object Model innerText";
console.log(titulo_h1.innerText);

// Define o conteúdo de texto do elemento com o ID "titulo_h1" como "DOM - Document Object Model textContent".
titulo_h1.textContent = "DOM - Document Object Model textContent";
console.log(titulo_h1.textContent);


*/


/*
    Adicionando, removendo ou substituindo elementos:

    Com JavaScript, é possível manipular elementos HTML de uma página da web de várias maneiras, 
    como adicionar, remover ou substituir elementos. 
    
    Para adicionar novos elementos, primeiro criamos esses elementos usando createElement para criar o elemento desejado 
    e createTextNode para criar nós de texto (conteúdo de texto dentro de um elemento HTML), se necessário. 
    Em seguida, usamos appendChild para adicionar esses novos elementos como filhos de outros elementos existentes na página.

    Para remover elementos, temos algumas opções. 
    Podemos usar removeChild, que remove um nó filho específico de um elemento pai. 
    Ou, podemos usar o método remove (desde que seja suportado no navegador), que remove diretamente o próprio elemento do DOM.

    Para substituir um elemento existente por outro, usamos o método replaceChild. 
    Este método requer dois argumentos: o novo elemento que queremos adicionar e o elemento existente que queremos substituir.

*/

/*

// Adicionar novos elementos

// Adiciona o <p></p> na variável
let novoParagrafo = document.createElement("p");

// Cria um objeto que contém o texto: Este é o conteúdo do novo parágrafo
let texto = document.createTextNode("Este é o conteúdo do novo parágrafo");

// Adiciona o texto criado ao parágrafo
novoParagrafo.appendChild(texto);
// Resultado após essa linha: <p>Este é o conteúdo do novo parágrafo</p>

// Seleciona o elemento <body> do documento HTML
let body = document.querySelector("body");

// Adiciona o parágrafo criado como filho do elemento <body>
body.appendChild(novoParagrafo);


*/


/*

// Adicionar novos elementos: inserir em um elemento dentro de uma div

// Seleciona o elemento com o ID "conteudo" e armazena-o na variável conteudo
let conteudo = document.getElementById("conteudo");
console.log(conteudo);

// Cria um novo elemento <span> e armazena-o na variável span
let span = document.createElement("span");

// Cria um novo nó de texto com o conteúdo "Este é o conteúdo do novo span" e o adiciona como filho do elemento <span> criado acima
span.appendChild(document.createTextNode("Este é o conteúdo do novo span"));
console.log(span);

// Adiciona o elemento <span> criado ao final do conteúdo do elemento com o ID "conteudo"
conteudo.appendChild(span);


// Remover elementos: remover o elemento filho

// Seleciona o primeiro elemento <span> dentro do elemento com o ID "conteudo" e armazena-o na variável spanConteudo
let spanConteudo = document.querySelector("#conteudo span");

// Remove o elemento filho (o <span> selecionado acima) do elemento com o ID "conteudo"
conteudo.removeChild(spanConteudo);


// Remover elementos: remover o elemento pai
conteudo.remove();

*/

/*

// Adicionar novos elementos: 
// Criando dinamicamente um novo elemento <div>, definindo sua classe como "div_nova" e o adicionando como um filho do elemento com o ID "conteudo".

// Seleciona o elemento com o ID "conteudo" e armazena-o na variável conteudo
let conteudo = document.querySelector("#conteudo");
console.log(conteudo);

// Cria um novo elemento <div> e armazena-o na variável div
let div = document.createElement("div");

// Define a classe do novo elemento <div> como "div_nova"
div.classList = "div_nova";
console.log(div);

// Adiciona o novo elemento <div> como um filho do elemento com o ID "conteudo"
conteudo.appendChild(div);



// Adicionar novos elementos: 
// Criando dinamicamente um novo elemento <div> com a classe "div_antes" e o inserindo antes do elemento com a classe "div_nova" dentro do elemento com o ID "conteudo".

// Cria um novo elemento <div> e armazena-o na variável div2
let div2 = document.createElement("div");

// Define a classe do novo elemento <div> como "div_antes"
div2.classList = "div_antes";

// Seleciona o elemento com a classe "div_nova" dentro do elemento com o ID "conteudo" e armazena-o na variável div3
let div3 = document.querySelector("#conteudo .div_nova");
console.log(div3);

// Insere o novo elemento <div> (div2) antes do elemento com a classe "div_nova" (div3) dentro do elemento com o ID "conteudo"
conteudo.insertBefore(div2, div3);



// Adicionar novos elementos: 
// Criando dinamicamente um novo elemento <div> com a classe "div_depois" e o adicionando como um filho do elemento com o ID "conteudo".

// Cria um novo elemento <div> e armazena-o na variável div4.
let div4 = document.createElement("div");

// Define a classe do novo elemento <div> como "div_depois".
div4.classList = "div_depois";
console.log(div4);

// Adiciona o novo elemento <div> como um filho do elemento com o ID "conteudo".
conteudo.appendChild(div4);




// Substituir elementos:

// Substitui o elemento div4 pelo elemento div2 no mesmo local dentro do elemento pai de div4
// Armazena o pai de div4 na variável pai
var pai = div4.parentNode;

// Substitui o elemento div4 pelo elemento div2 dentro do pai
// Ou seja, div2 será inserido na mesma posição que div4 ocupava anteriormente, enquanto div4 será removido do DOM
pai.replaceChild(div2, div4);



*/


/*

    Acessando, adicionando ou removendo atributos:

    É possível acessar, adicionar ou remover atributos de elementos do DOM. 
    Para isso, utilizamos os métodos getAttribute, setAttribute e removeAttribute.

        getAttribute(nomeAtributo): O método getAttribute permite acessar o valor de um atributo específico de um elemento DOM. 
                                    Por exemplo, ao utilizar getAttribute("id"), podemos obter o valor do atributo "id" de um elemento.

        setAttribute(nomeAtributo, valor): Com o método setAttribute, podemos adicionar ou atualizar atributos em elementos DOM. 
                                           Por exemplo, setAttribute("class", "novo-estilo") adiciona a classe "novo-estilo" a um elemento.

        removeAttribute(nomeAtributo): Para remover um atributo de um elemento DOM, utilizamos o método removeAttribute. 
                                       Por exemplo, removeAttribute("id") remove o atributo "id" de um elemento.

*/


/*

// getAttribute(nomeAtributo):

// Acessa o valor do atributo "class" do primeiro título h2
let tituloH2 = document.querySelector('h2');
let classeTituloH2 = tituloH2.getAttribute('class');
console.log(tituloH2);
console.log(classeTituloH2); 


// setAttribute(nomeAtributo, valor):

// Adiciona um novo atributo "title" ao primeiro parágrafo
let paragrafo = document.querySelector('p');
//paragrafo.setAttribute('style', 'display: none');
console.log(paragrafo);


// removeAttribute(nomeAtributo):

// Remover o atributo "style" do terceiro título h3
let tituloH3 = document.getElementById('titulo_h3');
tituloH3.removeAttribute('style');
console.log(tituloH3);

*/