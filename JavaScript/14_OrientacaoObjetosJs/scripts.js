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
    // Chamado automaticamente ao se criar uma nova instância da classe, é usado para inicializar 
    // as propriedades do objeto.
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
        console.log("Olá, meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
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
   - Se a nota do aluno for maior ou igual a 60 exiba “Aprovado”.
   - Se a nota do aluno for menor que 60 porém maior ou igual a 50 exiba “Em recuperação” 
   - Se a nota do aluno for menor que 50 exiba “Reprovado”.
   criar nova propriedade chamada situacao para o aluno.

3. Crie um programa que leia o nome e o preço de produtos e exiba as informações desse produto.

*/


/*
    Herança: 
    A herança é baseada em protótipos. 
    Cada objeto tem um protótipo, que é outro objeto de onde ele herda propriedades e métodos.

*/

/*

// Classe  > Instância (Objeto) > Protótipo 

// Definindo um objeto como protótipo
let animalPrototipo = {
    cor: 'branco',
    // Método do objeto
    fazerBarulho: function() {
        console.log('GRRRRRRRR!!!');
    }
};

// Criando um objeto que herda do protótipo
let gato = Object.create(animalPrototipo);

// Adicionando uma propriedade específica ao objeto
gato.nome = 'Bichento';
console.log(gato.nome);

// Chamando o método do protótipo
gato.fazerBarulho(); 

*/


/*
    Protótipos: 
    Os protótipos são usados como "modelos" para criar outros objetos. 
    Quando se cria um objeto, ele herda propriedades e métodos do seu protótipo.

    Propriedade prototype:
    Cada função em JavaScript tem uma propriedade especial chamada prototype.
    Quando se cria uma função construtora (usada para criar objetos), 
    pode-se adicionar propriedades e métodos a esse prototype,
    que serão compartilhados por todas as instâncias criadas por essa função.

    Cadeia de Protótipos:
    Quando você acessa uma propriedade ou método em um objeto, 
    o JavaScript verifica primeiro no próprio objeto.
    Se não encontrar, ele segue a cadeia de protótipos até encontrar a propriedade desejada 
    ou alcançar o final da cadeia (que é o protótipo Object.prototype).

    Método hasOwnProperty: 
    Método disponível em objetos em JavaScript, 
    é usado para verificar se um objeto possui uma propriedade específica, 
    ignorando propriedades herdadas do seu protótipo.

*/

/*

// Função construtora
function Pessoa(nome) {
    this.nome = nome;    
}

// Adicionando um método ao protótipo da função construtora
Pessoa.prototype.apresentar = function() {
    console.log(`Olá, meu nome é ${this.nome}`);
};

pessoa1 = new Pessoa('Pedro');
pessoa1.apresentar(); 


*/


/*
// Função construtora
function Carro(marca, modelo, ano) {
    this.marca = marca;
    this.modelo = modelo;
    this.ano = ano;
}

// Adicionando um método ao protótipo da função construtora
Carro.prototype.informacoes = function () {
    console.log(`Carro: ${this.marca} ${this.modelo} ${this.ano}`);
};

// Criando uma instância e chamando o método
carro1 = new Carro('Fiat', 'Palio', '2022');
carro1.informacoes();


// Exemplo de Cadeia de Protótipos:

// Verificando se o objeto 'carro1' tem a propriedade 'marca'
console.log(carro1.hasOwnProperty('marca')); // verdadeiro
// Verificando se o objeto 'carro1' tem a propriedade 'informacoes'
console.log(carro1.hasOwnProperty('informacoes')); // falso, pois 'informacoes' é herdado do protótipo


*/

/*

    Herança entre construtores: 
    É possível definir um protótipo para uma função construtora, 
    permitindo a herança de propriedades e métodos.
 
*/
/*
function Animal(nome) {
    this.nome = nome;
}

Animal.prototype.emitirSom = function() {
    console.log('Grrrrrrrrrr!!!');
};

function Cachorro(nome, raca) {
    Animal.call(this, nome); // Chamando o construtor do pai
    this.raca = raca;
}

Cachorro.prototype = Object.create(Animal.prototype);

// Adicionando método 'latir' para Cachorro
Cachorro.prototype.latir = function() {
    console.log('Au au!');
};
// Adicionando método 'uivar' para Cachorro
Cachorro.prototype.uivar = function() {
    console.log('Auuuuuuuu!');
};

let cachorro = new Cachorro('Germano', 'Pastor Alemão');
cachorro.emitirSom(); 
cachorro.latir();     
cachorro.uivar();  

*/

/*

// Função construtora
function Carro(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
}

// Adicionando um método ao protótipo da função construtora
Carro.prototype.informacoes = function () {
    console.log(`Carro: ${this.marca} ${this.modelo}`);
};

// Criando uma instância e chamando o método
carro1 = new Carro('Fiat', 'Palio');
carro1.informacoes();

// Exemplo de Cadeia de Protótipos:
// Verificando se o objeto 'carro1' tem a propriedade 'marca'
console.log(carro1.hasOwnProperty('marca')); // verdadeiro
// Verificando se o objeto 'carro1' tem a propriedade 'informacoes'
console.log(carro1.hasOwnProperty('informacoes')); // falso, pois 'informacoes' é herdado do protótipo

// Criando um objeto que herda do protótipo carro1
let carro2 = Object.create(carro1);
console.log(carro2.marca);
console.log(carro2.hasOwnProperty('marca'));

// Object.getPrototypeOf: acessa o protótipo de um objeto
console.log(Object.getPrototypeOf(carro1));
console.log(Object.getPrototypeOf(carro2));

// Usando Object.getPrototypeOf para obter o protótipo do objeto
console.log(Object.getPrototypeOf(carro2) === carro1);


*/


/*

    Herança entre classe: 
    É possível definir a herança usando a palavra-chave extends (cria uma relação de herança entre classes), permitindo que uma classe herde propriedades e métodos de outra classe.
    
    Método super:
    O método super é usado dentro da classe derivada para chamar métodos da classe base. 
    
*/

/*

// Classe base (superclasse)
class Animal {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }
    emitirSom() {
        console.log('Grrrrrr!');
    }
}
// Classe derivada (subclasse) que herda de Animal
class Cachorro extends Animal {
    constructor(nome, idade, raca) {
        super(nome, idade);        // Chamando o construtor da classe base
        this.raca = raca;
    }
    latir() {
        console.log('Au au!');
    }
    uivar() {
        console.log('Auuuu!');
    }
}
// Classe derivada (subclasse) que herda de Animal
class Gato extends Animal {
    constructor(nome, idade, cor) {
        super(nome, idade);         // Chamando o construtor da classe base
        this.cor = cor;
    }
    miar() {
        console.log('Miau!');
    }
}


//  Criando uma instância da classe derivada
//  A classe Cachorro estende a classe Animal, 
//  permitindo que Cachorro herde a propriedade nome e o método emitirSom da classe base.
let cachorro = new Cachorro('Cãopanheiro', 10, 'Vira-lata');

// Chamando propriedades e métodos da classe base e da classe derivada
console.log(cachorro.nome); 
console.log(cachorro.idade); 
console.log(cachorro.raca); 
cachorro.emitirSom();    
cachorro.latir();            
cachorro.uivar();    


//  Criando uma instância da classe derivada
//  A classe Gato estende a classe Animal, 
//  permitindo que Gato herde a propriedade nome e o método emitirSom da classe base.
let gato = new Gato('Shadow', 8, 'Preto');

// Chamando propriedades e métodos da classe base e da classe derivada
console.log(gato.nome); 
console.log(gato.idade); 
console.log(gato.cor); 
gato.emitirSom();    
gato.miar();            

//cachorro.miar();
//gato.latir();    

//  instanceof: verifica se um objeto é uma instância de uma determinada classe ou construtor. 
//  objeto cachorro é uma instancia da classe Cachorro que é uma instancia da classe Animal

console.log(cachorro instanceof Animal); 
console.log(gato instanceof Animal); 

console.log(cachorro instanceof Cachorro); 
console.log(gato instanceof Gato); 

console.log(cachorro instanceof Gato); 
console.log(gato instanceof Cachorro); 


*/


/*

class Veiculo {
    constructor(marca) {
        this.marca = marca;
    }

    acelerar() {
        console.log('Vrum vrum!');
    }
}

class Carro extends Veiculo {
    constructor(marca, modelo) {
        super(marca);               // Chamando o construtor da classe base
        this.modelo = modelo;
    }

    buzinar() {
        console.log('Beep beep!');
    }
}

let carro = new Carro('Toyota', 'Corolla');
console.log(carro.marca);
console.log(carro.modelo); 
carro.acelerar();          
carro.buzinar();       


*/

/*
    Encapsulamento:
    O encapsulamento envolve a ideia de esconder (encapsular) dados e comportamentos de um objeto e controlar o acesso a eles.
    Os métodos get e set são utilizados para criar propriedades controladas, permitindo manipulação segura dessas propriedades.    
*/


/*

class Pessoa {   
    constructor(nome, idade) {
        this._nome = nome;      // Propriedade privada 
        this._idade = idade;    // Propriedade privada
    }
    // Método getter para acessar a propriedade privada 'nome'
    get nome() {
        return this._nome;
    }
    // Método setter para modificar a propriedade privada 'nome'
    set nome(novoNome) {
        if (typeof novoNome === 'string' && novoNome.length > 0) {
            this._nome = novoNome;
        } else {
            console.error('Nome inválido!');
        }
    }    
}
let pessoa1 = new Pessoa('Aline', 23);
// Usando o getter e o setter
console.log(pessoa1.nome); 
pessoa1.nome = 'Roberto';       
console.log(pessoa1.nome); 


*/

/*

class Cachorro {
    constructor(raca, cor) {
      this._raca = raca;
      this._cor = cor;
    }  
    latir() {
      console.log("Au au");
    }  
    get getCor() {
      return this._cor;
    }  
    set setCor(cor) {
      this._cor = cor;
    }  
  }
    
  let pastorAlemao = new Cachorro('Pastor Alemão', 'Branco');  
  console.log(pastorAlemao);    
  console.log(pastorAlemao.getCor);
  pastorAlemao.setCor = 'Marrom';  
  console.log(pastorAlemao.getCor);


*/

/*

class ContaBancaria {
    constructor(titular, saldoInicial) {
        this._titular = titular;        // Propriedade privada 
        this._saldo = saldoInicial;     // Propriedade privada
    }
    // Método getter para acessar a propriedade privada 'titular'
    get titular() {
        return this._titular;
    }
    // Método getter para acessar a propriedade privada 'saldo'
    get saldo() {
        return this._saldo;
    }   
    // Método para acessar o saldo (getter)
    extrato() {
        console.log(`Titular: ${this._titular} | Saldo Atual: ${this._saldo.toFixed(2)}`);
    }
    // Método para depositar dinheiro na conta (setter)
    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(` + Depósito de ${valor.toFixed(2)} na Conta Bancária de ${this._titular} | Saldo Atual: ${this._saldo.toFixed(2)}`);
        } else {
            console.error('Valor inválido para depósito.');
        }
    }
    // Método para sacar dinheiro da conta (setter)
    sacar(valor) {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`    - Saque de ${valor.toFixed(2)} na Conta Bancária de ${this._titular} | Saldo Atual: ${this._saldo.toFixed(2)}`);
        } else {
            console.error('Valor inválido para saque ou saldo insuficiente.');
        }
    }
}
// Criando uma instância da classe ContaBancaria
let minhaConta = new ContaBancaria('Jonatan Eugenio', 1000000);
// Usando os métodos para interagir com a conta
console.log(`Dados da Conta Bancária`);
minhaConta.extrato();  
minhaConta.depositar(500000); 
minhaConta.sacar(200000);     
minhaConta.extrato();  

*/


/*
    Abstração:
    A abstração envolve a criação de modelos que representam objetos do mundo real, 
    focando apenas nos detalhes essenciais para o contexto do problema. 
    A abstração pode ser alcançada através da criação de classes e objetos que encapsulam propriedades e métodos relevantes.
*/


/*
// Classe "abstrata" (não pode ser instanciada diretamente)
class FormaGeometrica {
    constructor() {
        //A classe FormaGeometrica é "abstrata" porque não pode ser instanciada diretamente. Se alguém tentar fazer isso, um erro será lançado.
        if (new.target === FormaGeometrica) {
            throw new Error("Classe abstrata não pode ser instanciada diretamente.");
        }
    }
    // Método abstrato (deve ser implementado pelas subclasses)
    // A classe contém um método abstrato calcularArea que deve ser implementado por qualquer subclasse.
    calcularArea() {
        throw new Error("Método abstrato deve ser implementado.");
    }
}
// Subclasse que estende a classe abstrata
class Retangulo extends FormaGeometrica {
    constructor(base, altura) {
        super();
        this.base = base;
        this.altura = altura;
    }
    calcularArea() {
        return this.base * this.altura;
    }
}

class Quadrado extends FormaGeometrica {
    constructor(lado) {
        super();
        this.lado = lado;
    }
    calcularArea() {
        return this.lado * this.lado;
    }
}

// Criando instâncias
let retangulo = new Retangulo(5, 10);
console.log(retangulo.calcularArea()); 

let quadrado = new Quadrado(5);
console.log(quadrado.calcularArea()); 

*/


/*
  Métodos abstratos são aqueles que são declarados na classe base, mas não são implementados até que a classe seja estendida. 
  Isso permite que você forneça uma estrutura básica e obriga as subclasses a fornecerem suas próprias implementações.
*/

/*
// Classe abstrata com método abstrato 
class Veiculo {
    // Criação da Classe sem o construtor - sem propriedades
    // Método abstrato
    acelerar() {
        throw new Error("Método abstrato deve ser implementado.");
    }
}
// Subclasse que estende a classe abstrata
class Carro extends Veiculo {
    acelerar() {
        console.log("Vrum Vrum!");
    }
}
// Subclasse que estende a classe abstrata
class Moto extends Veiculo {
    acelerar() {
        console.log("Vrom Vrom!");
    }
}
// Criando instâncias
let meuCarro = new Carro();
let minhaMoto = new Moto();
//A classe Veiculo possui o método abstrato acelerar, que é implementado nas suas subclasses Carro e Moto.
meuCarro.acelerar();  
minhaMoto.acelerar(); 

*/

/*

//  ContaBancaria é uma classe abstrata com métodos sacar e depositar
//  As subclasses ContaCorrente e ContaPoupanca estendem ContaBancaria e implementam esses métodos de maneira específica para cada tipo de conta. 

class ContaBancaria {
    constructor() {
        //A classe ContaBancaria é "abstrata" porque não pode ser instanciada diretamente. Se alguém tentar fazer isso, um erro será lançado.
        if (new.target === ContaBancaria) {
            throw new Error("Classe abstrata não pode ser instanciada diretamente.");
        }
    }
    extrato() {
        throw new Error("Método abstrato deve ser implementado.");
    }
    sacar(valor) {
        throw new Error("Método abstrato deve ser implementado.");
    }
    depositar(valor) {
        throw new Error("Método abstrato deve ser implementado.");
    }
}

class ContaCorrente extends ContaBancaria {

    constructor(titular, saldoInicial) {
        super();
        this._titular = titular;        
        this._saldo = saldoInicial;   
        this._tipo = "Corrente";   
    }

    get titular() {
        return this._titular;
    }

    get saldo() {
        return this._saldo;
    }
    
    extrato() {
        console.log(`Tipo: Conta ${this._tipo} | Titular: ${this._titular} | Saldo Atual: ${this._saldo.toFixed(2)}`);
    }

    sacar(valor) {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`    - Saque de ${valor.toFixed(2)} na Conta ${this._tipo} de ${this._titular} | Saldo Atual: ${this._saldo.toFixed(2)}`);
        } else {
            console.error('Valor inválido para saque ou saldo insuficiente.');
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(` + Depósito de ${valor.toFixed(2)} na Conta ${this._tipo} de ${this._titular} | Saldo Atual: ${this._saldo.toFixed(2)}`);
        } else {
            console.error('Valor inválido para depósito.');
        }
    }
}

class ContaPoupanca extends ContaBancaria {

    constructor(titular, saldoInicial) {
        super();
        this._titular = titular;        
        this._saldo = saldoInicial;   
        this._tipo = "Poupança";   
    }

    get titular() {
        return this._titular;
    }

    get saldo() {
        return this._saldo;
    }

    extrato() {
        console.log(`Tipo: Conta ${this._tipo} | Titular: ${this._titular} | Saldo Atual: ${this._saldo.toFixed(2)}`);
    }

    sacar(valor) {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor;
            console.log(`    - Saque de ${valor.toFixed(2)} na Conta ${this._tipo} de ${this._titular} | Saldo Atual: ${this._saldo.toFixed(2)}`);
        } else {
            console.error('Valor inválido para saque ou saldo insuficiente.');
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log(` + Depósito de ${valor.toFixed(2)} na Conta ${this._tipo} de ${this._titular} | Saldo Atual: ${this._saldo.toFixed(2)}`);
        } else {
            console.error('Valor inválido para depósito.');
        }
    }

    calcularRendimento() {
        const rendimento = this._saldo * 0.03;
        console.log(` ++ Rendimento: ${rendimento.toFixed(2)}`);
    }
}

let contaCorrente = new ContaCorrente('Marcos Paratella', 5000);
contaCorrente.extrato();
contaCorrente.depositar(1000);
contaCorrente.sacar(6000);
contaCorrente.extrato();

console.log("\n");

let contaPoupanca = new ContaPoupanca('Mayra Pacheco', 2000);
contaPoupanca.extrato();
contaPoupanca.depositar(1000);
contaPoupanca.sacar(2000);
contaPoupanca.sacar(3000);
contaPoupanca.extrato();
contaPoupanca.calcularRendimento();
contaPoupanca.extrato();
contaPoupanca.sacar(1000);
contaPoupanca.extrato();
contaPoupanca.calcularRendimento();



*/



/*

    Polimorfismo:
    Permite que objetos de diferentes classes sejam tratados de maneira uniforme. 
    Pode ser alcançado por meio de sobreposição de método e sobrecarga de método.

*/


//  Sobreposição de métodos ocorre quando uma classe filha fornece uma implementação 
//  diferente para um método já definido na classe pai.

/*

// Classe base
class Animal {
    constructor(nome) {
        this.nome = nome;
    }
    emitirSom() {
        console.log('Grrrrrrr!');
    }
}
// Classes derivadas
class Cachorro extends Animal {
    emitirSom() {
        console.log('Au au!');
    }
}
class Gato extends Animal {
    emitirSom() {
        console.log('Miau!');
    }
}
class Pato extends Animal {
    emitirSom() {
        console.log('Quack!');
    }
}

// Criando instâncias das classes derivadas
let animal = new Animal('Urso');
let cachorro = new Cachorro('Totó');
let gato = new Gato('Felino');
let pato = new Pato('Donald');

// Sobreposição de métodos
animal.emitirSom();
cachorro.emitirSom();
gato.emitirSom();
pato.emitirSom();


// Criando uma função que chama o método da classe base e derivadas
function emitirSomDoAnimal(animal) {
    animal.emitirSom();
}
console.log('\n');
emitirSomDoAnimal(animal);  
emitirSomDoAnimal(cachorro);   
emitirSomDoAnimal(gato); 
emitirSomDoAnimal(pato); 


*/

/*

// Classe base
class Veiculo {
    acelerar() {
        console.log('Vram vram!');
    }
}
// Classes derivadas
class Carro extends Veiculo {
    acelerar() {
        console.log('Vrum vrum!');
    }
}
class Moto extends Veiculo {
    acelerar() {
        console.log('Vrom vrom!');
    }
}
let veiculo = new Veiculo();
let carro = new Carro();
let moto = new Moto();



// Sobreposição de métodos
veiculo.acelerar();
carro.acelerar();
moto.acelerar();

// Criando uma função que chama o método da classe principal e derivadas
function dirigir(veiculo) {
    veiculo.acelerar();
}
console.log('\n');
dirigir(veiculo); 
dirigir(carro); 
dirigir(moto);  

*/





//  No contexto de JavaScript, a sobrecarga de métodos não é suportada da mesma forma que em linguagens fortemente tipadas, 
//  como Java ou C#. 
//  Contudo, você pode simular a sobrecarga usando verificações condicionais.

/*

class Calculadora {
    // Método que lida com diferentes tipos de parâmetros
    somar(a, b) {
        if (arguments.length === 2) {
            return a + b;
        } else if (arguments.length === 3) {
            return arguments[0] + arguments[1] + arguments[2];
        } else {
            console.error('Número inválido de argumentos.');
        }       
    }
}

const calculadora = new Calculadora();

// O método somar pode lidar com diferentes números de argumentos
// simulando a sobrecarga de métodos
console.log(calculadora.somar(1, 2));      
console.log(calculadora.somar(1, 2, 3));  
console.log(calculadora.somar(1, 2, 3, 4));  



*/

/*

class Pessoa {
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

    exibirInformacao1(nome){
        console.log("O nome é :" + nome);      
    }
    exibirInformacao2(nome, sobrenome){
        console.log("O nome é:" + nome);
        console.log("O sobrenome é:" + sobrenome);
    }
    exibirInformacao3(nome, sobrenome, idade){
        console.log("O nome é:" + nome);
        console.log("O sobrenome é:" + sobrenome);
        console.log("A idade é:" + idade);
    }
}

let pessoa = new Pessoa("Jonatan", "Eugenio", 20);

pessoa.exibirInformacao1(pessoa.nome);
pessoa.exibirInformacao2(pessoa.nome,pessoa.sobrenome);
pessoa.exibirInformacao3(pessoa.nome,pessoa.sobrenome, pessoa.idade);

*/

/*

class Funcionario {
    
    constructor(nome, qtdDependentes, nomeDependentes) {
        this.nome = nome;   
        this.qtdDependentes = qtdDependentes; 
        this.nomeDependentes = nomeDependentes;
    }

    apresentarFuncionario(){
        console.log(`Funcionario: ${this.nome} | Qtde Dependentes: ${this.qtdDependentes}`);
    }
    
    exibirDependente() {
        
        if (arguments.length === 1) {
            
            if ( this.nomeDependentes[arguments[0]] == undefined ) {
                console.error('O dependente solicitado não é válido!');
            } else{
                console.log(`Nome dos Dependentes:`);
                console.log(` 1.  ${this.nomeDependentes[arguments[0]]}`);
            }
           
        } else if (arguments.length === 2) {

            if ( this.nomeDependentes[arguments[0]] == undefined || 
                 this.nomeDependentes[arguments[1]] == undefined     ) {
                console.error('Algum dos dependentes solicitados não é válido!');
            } else{
                console.log(`Nome dos Dependentes:`);
                console.log(` 1.  ${this.nomeDependentes[arguments[0]]}`);
                console.log(` 2.  ${this.nomeDependentes[arguments[1]]}`);
            }

        } else if (arguments.length === 3) {

            if ( this.nomeDependentes[arguments[0]] == undefined || 
                 this.nomeDependentes[arguments[1]] == undefined ||
                 this.nomeDependentes[arguments[2]] == undefined     ) {
               console.error('Algum dos dependentes solicitados não é válido!');
           } else{
               console.log(`Nome dos Dependentes:`);
               console.log(` 1.  ${this.nomeDependentes[arguments[0]]}`);
               console.log(` 2.  ${this.nomeDependentes[arguments[1]]}`);
               console.log(` 3.  ${this.nomeDependentes[arguments[2]]}`);
           }

        } else {
            console.error('Número inválido de argumentos.');
        }    
        
    }
}


let funcionario1 = new Funcionario('Rafael Campos', 1, ['Renato Campos']);

funcionario1.apresentarFuncionario()
funcionario1.exibirDependente(0)
console.log('\n');


let funcionario2 = new Funcionario('Pedro Oliveira', 2, ['Sara Oliveira', 'Beatriz Oliveira']);
funcionario2.apresentarFuncionario()
funcionario2.exibirDependente(0, 1)
console.log('\n');


let funcionario3 = new Funcionario('Liliane Guimarães', 3, ['Olívia Guimarães', 'Lucas Guimarães', 'Ana Maria Guimarães']);

funcionario3.apresentarFuncionario()
funcionario3.exibirDependente(0, 1, 2)
console.log('\n');


*/


/*
    Symbol: 
    Utilizado para criar identificadores únicos e são frequentemente usados como chaves para propriedades de objetos 
    quando se deseja evitar colisões com outras propriedades.
*/

/*

class Cachorro {
    constructor(raca, cor) {
        this.raca = raca;
        this.cor = cor;
    }

    latir() {
        console.log("Au au!");
    }

}

Cachorro.prototype.raca = 'Pastor Alemão';
Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador', 'Amarelo');

console.log("Latir:");
labrador.latir();

console.log("\nRaça:");
console.log("Cachorro.prototype: " + Cachorro.prototype.raca);
console.log("labrador: " + labrador.raca);

console.log("\nPatas:");
console.log("Cachorro.prototype: " + Cachorro.prototype.patas);
console.log("labrador: " + labrador.patas);

let patas = Symbol();

Cachorro.prototype[patas] = 5;

// Ou seja, [patas] se refere a symbol
// Diferente de ['patas'] que se refere a propriedade patas
console.log("\nPatas:");
console.log("Cachorro.prototype: " + Cachorro.prototype['patas']);
console.log("labrador: " + labrador['patas']);
console.log("\nSymbol:");
console.log("Cachorro.prototype: " + Cachorro.prototype[patas]); 
console.log("labrador: " + labrador[patas]);

// Cachorro.prototype.patas = Cachorro.prototype['patas']

*/

/*

class Pessoa {
   
    constructor(nome, cpf) {
        this.nome = nome;
        this.cpf = cpf;
    }

}

let nacionalidade = Symbol();
Pessoa.prototype[nacionalidade] = 'Brasileiro(a)';


let pessoa1 = new Pessoa('Fernando', '111.222.333-00');
console.log(pessoa1.nome);
console.log(pessoa1.cpf); 
console.log(pessoa1[nacionalidade]); 

console.log('\n');

let pessoa2 = new Pessoa('Alexandre', '111.222.333-11');
console.log(pessoa2.nome); 
console.log(pessoa2.cpf); 
console.log(pessoa2[nacionalidade]); 


*/

 


/*

ATIVIDADES

 1. Utilizando os conceitos de Orientação a Objetos: 
    Crie um programa que leia o número de fornecedores a serem cadastrados.  
    Após isso, o programa deve ler os dados desses fornecedores: 
    nome, sobrenome, CNPJ (14 digitos), sexo (M-Masculino, F-Feminino, O-Outros), data de nascimento, 
    endereço (Logradourdo, Número, Bairro, CEP, Municipio e Estado) e telefone ((032) 00000-0000) 
    e exiba no console todas as informações desses fornecedores.

  2. Utilizando os conceitos de Orientação a Objetos: 
     Em uma clínica veterinária, é necessário efetuar o cadastro de pets. 
     Crie um programa que leia os dados desses pets, sendo um cachorro e um gato.  
     Os dados são: nome, sexo, nome do dono(a), telefone do dono(a), raça, cor, idade, peso e altura. 
     No final exiba no console todas as informações desses pets.

  3. Utilizando os conceitos de Orientação a Objetos:
     Em um banco XYZ Bank, é necessário efetuar a abertura de uma conta bancária para um cliente.
     Crie um programa que leia os dados desse cliente: 
     Nome completo, Tipo Pessoa (Física ou Jurídica), endereço (Logradourdo, Número, Bairro, CEP, Municipio e Estado) 
     e telefone de contato((032) 00000-0000) 
        Se Pessoa Física solicitar também: CPF (11 dígitos), Data de Nascimento, Sexo (M-Masculino, F-Feminino, O-Outros)
        Se Pessoa Jurídica solicitar também: CNPJ (14 dígitos)
    Após isso, dar a opção ao cliente de escolher uma conta bancária ( Poupança ou Corrente ).
    Se a conta bancária for poupança, calcular o rendimento do saldo da conta em 3% ao mês, exibir o rendimento Em 1 ano, 2 anos e 5 anos.
    Se a conta bancária for corrente, aplicar uma taxa de 1,75% sobre o valor sacado a partir do 3 saque.


*/