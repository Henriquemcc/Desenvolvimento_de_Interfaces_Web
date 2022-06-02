function prepararBotaoConfirmar() {
  let nome = document.getElementById("nome");
  let senha = document.getElementById("senha");
  let button_submit = document.getElementById("button_submit");

  // Habilitando botão, caso o nome e a senha não sejam vazios
  if (nome.value.length > 0 && senha.value.length > 0) {
    button_submit.disabled = false;
  }
  
  // Desabilitando botão, caso o nome e a senha estejam vazios
  else {
    button_submit.disabled = true;
  }
}

window.onload = () => {

  // Realizando a configuração prévia do botão enviar
  prepararBotaoConfirmar();

  // Habilitando o botão de enviar caso o usuário e a senha estiverem preenchidos
  let nome = document.getElementById("nome");
  nome.onchange = prepararBotaoConfirmar;

  let senha = document.getElementById("senha");
  senha.onchange = prepararBotaoConfirmar;

  // Imprimindo no console o valor digitado nos campos
  let login = document.getElementById("login");
  login.onsubmit = () => {
      console.log("nome:", nome.value);
      console.log("senha", senha.value);
      return false;

  }

  
};
