// Declarando variável nome
console.log("Declarando variável nome");
{
  let nome = "Henrique";
  console.log(nome);
}
console.log();

// Testando escopo
console.log("Testando escopo");
{
  {
    let nome = "Henrique";
    console.log(nome);
  }
  console.log(nome);
}
console.log();

// Testando escopo com var
console.log("Testando escopo com var");
{
  {
    var nome = "Henrique";
    console.log(nome);
  }
  console.log(nome);
}
console.log();

// Testando escopo com var e let
console.log("Testando escopo com var e let");
{
  {
    var nome = "João";
    console.log(nome);
  }

  console.log(nome);

  {
    let nome = "José";
    console.log(nome);
  }

  console.log(nome);
}
console.log();

// Testando a declaração de uma constante
console.log("Testando a declaração de uma constante");
{
  const PI = 3.14159;
  console.log(PI);
}
console.log();

// Testando variável
console.log("Testando variável");
{
  let n = 2;
  console.log(n);

  n = 3;
  console.log(n);
}
console.log();

// Testando redefinição do valor de uma constante
console.log("Testando redefinição do valor de uma constante");
{
  const PI = 3.14159;
  console.log(PI);

  try {
    PI = 4;
  } catch (e) {
    console.log(e);
  }
  console.log(PI);
}
console.log();
