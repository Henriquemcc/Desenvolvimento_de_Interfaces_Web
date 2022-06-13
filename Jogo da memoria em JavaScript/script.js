/**
 * Obtém um número randômico dentro de uma faixa de valores.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_number_between_two_values
 * @param {Number} min Valor mínimo (incluso) para o número randômico.
 * @param {Number} max Valor máximo (não incluso) para o número randômico.
 * @returns Número randômico dentro da faixa entre ['min', 'max'[.
 */
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

/**
 * Remove um elemento de uma posição específica do array.
 * @param {*} array Referência para o array em que o elemento será removido.
 * @param {Number} index Posição do elemento a ser removido.
 * @returns Elemento removido.
 */
function Array_removeByIndex(array, index) {
  let i, resp;

  // Validando remoção
  if (array.length == 0 || index < 0 || index >= array.length) {
    throw "Erro ao remover!";
  }

  // Obtendo elemento a ser removido
  resp = array[index];

  // Empurrando elementos do array
  for (i = index; i < array.length; i++) {
    array[i] = array[i + 1];
  }

  array.pop();

  return resp;
}

/**
 * Embaralha um array.
 * @param {*} array Array a ser embaralhado.
 */
 function Array_sufle(array) {
    for (let i = 0; i < array.length; i++) {
        let position = Math.trunc(getRandomArbitrary(0, array.length));
        let temporary = array[position];
        array[position] = array[i];
        array[i] = temporary;
    }
}

/**
 * Obtém a url de uma imagem do site picsum.photos a partir de seu id e tamanho.
 * @param {Number} id ID da imagem.
 * @param {Number} size Tamanho da imagem.
 * @returns Url da imagem do site picsum.
 */
function getUrlImagensPicsumPhotos(id, size=80) {
    return `https://picsum.photos/id/${i}/${size}`;
}

/**
 * Lista de IDs das imagens de tamanho 80 do site picsum.photos.
 */
let idImagensPicsumPhotos = [];
for (let i = 0; i <= 1084; i++) {
  idImagensPicsumPhotos.push(i);
}

/**
 * Lista de IDs das imagens de tamanho 80 do site picsum.photos, utilizadas na parte da frente das cartas do jogo da memória.
 */
let idImagensFrenteCartas = [];
for (let i = 0; i < 16; i++) {
  // Movendo aleatoriamente todas as imagens do array 'imagensPicsumPhotos' para o array 'imagensFrenteCartas'
  idImagensFrenteCartas.push(Array_removeByIndex(idImagensPicsumPhotos, Math.trunc(getRandomArbitrary(0, idImagensPicsumPhotos.length))));
}

/**
 * Url da imagem, de tamanho 80 do site picsum.photos, utilizada na parte de traz das cartas.
 */
let fundo = "https://picsum.photos/80?grayscale";

let cartas = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

/**
 * Inicia o jogo.
 */
function iniciarJogo() {

    // Embaralhar as cartas
    Array_sufle(cartas);

}


onload = () => {

  // Carrega as imagens de fundo
  let elementosImagens = document.querySelectorAll("#memoria img");
  elementosImagens.forEach(
    (img, i) => {
      img.src = fundo;
      img.setAttribute("data-valor", i);
      img.style.opacity = 0.3;
    },
  );

  // Cria o evento do botão de início
  document.getElementById("btInicio").onclick = iniciarJogo;
};
