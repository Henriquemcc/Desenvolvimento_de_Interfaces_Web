// Declarando variável do tipo numérico (sem casas decimais) e imprimindo o seu valor e o seu tipo.
console.log(
  "Declarando variável do tipo numérico (sem casas decimais) e imprimindo o seu valor e o seu tipo.",
);
{
  let n = 15;
  console.log(n, typeof n);
}
console.log();

// Declarando variável do tipo numérico (com casas decimais) e imprimindo o seu valor e o seu tipo.
console.log(
  "Declarando variável do tipo numérico (com casas decimais) e imprimindo o seu valor e o seu tipo.",
);
{
  let r = 1.5;
  console.log(r, typeof r);
}
console.log();

// Declarando variável do tipo big int e imprimindo o seu valor e o seu tipo.
console.log(
  "Declarando variável do tipo big int e imprimindo o seu valor e o seu tipo.",
);
{
  let b = 39287498401394127481237489123749n;
  console.log(b, typeof b);
}
console.log();

// Declarando variável do tipo string e imprimindo o seu valor e o seu tipo.
console.log(
  "Declarando variável do tipo string e imprimindo o seu valor e o seu tipo.",
);
{
  let s = "Maria";
  console.log(s, typeof s);
}
console.log();

// Declarando variável do tipo lógico e imprimindo o seu valor e o seu tipo.
console.log(
  "Declarando variável do tipo lógico e imprimindo o seu valor e o seu tipo.",
);
{
  let l = true;
  console.log(l, typeof l);
}
console.log();

// Declarando variável do tipo lógico resultado de uma expressão lógica, e imprimindo o seu valor e o seu tipo.
console.log(
  "Declarando variável do tipo lógico resultado de uma expressão lógica, e imprimindo o seu valor e o seu tipo.",
);
{
  let n = 15;
  let l = n > 20;
  console.log(l, typeof l);
}
console.log();

// Declarando variável do tipo numérico resultado de uma expressão aritmética, e imprimindo o seu valor e o seu tipo.
console.log(
  "Declarando variável do tipo numérico resultado de uma expressão aritmética, e imprimindo o seu valor e o seu tipo.",
);
{
  let n = 2 * 3 + 5;
  console.log(n, typeof n);
}
console.log();

// Declarando variável do tipo string (por meio da template string) e imprimindo o seu valor e o tipo.
console.log(
  "Declarando variável do tipo string (por meio da template string) e imprimindo o seu valor e o tipo.",
);
{
  let ts = `Esta é uma string
    que possuí
    várias linhas`;
  console.log(ts, typeof ts);
}
console.log();

// Declarando variável do tipo string (por meio da template string, e utilizando a interpolação de valores), e imprimindo o seu valor e o seu tipo.
console.log(
  "Declarando variável do tipo string (por meio da template string, e utilizando a interpolação de valores), e imprimindo o seu valor e o seu tipo.",
);
{
  let s = "Maria";
  let ts = `Olá ${s}`;
  console.log(ts, typeof ts);
}
console.log();

// Declarando variável do tipo string (por meio da template string, e utilizando a interpolação de valores), e imprimindo o seu valor e o seu tipo.
console.log(
  "Declarando variável do tipo string (por meio da template string, e utilizando a interpolação de valores), e imprimindo o seu valor e o seu tipo.",
);
{
  let n = 2 * 3 + 5;
  let r = 1.5;
  let ts = `O resultado da multiplicação de
              ${n} por ${r} é ${n * r}`;
  console.log(ts, typeof ts);
}
console.log();

// Declarando variável do tipo string (por meio da concatenação), e imprimindo o seu valor e o seu tipo.
console.log(
  "Declarando variável do tipo string (por meio da concatenação), e imprimindo o seu valor e o seu tipo.",
);
{
  let n = 2 * 3 + 5;
  let r = 1.5;
  let s = "O resultado da multiplicação de " + n + " por " + r + " é " +
    (n * r);
  console.log(s, typeof s);
}
console.log();

// Declarando uma variável sem valor, e imprimindo o seu valor e o seu tipo.
console.log(
  "Declarando uma variável sem valor, e imprimindo o seu valor e o seu tipo.",
);
{
  let v;
  console.log(v, typeof v);
}
console.log();

// Declarando uma variável com o valor null, e imprimindo o seu valor e o seu tipo.
console.log(
  "Declarando uma variável com o valor null, e imprimindo o seu valor e o seu tipo.",
);
{
  let v = null;
  console.log(v, typeof v);
}
console.log();
