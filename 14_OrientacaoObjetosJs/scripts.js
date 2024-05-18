/*
    Orientação a Objetos:

    A Programação Orientada a Objetos (POO) é um modo de escrever programas de computador onde se organiza o código em "objetos". 
    
    Um objeto é uma parte do código que representa algo no mundo real. 
    Esses objetos têm características (chamadas de propriedades) e comportamentos (chamadas de métodos).

    Exemplo: Em um jogo de computador FPS (Tiro em primeira pessoa), 
    pode existir um objeto "jogador" com propriedades como nome, pontuação e nível, e métodos como mover e atirar.

    A Programação Orientada a Objetos (POO) auxilia a estruturar o código de uma maneira mais compreensível e reutilizável. 
    Ela se baseia em alguns princípios fundamentais, como: 
    
    - Herança (reutilizar características de outros objetos), 
    - Encapsulamento (esconder detalhes internos do objeto),     
    - Abstração (focar nos aspectos essenciais, ignorando detalhes desnecessários) e
    - Polimorfismo (capacidade de um objeto agir de diferentes maneiras).


    Classe: 
    Uma classe é um modelo ou molde para criar objetos. Ela define um conjunto de propriedades e métodos que os objetos criados a partir dela terão.

    Objeto: 
    Um objeto é uma instância concreta de uma classe. Ele possui características (propriedades) e comportamentos (métodos) definidos pela classe.

*/

/*

// Definição da Classe 'Carro'
class Carro {
    
    // Método Construtor da classe 
    // Chamado automaticamente ao se criar uma nova instância da classe, é usado para inicializar as propriedades do objeto.
    constructor(marca, modelo, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.cor = cor;
    }

    
    // Método da Classe 'Carro'
    // Chamado por uma instância específica da classe para realizar a sua funcionalidade.
    acelerar() {
        console.log('Vrum vrum!');
    }
    
}

// Criando instâncias (objetos) da Classe 'Carro'
let carro1 = new Carro('Toyota', 'Corolla', 'Chumbo');
let carro2 = new Carro('Honda', 'Civic', 'Prata');

// Acessando propriedades e chamando método dos objetos
console.log(carro1.marca); 
carro2.acelerar();         




class Cachorro {
    constructor(raca, patas, cor) {
      this.raca = raca;
      this.patas = patas;
      this.cor = cor;
    }

    latir() {
        console.log("Au au!");
    }
  }
  
  let labrador = new Cachorro('Labrador', 4, 'Amarelo');
  
  console.log(labrador);
  labrador.latir();



*/

/*

    Propriedades:
    Propriedades são características ou dados associados a um objeto.
    Elas representam o estado do objeto.

    Métodos:
    Métodos são funções associadas a um objeto.
    Eles representam o comportamento do objeto.

*/

/*

// Definindo uma classe 'Pessoa'
class Pessoa {
    // Construtor da classe
    constructor(nome, idade) {
        this.nome = nome;   // Propriedade da classe
        this.idade = idade; // Propriedade da classe
    }
    // Método da classe que utiliza as propriedades    
    // Métodos em classes são definidos sem a necessidade da palavra-chave function e são automaticamente adicionados ao protótipo da classe.
    apresentar() {
        // Dentro do método é utilizada a palavra-chave this para referenciar o próprio objeto ao qual o método pertence.
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
        console.log("Olá, meu nome é " + this.nome +
                    " e tenho " + this.idade + " anos.");
    }
}
// Criando duas instâncias (objetos) da classe 'Pessoa'
// Cada instância terá suas próprias propriedades, mas compartilhará os métodos definidos na classe.
let pessoa1 = new Pessoa('Maria', 20);
let pessoa2 = new Pessoa('João', 22);
// As propriedades e métodos da classe podem ser acessados através da notação de ponto (.) a partir de uma instância da classe.
console.log(pessoa1.nome); 
console.log(pessoa1.idade); 
pessoa1.apresentar(); 
console.log(pessoa2.nome); 
console.log(pessoa2.idade);
pessoa2.apresentar(); 


*/

/*

    Instância de uma Classe:
    Uma instância é um objeto específico criado a partir de uma classe.
    Cada instância tem seus próprios valores para as propriedades, 
    mas compartilha os métodos definidos na classe.

*/

/*

// Definindo uma classe 'Computador'
class Computador {
    // Construtor da classe
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        this.ligado = false;    // Propriedade inicializada com um valor padrão
    }
    // Método da classe que utiliza as propriedades 
    ligarDesligar() {
        this.ligado = !this.ligado;    // Inverte o estado
        console.log(`O computador está ${this.ligado ? 'ligado' : 'desligado'}.`);
    }    
}

// Criando duas instâncias da classe 'Computador'
let computador1 = new Computador('Dell', 'Inspiron');
let computador2 = new Computador('HP', 'Pavilion');

// Utilizando métodos e alterando propriedades das instâncias
console.log(computador1.marca); 
console.log(computador1.modelo); 
console.log(computador1.ligado); 
computador1.ligarDesligar();    
console.log(computador1.ligado); 

console.log(computador2.marca); 
console.log(computador2.modelo); 
console.log(computador2.ligado); 
computador2.ligarDesligar();    
computador2.ligarDesligar();   
console.log(computador2.ligado); 

*/

/*

// Criação de uma instância a partir do New
function Cachorro(raca, patas, cor) {
  this.raca = raca;
  this.patas = patas;
  this.cor = cor;
  this.uivar = function () {
    console.log("Auuuuu!");
  };
}

let husky = new Cachorro("Husky", 4, "Cinza");
console.log(husky);
husky.uivar();

// Criação de uma instância a partir da função Object Create
// A função Object.create é usada para criar um novo objeto
function criaCachorro(raca, patas, cor) {
  let cachorro = Object.create({});
  cachorro.raca = raca;
  cachorro.patas = patas;
  cachorro.cor = cor;
  cachorro.latir = function () {
    console.log("Au au");
  };
  return cachorro;
}

let doberman = criaCachorro("Doberman", 4, "preta");
console.log(doberman);
doberman.latir();

*/


/*

ATIVIDADES

1. Crie um programa que leia os dados de um usuário: 
   nome, sobrenome, CPF (11 digitos), sexo (M-Masculino, F-Feminino, O-Outros), data de nascimento, endereço e telefone 
   e exiba todas as informações desse usuário.

2. Crie um programa que leia os dados de um aluno: nome, matrícula, disciplina, nota. 
   - Se a nota do aluno for maior ou igual a 60 exiba no console “Aprovado”.
   - Se a nota do aluno for menor que 60 porém maior ou igual a 50 
   exiba no console “Em recuperação” 
   - Se a nota do aluno for menor que 50 exiba no console “Reprovado”.
   criar nova propriedade chamada situacao para o aluno.

3. Crie um programa que leia o nome e o preço de produtos e exiba as informações desse produto.


*/

