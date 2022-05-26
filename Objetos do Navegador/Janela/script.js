function exibirAtributosDoObjetoWindow() {
  // Exibindo mensagem na página do usuário
  for (let nomeAtributo in window) {
    document.write(`<p>window[${nomeAtributo}] = ${window[nomeAtributo]}<p/>
    `);
  }
}

// Executando a função quando o botão cujo id é 'bt' for clicado.
window.onload = () => {
  bt.onclick = () => exibirAtributosDoObjetoWindow();
};
