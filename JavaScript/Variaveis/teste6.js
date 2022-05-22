// Testando o lastro de repetição WHILE (quando a condição é verdadeira antes de entrar no lastro).
console.log(
  "Testando o lastro de repetição WHILE (quando a condição é verdadeira antes de entrar no lastro).",
);
{
  let i = 0;
  while (i < 5) {
    console.log(i);
    i++;
  }
}
console.log();

// Testando o lastro de repetição DO WHILE (quando a condição é verdadeira antes de entrar no lastro).
console.log(
  "Testando o lastro de repetição DO WHILE (quando a condição é verdadeira antes de entrar no lastro).",
);
{
  let i = 0;
  do {
    console.log(i);
    i++;
  } while (i < 5);
}
console.log();

// Testando o lastro de repetição WHILE (quando a condição não é verdadeira antes de entrar no lastro).
console.log(
  "Testando o lastro de repetição WHILE (quando a condição não é verdadeira antes de entrar no lastro).",
);

{
  let i = 6;
  while (i < 5) {
    console.log(i);
    i++;
  }
}
console.log();

// Testando o lastro de repetição DO WHILE (quando a condição não é verdadeira antes de entrar no lastro).
console.log(
  "Testando o lastro de repetição DO WHILE (quando a condição não é verdadeira antes de entrar no lastro).",
);
{
  let i = 6;
  do {
    console.log(i);
    i++;
  } while (i < 5);
}
console.log();

// Testando o lastro de repetição FOR.
console.log("Testando o lastro de repetição FOR.");
{
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}
console.log();

// Testando o lastro de repetição FOR com BREAK.
console.log("Testando o lastro de repetição FOR com BREAK.");
{
  for (let i = 0; i < 15; i++) {
    if (i == 7) break;
    console.log(i);
  }
}
console.log();

// Testando o lastro de repetição FOR com CONTINUE.
console.log("Testando o lastro de repetição FOR com CONTINUE.");
{
  for (let i = 0; i < 15; i++) {
    if (i == 7) continue;
    console.log(i);
  }
}
console.log();
