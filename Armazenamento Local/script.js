window.onload = () => {
  // Obtendo objeto user
  let user;
  try {
    user = JSON.parse(window.localStorage.getItem("user"));
  } catch (error) {
    console.log(error);
  }

  // Criando novo objeto caso user seja nulo
  if (user == null) {
    user = new Object();
  }

  // Recuperando o valor do nome do usuário
  let nome = document.getElementById("nome");
  if (user.nome) {
    nome.value = user.nome;
  }

  // Recuperando o valor da senha do usuário
  let senha = document.getElementById("senha");
  if (user.senha) {
    senha.value = user.senha;
  }

  // Salvando usuário localmente
  let login = document.getElementById("login");
  login.onsubmit = (evento) => {
    // Salvando nome de usuário
    user.nome = nome.value;

    // Salvando senha
    user.senha = senha.value;

    // Salvando usuário
    window.localStorage.setItem("user", JSON.stringify(user));

    // Impedindo que o formulário seja enviado
    evento.preventDefault();
  };

  // Imprimindo a quantidade de chaves do local storage
  console.log(`window.localStorage.length: ${window.localStorage.length}`);

  // Imprimindo a primeira chave do local storage
  console.log(`window.localStorage.key(0): ${window.localStorage.key(0)}`);
};
