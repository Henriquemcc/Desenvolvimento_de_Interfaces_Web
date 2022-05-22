// Testando controle de fluxo de execução IF (Caso verdadeiro)
{
  let acessoPermitido = false;
  let idade = 21;
  if (idade >= 18) {
    acessoPermitido = true;
  }

  console.log(acessoPermitido);
}

// Testando controle de fluxo de execução IF (Caso falso)
{
  let acessoPermitido = false;
  let idade = 11;
  if (idade >= 18) {
    acessoPermitido = true;
  }

  console.log(acessoPermitido);
}

// Testando controle de fluxo de execução IF ELSE (Caso verdadeiro)
{
  let acessoPermitido;
  let idade = 21;
  if (idade >= 18) acessoPermitido = true;
  else acessoPermitido = false;

  console.log(acessoPermitido);
}

// Testando controle de fluxo de execução IF ELSE (Caso falso)
{
  let acessoPermitido;
  let idade = 11;
  if (idade >= 18) acessoPermitido = true;
  else acessoPermitido = false;

  console.log(acessoPermitido);
}

// Testando o operador condicional ternário (Caso verdadeiro)
{
  let idade = 21;
  let acessoPermitido = (idade >= 18) ? true : false;

  console.log(acessoPermitido);
}

// Testando o operador condicional ternário (Caso falso)
{
  let idade = 11;
  let acessoPermitido = (idade >= 18) ? true : false;

  console.log(acessoPermitido);
}

// Testando a atribuição do resultado de uma comparação (Caso verdadeiro)
{
  let n = 12;
  let ehPar = n % 2 == 0;

  console.log(ehPar);
}

// Testando a atribuição do resultado de uma comparação (Caso falso)
{
  let n = 13;
  let ehPar = n % 2 == 0;

  console.log(ehPar);
}

// Testando o operador condicional ternário em uma conta matemática (Caso verdadeiro)
{
  let dividendo = 12;
  let divisor = 3;
  let quociente = (dividendo != 0) ? (dividendo / divisor) : Infinity;

  console.log(quociente);
}

// Testando o operador condicional ternário em uma conta matemática (Caso falso)
{
  let dividendo = 12;
  let divisor = 0;
  let quociente = (dividendo != 0) ? (dividendo / divisor) : Infinity;

  console.log(quociente);
}

// Testando controles de fluxo IF encadeados (Caso verdadeiro)
{
  let nota = 75;
  let frequencia = .8;
  let aprovado = false;

  if (nota >= 60) {
    if (frequencia >= 0.75) {
      aprovado = true;
    }
  }

  console.log(aprovado);
}

// Testando controles de fluxo IF encadeados (Caso falso 1)
{
  let nota = 75;
  let frequencia = 0.74;
  let aprovado = false;

  if (nota >= 60) {
    if (frequencia >= 0.75) {
      aprovado = true;
    }
  }

  console.log(aprovado);
}

// Testando controles de fluxo IF encadeados (Caso falso 2)
{
  let nota = 59;
  let frequencia = .8;
  let aprovado = false;

  if (nota >= 60) {
    if (frequencia >= 0.75) {
      aprovado = true;
    }
  }

  console.log(aprovado);
}

// Testando controles de fluxo IF encadeados (Caso falso 3)
{
  let nota = 59;
  let frequencia = 0.74;
  let aprovado = false;

  if (nota >= 60) {
    if (frequencia >= 0.75) {
      aprovado = true;
    }
  }

  console.log(aprovado);
}

// Testando controles de fluxo IFs e ELSEs encadeados (Caso aprovado)
{
  let nota = 75;
  let frequencia = 0.8;
  let resultado;

  if (nota >= 60) {
    if (frequencia >= 0.75) resultado = "aprovado";
    else resultado = "reprovado por frequência";
  } else {
    if (frequencia >= 0.75) resultado = "reprovado por nota";
    else resultado = "reprovado por nota e frequência";
  }

  console.log(resultado);
}

// Testando controles de fluxo IFs e ELSEs encadeados (Caso reprovado 1)
{
  let nota = 75;
  let frequencia = 0.74;
  let resultado;

  if (nota >= 60) {
    if (frequencia >= 0.75) resultado = "aprovado";
    else resultado = "reprovado por frequência";
  } else {
    if (frequencia >= 0.75) resultado = "reprovado por nota";
    else resultado = "reprovado por nota e frequência";
  }

  console.log(resultado);
}

// Testando controles de fluxo IFs e ELSEs encadeados (Caso reprovado 2)
{
  let nota = 59;
  let frequencia = 0.8;
  let resultado;

  if (nota >= 60) {
    if (frequencia >= 0.75) resultado = "aprovado";
    else resultado = "reprovado por frequência";
  } else {
    if (frequencia >= 0.75) resultado = "reprovado por nota";
    else resultado = "reprovado por nota e frequência";
  }

  console.log(resultado);
}

// Testando controles de fluxo IFs e ELSEs encadeados (Caso reprovado 3)
{
  let nota = 59;
  let frequencia = 0.74;
  let resultado;

  if (nota >= 60) {
    if (frequencia >= 0.75) resultado = "aprovado";
    else resultado = "reprovado por frequência";
  } else {
    if (frequencia >= 0.75) resultado = "reprovado por nota";
    else resultado = "reprovado por nota e frequência";
  }

  console.log(resultado);
}

// Testando controle de fluxo SWITCH (sem break)
{
  let a = 2;
  let b = 1;
  let operador = "+";
  let resultado;

  switch (operador) {
    case "+":
      resultado = a + b;
    case "-":
      resultado = a - b;
    case "*":
      resultado = a * b;
    case "/":
      resultado = a / b;
    default:
      console.log("Operador inválido");
      resultado = null;
  }

  console.log(`resultado = ${resultado}`);
}

// Testando controle de fluxo SWITCH (Adição)
{
  let a = 2;
  let b = 1;
  let operador = "+";
  let resultado;

  switch (operador) {
    case "+":
      resultado = a + b;
      break;
    case "-":
      resultado = a - b;
      break;
    case "*":
      resultado = a * b;
      break;
    case "/":
      resultado = a / b;
      break;
    default:
      console.log("Operador inválido");
      resultado = null;
  }

  console.log(`resultado = ${resultado}`);
}

// Testando controle de fluxo SWITCH (Subtração)
{
  let a = 2;
  let b = 1;
  let operador = "-";
  let resultado;

  switch (operador) {
    case "+":
      resultado = a + b;
      break;
    case "-":
      resultado = a - b;
      break;
    case "*":
      resultado = a * b;
      break;
    case "/":
      resultado = a / b;
      break;
    default:
      console.log("Operador inválido");
      resultado = null;
  }

  console.log(`resultado = ${resultado}`);
}

// Testando controle de fluxo SWITCH (Multiplicação)
{
  let a = 2;
  let b = 1;
  let operador = "*";
  let resultado;

  switch (operador) {
    case "+":
      resultado = a + b;
      break;
    case "-":
      resultado = a - b;
      break;
    case "*":
      resultado = a * b;
      break;
    case "/":
      resultado = a / b;
      break;
    default:
      console.log("Operador inválido");
      resultado = null;
  }

  console.log(`resultado = ${resultado}`);
}

// Testando controle de fluxo SWITCH (Divisão)
{
  let a = 2;
  let b = 1;
  let operador = "/";
  let resultado;

  switch (operador) {
    case "+":
      resultado = a + b;
      break;
    case "-":
      resultado = a - b;
      break;
    case "*":
      resultado = a * b;
      break;
    case "/":
      resultado = a / b;
      break;
    default:
      console.log("Operador inválido");
      resultado = null;
  }

  console.log(`resultado = ${resultado}`);
}

// Testando controle de fluxo SWITCH (Inválido)
{
  let a = 2;
  let b = 1;
  let operador = "`";
  let resultado;

  switch (operador) {
    case "+":
      resultado = a + b;
      break;
    case "-":
      resultado = a - b;
      break;
    case "*":
      resultado = a * b;
      break;
    case "/":
      resultado = a / b;
      break;
    default:
      console.log("Operador inválido");
      resultado = null;
  }

  console.log(`resultado = ${resultado}`);
}
