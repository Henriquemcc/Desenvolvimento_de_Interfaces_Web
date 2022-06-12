/**
 * Imagem da parte da frente das cartas.
 */
let imagens = [];
for (let i = 0; i <= 1024; i++) {
  imagens.push(`https://picsum.photos/id/${i}/80`);
}

/**
 * Imagem da parte de traz das cartas.
 */
let fundo = "https://picsum.photos/80?grayscale";

// Adicionando parte de traz das cartas
onload = () => {
  let elementosImagens = document.querySelectorAll("#memoria img");
  elementosImagens.forEach(
    (img, i) => {
      img.src = fundo;
    },
  );
};
