/**
 * Obtém uma string sem caracteres inválidos.
 * @param {*} stringEntrada String cujos caracteres inválidos serão removidos.
 * @returns String sem caracteres inválidos.
 */
function removerCaracteresInvalidos(stringEntrada) {
  if (typeof stringEntrada != "string") {
    throw TypeError;
  }

  let caracteresInvalidos = "!@#$%^&*()-=,.;[]{}\\|'\":;/<>~_+ºª´£¢¬§";

  // Substituindo os caracteres inválidos
  for (let i = 0; i < caracteresInvalidos.length; i++) {
    while (stringEntrada.includes(caracteresInvalidos.charAt(i))) {
      stringEntrada = stringEntrada.replace(caracteresInvalidos.charAt(i), "");
    }
  }

  return stringEntrada;
}

window.onload = () => {
  /* -- Campo Nome: Inicio -- */

  // Obtendo o campo nome (desnecessário em navegadores modernos).
  let nome = document.getElementById("nome");

  // Quando o valor for alterado no campo nome e o campo deixar de estar selecionado.
  nome.onchange = () => {
    console.log("Evento: change", nome.value, nome.value.length);
    nome.value = removerCaracteresInvalidos(nome.value);
  };

  // Quando o valor for alterado no campo nome
  nome.oninput = () => {
    console.log("Evento: input", nome.value, nome.value.length);
  };

  // Quando o campo receber foco
  nome.onfocus = () => {
    console.log("Evento: focus", "o campo nome recebeu foco.");

    // Adicionando instruções
    let instrucoes = document.getElementById("instrucoes_nome");
    instrucoes.innerHTML = "Informe o seu nome";
    instrucoes.style.color = "#999";

    // Removendo a borda vermelha
    nome.style.border = "";
  };

  // Quando o campo for desfocado
  nome.onblur = () => {
    console.log("Evento: blur", "o campo nome foi desfocado.");

    // Removendo instruções
    let instrucoes = document.getElementById("instrucoes_nome");
    instrucoes.innerHTML = "";

    // Exibindo mensagem de erro caso o campo não tenha nenhum caractere
    if (nome.value.length <= 0) {
      instrucoes.innerHTML = "O nome não pode ficar em branco";
      instrucoes.style.color = "#F00";

      // Adicionando borda vermelha em volta do campo
      nome.style.border = "thin red solid";
    }
  };

  /* -- Campo Nome: Fim -- */

  /* -- Campo Senha: Inicio -- */

  // Obtendo o campo senha (desnecessário em navegadores modernos).
  let senha = document.getElementById("senha");

  // Quando o valor for alterado no campo senha.
  senha.onchange = () => {
    console.log("Event: change", senha.value, senha.value.length);
  };

  // Quando o valor for alterado no campo senha e o campo deixar de estar selecionado.
  senha.oninput = () => {
    console.log("Evento: input", senha.value, senha.value.length);
  };

  // Quando o campo receber foco
  senha.onfocus = () => {
    console.log("Evento: focus", "o campo senha recebeu foco.");

    // Adicionando instruções
    let instrucoes = document.getElementById("instrucoes_senha");
    instrucoes.innerHTML = "Informe o sua senha";
    instrucoes.style.color = "#999";

    // Removendo a borda vermelha
    senha.style.border = "";
  };

  // Quando o campo for desfocado
  senha.onblur = () => {
    console.log("Evento: blur", "o campo senha foi desfocado.");

    // Removendo instruções
    let instrucoes = document.getElementById("instrucoes_senha");
    instrucoes.innerHTML = "";

    // Exibindo mensagem de erro caso o campo não tenha nenhum caractere
    if (senha.value.length <= 0) {
      instrucoes.innerHTML = "A senha não pode ficar em branco";
      instrucoes.style.color = "#F00";

      // Adicionando borda vermelha em volta do campo
      senha.style.border = "thin red solid";
    }
  };

  /* -- Campo Senha: Fim -- */
};
