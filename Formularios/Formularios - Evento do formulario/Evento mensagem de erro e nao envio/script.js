function enviar() {
  let nome = document.getElementById("nome");
  let senha = document.getElementById("senha");
  let enviar = true;

  // Exibindo mensagem de erro e cancelando eventos caso algum dos campos estejam vazios
  if (nome.value.length <= 0 || senha.value.length <= 0) {
    alert("Campos não podem ficar em branco.");
    enviar = false;
  }

  return enviar
}

window.onload = () => {

  // Configurando o evento de enviar para executar a função enviar
  let login = document.getElementById("login");
  login.onsubmit = enviar;
  
};
