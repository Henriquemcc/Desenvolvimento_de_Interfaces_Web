window.onload = () => {
  // Obtendo o valor do nome do usuário armazenado localmente
  let nome = document.getElementById("nome");
  nome.value = window.localStorage.getItem("username");

  // Salvando o nome de usuário localmente
  let login = document.getElementById("login");
  login.onsubmit = (evento) => {
    console.log({ nome: nome.value, senha: senha.value });
    window.localStorage.setItem("username", nome.value);
    evento.preventDefault();
  };

  // Imprimindo a quantidade de chaves do local storage
  console.log(`window.localStorage.length: ${window.localStorage.length}`);

  // Imprimindo a primeira chave do local storage
  console.log(`window.localStorage.key(0): ${window.localStorage.key(0)}`);
};
