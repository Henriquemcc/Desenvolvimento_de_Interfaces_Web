// Testando a criação de um vetor de strings.
console.log("Testando a criação de um vetor de strings.");
{
  let frutas = ["laranja", "maçã", "banana"];
  console.log(frutas);

  console.log(frutas[0]);
}
console.log();

// Testando a criação de um vertor de números.
console.log("Testando a criação de um vertor de números.");
{
  let numeros = [1, 5, 3, 8, 0, 6, 9];
  console.log(numeros);
}
console.log();

// Testando a criação de um vetore de elementos de diferentes tipos.
console.log(
  "Testando a criação de um vetore de elementos de diferentes tipos.",
);
{
  let misturado = ["José", 35, true];
  console.log(misturado);
}
console.log();

// Testando a criação e a manipulação de um vertor.
console.log("Testando a criação e a manipulação de um vertor.");
{
  let frutas = ["laranja", "maçã", "banana"];
  console.log(frutas);

  frutas[2] = "limão";
  console.log(frutas);

  frutas[3] = "pêra";
  console.log(frutas);
  console.log(frutas.length);

  frutas[6] = "abacaxi";
  console.log(frutas);

  console.log(frutas.length);
  console.log(frutas[4], typeof frutas[4]);

  frutas[frutas.length] = "melão";
  console.log(frutas);

  frutas[frutas.length] = "melancia";
  console.log(frutas);
}
console.log();

// Testando a criação e a manipulação de um vertor vazio (Por meio de colchetes).
console.log(
  "Testando a criação e a manipulação de um vertor vazio (Por meio de colchetes).",
);
{
  let frutas = [];
  console.log(frutas);

  frutas[frutas.length] = "melão";
  console.log(frutas);

  frutas[frutas.length] = "melancia";
  console.log(frutas);
}
console.log();

// Testando a criação e a manipulação de um vertor vazio (Por meio do 'new Array()').
console.log(
  "Testando a criação e a manipulação de um vertor vazio (Por meio do 'new Array()').",
);
{
  let frutas = new Array();
  console.log(frutas);

  frutas[frutas.length] = "melão";
  console.log(frutas);

  frutas[frutas.length] = "melancia";
  console.log(frutas);
}
console.log();

// Percorrendo todos os elementos de um vertor.
console.log("Percorrendo todos os elementos de um vertor.");
{
  let frutas = [
    "laranja",
    "maçã",
    "pêra",
    "limão",
    "abacaxi",
    "melão",
    "melancia",
  ];
  console.log(frutas);

  for (let i = 0; i < frutas.length; i++) {
    console.log(i, frutas[i]);
  }
}
console.log();

// Testando os métodos de um vertor de strings.
console.log("Testando os métodos de um vertor de strings.");
{
  let frutas = [
    "laranja",
    "maçã",
    "pêra",
    "limão",
    "abacaxi",
    "melão",
    "melancia",
    "morango",
    "uva",
  ];
  console.log(frutas);

  frutas.sort();
  console.log(frutas);

  frutas.push("banana");
  console.log(frutas);

  let fruta_removida1 = frutas.pop();
  console.log(fruta_removida1);
  console.log(frutas);

  frutas.unshift("banana");
  console.log(frutas);

  let fruta_removida2 = frutas.shift();
  console.log(fruta_removida2);
  console.log(frutas);

  frutas.forEach((fruta) => console.log(fruta));

  let frutas2 = frutas.map(
    (fruta) => fruta.toLocaleUpperCase(),
  );
  console.log(frutas2);
  console.log(frutas);
}
console.log();
