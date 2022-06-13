let usuario = {
  "nome": "João da Silva",
  "senha": "1234",
};

console.log(`usuario: ${usuario}`, typeof usuario);

let str = JSON.stringify(usuario);
console.log(`str: ${str}`, typeof str);

let usuario2 = JSON.parse(str);
console.log(`usuario2: ${usuario2}`, typeof usuario2);

try{
let usuario3 = JSON.parse("fdas{+%");
console.log(`usuario3: ${usuario3}`, typeof usuario3);
}
catch (e) {
    console.log(e);
}