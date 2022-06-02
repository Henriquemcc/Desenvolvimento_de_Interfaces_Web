window.onload = () => {

  // Configurando o evento de enviar para executar a função enviar
  let nome = document.getElementById("nome");
  let senha = document.getElementById("senha");
  let login = document.getElementById("login");
  login.onsubmit = (evento) => {
    console.log(evento);
    console.log("nome:", nome.value);
    console.log("senha:", senha.value);
    console.log("Event type:", evento.type);
    console.log("Event target id:", evento.target.id);
    return false;
  }
  
};
