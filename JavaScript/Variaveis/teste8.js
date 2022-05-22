// Testando a declaração e a invocação de uma função.
console.log("Testando a declaração e a invocação de uma função.");
{
  function mensagem() {
    console.log("Olá mundo");
  }

  mensagem();
}
console.log();

// Testando a declaração e a invocação (várias vezes) de uma função.
console.log(
  "Testando a declaração e a invocação (várias vezes) de uma função.",
);
{
  function mensagem() {
    console.log("Olá mundo");
  }

  mensagem();
  mensagem();
  mensagem();
}
console.log();

// Testando o retorno de uma função.
console.log("Testando o retorno de uma função.");
{
  function mensagem() {
    return "Olá mundo!";
  }

  console.log(mensagem());
}
console.log();

// Testando o retorno e o parâmetro de uma função.
console.log("Testando o retorno e o parâmetro de uma função.");
{
  function mensagem(nome) {
    return `Olá ${nome}!`;
  }

  console.log(mensagem("Ana"));
  console.log(mensagem("José"));
  console.log(mensagem("Pedro"));
}
console.log();

// Testando os parâmetros, o processamento e o retorno de uma função.
console.log(
  "Testando os parâmetros, o processamento e o retorno de uma função.",
);
{
  function soma(a, b) {
    return a + b;
  }

  console.log(soma(2, 3));
  console.log(soma(5, 1));
}
console.log();

// Testando os parâmetros de uma função (sem parãmetros padrões).
console.log("Testando os parâmetros de uma função (sem parãmetros padrões).");
{
  function soma(a, b) {
    console.log(a, typeof a);
    console.log(b, typeof b);
    return a + b;
  }

  console.log(soma(2));
}
console.log();

// Testando os parâmetros de uma função (com parâmetros padrões).
console.log("Testando os parâmetros de uma função (com parâmetros padrões).");
{
  function soma(a = 0, b = 0) {
    console.log(a, typeof a);
    console.log(b, typeof b);
    return a + b;
  }

  console.log(soma());
  console.log(soma(2));
}
console.log();

// Testando a declaração de variável dentro de função (com let).
console.log("Testando a declaração de variável dentro de função (com let).");
{
  function soma(a = 0, b = 0) {
    let resultado = a + b;
    return resultado;
  }

  console.log(soma());
  try {
    console.log(resultado); // gera um ReferenceError
  } catch (e) {
    console.log(e);
  }
}
console.log();

// Testando a declaração de variável dentro de função (com var).
console.log("Testando a declaração de variável dentro de função (com var).");
{
  function soma(a = 0, b = 0) {
    var resultado = a + b;
    return resultado;
  }

  console.log(soma());

  try {
    console.log(resultado); // gera um ReferenceError
  } catch (e) {
    console.log(e);
  }
}
console.log();

// Testando a declaração de variável fora da função (com let).
console.log("Testando a declaração de variável fora da função (com let).");
{
  let resultado;
  function soma(a = 0, b = 0) {
    resultado = a + b;
    return resultado;
  }

  console.log(soma());
  console.log(resultado);
}
console.log();

// Testando a declaração de variável (com o mesmo nome) fora e dentro da função.
console.log(
  "Testando a declaração de variável (com o mesmo nome) fora e dentro da função.",
);
{
  let resultado = 3;
  console.log(resultado);

  function soma(a = 0, b = 0) {
    let resultado = a + b;
    console.log(resultado);
    return resultado;
  }

  console.log(soma());
  console.log(resultado);
}
console.log();

// Testando o uso de expressão de função.
console.log("Testando o uso de expressão de função.");
{
  console.log(
    function (a, b) {
      return a + b;
    },
  );
}
console.log();

// Testando o uso de expressão de função.
console.log("Testando o uso de expressão de função.");
{
  console.log(
    (function (a, b) {
      return a + b;
    })(4, 5), // IIFE - Immediately Invoked Function Expression
  );
}
console.log();

// Testando a declaração de uma função dentro de uma variável.
console.log("Testando a declaração de uma função dentro de uma variável.");
{
  let soma = function (a, b) {
    return a + b;
  };

  console.log(soma(4, 3));
}
console.log();

// Testando a passagem de uma função como parâmetro para outra função.
console.log(
  "Testando a passagem de uma função como parâmetro para outra função.",
);
{
  let sum = function (a, b) {
    return a + b;
  };

  let subtraction = function (a, b) {
    return a - b;
  };

  let multiplication = function (a, b) {
    return a * b;
  };

  let division = function (a, b) {
    return a / b;
  };

  let division_ramainder = function (a, b) {
    return a % b;
  };

  let exponentiation = function (a, b) {
    return a ** b;
  };

  function executar(fn, a, b) {
    return fn(a, b);
  }

  console.log(executar(sum, 12, 3));
  console.log(executar(subtraction, 12, 3));
  console.log(executar(multiplication, 12, 3));
  console.log(executar(division, 12, 3));
  console.log(executar(division_ramainder, 12, 3));
  console.log(executar(exponentiation, 12, 3));
}
console.log();

// Testando a declaração de uma função recursiva em uma variável.
console.log("Testando a declaração de uma função recursiva em uma variável.");
{
  let fat = function fatorial(n) {
    if (n <= 1) return 1;
    return n * fatorial(n - 1);
  };

  console.log(fat(5));
  console.log(fat(3));
}
console.log();

// Testando a declaração de uma função seta.
console.log("Testando a declaração de uma função seta.");
{
  let adicao = function (a, b) {
    return a + b;
  };

  let adicao_arrow = (a, b) => a + b;

  console.log(adicao(3, 4));
  console.log(adicao_arrow(3, 4));
}
console.log();

// Testando a declaração de uma função seta com chaves.
console.log("Testando a declaração de uma função seta com chaves.");
{
  let adicao = (a, b) => {
    return a + b;
  };

  console.log(adicao(3, 4));
}
console.log();
