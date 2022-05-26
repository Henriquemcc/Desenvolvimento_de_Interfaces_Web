function exibirAtributosDoObjetoNavigator() {
  // Exibindo mensagem na página do usuário
  for (let nomeAtributo in navigator) {
    document.write(`<p>navigator[${nomeAtributo}] = ${navigator[nomeAtributo]}<p/>
    `);
  }
}

// Executando a função quando o botão cujo id é 'bt' for clicado.
window.onload = () => {
  bt.onclick = () => exibirAtributosDoObjetoNavigator();
};
