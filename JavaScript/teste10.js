// Criando o objeto.
console.log("Criando o objeto.");
{
  let pessoa = {
    nome: "João",
    idade: 35,
    casado: true,
  };
}
console.log();

// Imprimindo o objeto.
console.log("Imprimindo o objeto.");
{
  let pessoa = {
    nome: "João",
    idade: 35,
    casado: true,
  };
  console.log(pessoa);
}
console.log();

// Imprimindo atributo do objeto.
console.log("Imprimindo atributo do objeto.");
{
  let pessoa = {
    nome: "João",
    idade: 35,
    casado: true,
  };
  console.log(pessoa.nome);
}
console.log();

// Imprimindo atributo do objeto (outra forma).
console.log("Imprimindo atributo do objeto (outra forma).");
{
  let pessoa = {
    nome: "João",
    idade: 35,
    casado: true,
  };
  console.log(pessoa["nome"]);
}
console.log();

// Utilizando de uma variável para acessar propriedade do objeto.
console.log("Utilizando de uma variável para acessar propriedade do objeto.");
{
  let pessoa = {
    nome: "João",
    idade: 35,
    casado: true,
  };

  let propriedade = "nome";
  console.log(pessoa[propriedade]);
}
console.log();

// Adicionando uma nova propriedade ao objeto.
console.log("Adicionando uma nova propriedade ao objeto.");
{
  let pessoa = {
    nome: "João",
    idade: 35,
    casado: true,
  };

  pessoa.numeroDeFilhos = 2;
  console.log(pessoa);

  console.log();
}

// Criando um objeto vazio (por meio de '{}').
console.log("Criando um objeto vazio (por meio de '{}').");
{
  let pessoa = {};
  console.log(pessoa);
}
console.log();

// Criando um objeto vazio (por meio de 'new Object()').
console.log("Criando um objeto vazio (por meio de 'new Object()').");
{
  let pessoa = new Object();
  console.log(pessoa);
}
console.log();

// Criando um objeto vazio (por meio de '{}') e adicionando atributos.
console.log(
  "Criando um objeto vazio (por meio de '{}') e adicionando atributos.",
);
{
  let pessoa = {};
  console.log(pessoa);

  pessoa.nome = "Maria";
  pessoa.idade = 28;
  pessoa.casado = false;
  pessoa.numeroDeFilhos = 0;

  console.log(pessoa);
}
console.log();

// Criando uma função que cria um objeto vazio e depois adiciona as propriedades.
console.log(
  "Criando uma função que cria um objeto vazio e depois adiciona as propriedades.",
);
{
  function criaPessoa(nome, idade, estadoCivil, numeroDeFilhos) {
    let p = {};

    p.nome = nome;
    p.idade = idade;
    p.estadoCivil = estadoCivil;
    p.numeroDeFilhos = numeroDeFilhos;

    return p;
  }

  let pessoa1 = criaPessoa("João", 35, "casado", 2);
  console.log(1, pessoa1);

  let pessoa2 = criaPessoa("Maria", 28, "solteiro", 0);
  console.log(2, pessoa2);
}
console.log();

// Criando uma função que cria um objeto com as propridades, por meio da anotação literal.
console.log(
  "Criando uma função que cria um objeto com as propridades, por meio da anotação literal.",
);
{
  function criaPessoa(nome, idade, estadoCivil, numeroDeFilhos) {
    return {
      nome: nome,
      idade: idade,
      estadoCivil: estadoCivil,
      numeroDeFilhos: numeroDeFilhos,
    };
  }

  let pessoa1 = criaPessoa("João", 35, "casado", 2);
  console.log(1, pessoa1);

  let pessoa2 = criaPessoa("Maria", 28, "solteiro", 0);
  console.log(2, pessoa2);
}
console.log();

// Criando uma função construtora.
console.log("Criando uma função construtora.");
{
  function Pessoa(nome, idade, estadoCivil, numeroDeFilhos) {
    this.nome = nome;
    this.idade = idade;
    this.estadoCivil = estadoCivil;
    this.numeroDeFilhos = numeroDeFilhos;
  }

  let pessoa1 = new Pessoa("João", 35, "casado", 2);
  console.log(1, pessoa1);

  let pessoa2 = new Pessoa("Maria", 28, "solteiro", 0);
  console.log(2, pessoa2);
}
console.log();

// Criando uma classe.
console.log("Criando uma classe.");
{
  class Pessoa {
    constructor(nome, idade, estadoCivil, numeroDeFilhos) {
      this.nome = nome;
      this.idade = idade;
      this.estadoCivil = estadoCivil;
      this.numeroDeFilhos = numeroDeFilhos;
    }
  }

  let pessoa1 = new Pessoa("João", 35, "casado", 2);
  console.log(1, pessoa1);

  let pessoa2 = new Pessoa("Maria", 28, "solteiro", 0);
  console.log(2, pessoa2);
}
console.log();

// Criando um objeto com atributos e métodos (por meio de uma função construtora).
console.log(
  "Criando um objeto com atributos e métodos (por meio de uma função construtora).",
);
{
  function Pessoa(nome, idade, estadoCivil, numeroDeFilhos) {
    this.nome = nome;
    this.idade = idade;
    this.estadoCivil = estadoCivil;
    this.numeroDeFilhos = numeroDeFilhos;
    this.maiorDeIdade = function () {
      return this.idade >= 18;
    };
  }

  let pessoa1 = new Pessoa("João", 35, "casado", 2);
  console.log(1, pessoa1);
  console.log(2, pessoa1.maiorDeIdade());

  let pessoa2 = new Pessoa("Maria", 17, "solteiro", 0);
  console.log(3, pessoa2);
  console.log(4, pessoa2.maiorDeIdade());
}
console.log();

// Criando um objeto com atributos e métodos (por meio de uma função).
console.log(
  "Criando um objeto com atributos e métodos (por meio de uma função).",
);
{
  function criaPessoa(nome, idade, estadoCivil, numeroDeFilhos) {
    return {
      nome: nome,
      idade: idade,
      estadoCivil: estadoCivil,
      numeroDeFilhos: numeroDeFilhos,
      maiorDeIdade: function () {
        return this.idade >= 18;
      },
    };
  }

  let pessoa1 = criaPessoa("João", 35, "casado", 2);
  console.log(1, pessoa1);
  console.log(2, pessoa1.maiorDeIdade());

  let pessoa2 = criaPessoa("Maria", 17, "solteiro", 0);
  console.log(3, pessoa2);
  console.log(4, pessoa2.maiorDeIdade());
}
console.log();

// Criando um objeto com atributos e métodos (por meio de uma classe).
console.log(
  "Criando um objeto com atributos e métodos (por meio de uma classe).",
);
{
  class Pessoa {
    constructor(nome, idade, estadoCivil, numeroDeFilhos) {
      this.nome = nome;
      this.idade = idade;
      this.estadoCivil = estadoCivil;
      this.numeroDeFilhos = numeroDeFilhos;
    }

    maiorDeIdade() {
      return this.idade >= 18;
    }
  }

  let pessoa1 = new Pessoa("João", 35, "casado", 2);
  console.log(1, pessoa1);
  console.log(2, pessoa1.maiorDeIdade());

  let pessoa2 = new Pessoa("Maria", 17, "solteiro", 0);
  console.log(3, pessoa2);
  console.log(4, pessoa2.maiorDeIdade());
}
console.log();

// Listando tudo que um objeto possuí.
console.log("Listando tudo que um objeto possuí.");
{
  function Pessoa(nome, idade, estadoCivil, numeroDeFilhos) {
    this.nome = nome;
    this.idade = idade;
    this.estadoCivil = estadoCivil;
    this.numeroDeFilhos = numeroDeFilhos;
    this.maiorDeIdade = function () {
      return this.idade >= 18;
    };
  }

  let pessoa1 = new Pessoa("João", 35, "casado", 2);
  let pessoa2 = new Pessoa("Maria", 17, "solteiro", 0);

  for (let chave in pessoa1) {
    console.log(`O valor de ${chave} é ${pessoa1[chave]}`);
  }

  for (let chave in pessoa2) {
    console.log(`O valor de ${chave} é ${pessoa2[chave]}`);
  }
}
console.log();

// Listando tudo que um objeto possuí (menos as funções).
console.log("Listando tudo que um objeto possuí.");
{
  function Pessoa(nome, idade, estadoCivil, numeroDeFilhos) {
    this.nome = nome;
    this.idade = idade;
    this.estadoCivil = estadoCivil;
    this.numeroDeFilhos = numeroDeFilhos;
    this.maiorDeIdade = function () {
      return this.idade >= 18;
    };
  }

  let pessoa1 = new Pessoa("João", 35, "casado", 2);
  let pessoa2 = new Pessoa("Maria", 17, "solteiro", 0);

  for (let chave in pessoa1) {
    if (typeof pessoa1[chave] != "function") {
      console.log(`O valor de ${chave} é ${pessoa1[chave]}`);
    }
  }

  for (let chave in pessoa2) {
    if (typeof pessoa2[chave] != "function") {
      console.log(`O valor de ${chave} é ${pessoa2[chave]}`);
    }
  }
}
console.log();

// Testando a cópia de referência de objetos.
console.log("Testando a cópia de referência de objetos.");
{
  function Pessoa(nome, idade, estadoCivil, numeroDeFilhos) {
    this.nome = nome;
    this.idade = idade;
    this.estadoCivil = estadoCivil;
    this.numeroDeFilhos = numeroDeFilhos;
    this.maiorDeIdade = function () {
      return this.idade >= 18;
    };
  }

  let pessoa1 = new Pessoa("João", 35, "casado", 2);
  let pessoa2 = new Pessoa("Maria", 17, "solteiro", 0);

  let pessoa3 = pessoa1; // cópia da referência para o objeto.

  pessoa1.nome = "José Carlos";

  console.log(pessoa1);
  console.log(pessoa2);
  console.log(pessoa3);
}
console.log();

// Testando a clonagem de objetos.
console.log("Testando a clonagem de objetos.");
{
  function Pessoa(nome, idade, estadoCivil, numeroDeFilhos) {
    this.nome = nome;
    this.idade = idade;
    this.estadoCivil = estadoCivil;
    this.numeroDeFilhos = numeroDeFilhos;
    this.maiorDeIdade = function () {
      return this.idade >= 18;
    };
  }

  let pessoa1 = new Pessoa("João", 35, "casado", 2);
  let pessoa2 = new Pessoa("Maria", 17, "solteiro", 0);

  let pessoa3 = {};

  for (let chave in pessoa1) {
    pessoa3[chave] = pessoa1[chave];
  }

  console.log(pessoa1);
  console.log(pessoa2);
  console.log(pessoa3);

  pessoa3.nome = "José Carlos";

  console.log(pessoa1);
  console.log(pessoa2);
  console.log(pessoa3);
}
console.log();
