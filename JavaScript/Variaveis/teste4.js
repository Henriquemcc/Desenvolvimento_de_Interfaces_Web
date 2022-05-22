// Testando operadores.
console.log("Testando operadores.");
{
  let a = "5";
  let b = 5;
  let c = 2;

  console.log(1, a > c);
  console.log(2, b > c);
  console.log(3, b >= c);
  console.log(4, b < c);
  console.log(5, b <= c);
  console.log(6, b != c);
  console.log(7, a != c);
  console.log(8, a != b);
  console.log(9, a == b);
  console.log(10, a === b);
}
console.log();

// Testando operadores com strings.
console.log("Testando operadores com strings.");
{
  console.log(11, "Z" > "A");
  console.log(12, "Z" > "a");
  console.log(13, "Pato" > "Pata");
  console.log(14, "Dezena" > "Dez");
}
console.log();

// Testando comparação com valores null e undefined.
console.log("Testando comparação com valores null e undefined.");
{
  let x;

  // Com operador de comparação simples
  console.log(15, x == undefined);
  console.log(16, x == null);

  // Com operador de comparação estritamente igual
  console.log(17, x === undefined);
  console.log(18, x === null);
}
console.log();

// Testando operador lógico AND.
console.log("Testando operador lógico AND.");
{
  let a = "5";
  let b = 5;
  let c = 2;

  console.log(19, a == b && b > c); // v && v => v
  console.log(20, a === b && b > c); // f && v => f
  console.log(21, a == b && b < c); // v && f => f
  console.log(22, a === b && b < c); // f && f => f
}
console.log();

// Testando operador lógico OR.
console.log("Testando operador lógico OR.");
{
  let a = "5";
  let b = 5;
  let c = 2;

  console.log(23, a == b || b > c); // v || v => v
  console.log(24, a === b || b > c); // f || v => v
  console.log(25, a == b || b < c); // v || f => v
  console.log(26, a === b || b < c); // f || f => f
}
console.log();

// Testando operador lógico NOT.
console.log("Testando operador lógico NOT.");
{
  let b = 5;
  let c = 2;
  console.log(27, !(b > c)); // !v => f, !f => v
}
console.log();
