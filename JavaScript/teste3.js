// Testando a conversão de uma string para número.
console.log("Testando a conversão de uma string para número.");
{
  let n = +"12";
  console.log(typeof n);
}
console.log();

// Testando o operador de pré-decremento.
console.log("Testando o operador de pré-decremento.");
{
  let a, b;
  a = 2;
  b = --a * 2;
  console.log(a, b);
}
console.log();

// Testando o operador de pós-decremento.
console.log("Testando o operador de pós-decremento.");
{
  let a, b;
  a = 2;
  b = a-- * 2;
  console.log(a, b);
}
console.log();

// Testando o operador de pré-incremento.
console.log("Testando o operador de pré-incremento.");
{
  let a, b;
  a = 2;
  b = ++a * 2;
  console.log(a, b);
}
console.log();

// Testando o operador de pós-incremento.
console.log("Testando o operador de pós-incremento.");
{
  let a, b;
  a = 2;
  b = a++ * 2;
  console.log(a, b);
}
console.log();

// Testando o operador de concatenação de strings.
console.log("Testando o operador de concatenação de strings.");
{
  let nome = "José";
  let sobrenome = "Pereira";
  console.log(nome + " " + sobrenome);
}
console.log();

// Testando a coerção de tipos do JavaScript.
console.log("Testando a coerção de tipos do JavaScript.");
{
  let a = "5" + 2;
  console.log(`a = ${a} do tipo ${typeof a}`);

  let b = +"5" + 2;
  console.log(`b = ${b} do tipo ${typeof b}`);

  let c = "5" - 2;
  console.log(`c = ${c} do tipo ${typeof c}`);

  let d = 5 + "2";
  console.log(`d = ${d} do tipo ${typeof d}`);

  let e = 5 - "2";
  console.log(`e = ${e} do tipo ${typeof e}`);

  let f = 5 + 2 + "2";
  console.log(`f = ${f} do tipo ${typeof f}`);

  let g = 5 + "2" + 2;
  console.log(`g = ${g} do tipo ${typeof g}`);

  let h = +(5 + "2") + 2;
  console.log(`h = ${h} do tipo ${typeof h}`);

  let i = "5" / "2";
  console.log(`i = ${i} do tipo ${typeof i}`);
}
console.log();
