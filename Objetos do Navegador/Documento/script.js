function modificarDocumento() {
  // Removendo o título da página
  document.getElementsByTagName("h1")[0].remove();

  // Removendo o parágrafo da página
  document.getElementsByTagName("p")[0].remove();

  // Removendo o botão da página
  document.getElementsByTagName("button")[0].remove();

  // Removendo o parágrafo do botão da página
  document.getElementsByTagName("p")[0].remove();

  // Adicionando novo título na página
  document.write("<h1>Página gerada</h1>");

  // Adicionando um novo parágrafo na página
  document.write(
    "<p>Página gerada pela modificação do objeto documento (document).</p>",
  );

  // Adicionando uma imagem na página
  document.write(
    '<img src="https://source.unsplash.com/random/1920x1080?sig=1" alt="Imagem de destaque" width="100%">',
  );
}

// Executando a função quando o botão cujo id é 'bt' for clicado.
window.onload = () => {
  bt.onclick = () => modificarDocumento();
};
