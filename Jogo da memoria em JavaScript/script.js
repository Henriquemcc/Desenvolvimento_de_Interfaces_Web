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
function getUrlImagensPicsumPhotos(id, size = 80) {
  return `https://picsum.photos/id/${id}/${size}`;
}

/**
 * Verifica se uma url é valida.
 * @param {String} url Url a ser verificada.
 * @param {String} method Método HTTP.
 * @returns Valor booleano indicando se a url é válida.
 */
function urlIsValid(url, method="GET") {
    let httpRequest = new XMLHttpRequest();
    httpRequest.open(method, url, false);
    httpRequest.send();
    return !(httpRequest.status <= 499 && httpRequest.status >= 400);
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
  let imagem = Array_removeByIndex(idImagensPicsumPhotos, Math.trunc(getRandomArbitrary(0, idImagensPicsumPhotos.length)));

  if (urlIsValid(getUrlImagensPicsumPhotos(imagem))) {
    idImagensFrenteCartas.push(imagem);
  }
}

/**
 * Url da imagem, de tamanho 80 do site picsum.photos, utilizada na parte de traz das cartas.
 */
let fundo = "https://picsum.photos/80?grayscale";

/**
 * Array que armazena a relação entre as cartas.
 */
let cartas = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];

/**
 * Variável de controle que impede que o usuário abra mais cartas.
 */
let cliquesTravados;
let temCartaVirada;
let posicaoCartaVirada;
let valorCartaVirada;
let pontos;

/**
 * (Re)Inicia as variáveis de controle do jogo.
 */
function re_iniciarVariaveis() {
    cliquesTravados = false;
    temCartaVirada = false;
    posicaoCartaVirada = -1;
    valorCartaVirada = 0;
    pontos = 0;
}
re_iniciarVariaveis();


/**
 * Processa o clique na imagem.
 */
function tratarCliqueImagem(e) {
  if (cliquesTravados) {
    return;
  }

  const posicao = +e.target.getAttribute("data-valor");
  const valor = cartas[posicao];
  e.target.src = getUrlImagensPicsumPhotos(idImagensFrenteCartas[valor - 1]);
  e.target.onclick = null;

  if (!temCartaVirada) {
    temCartaVirada = true;
    posicaoCartaVirada = posicao;
    valorCartaVirada = valor;
  } else {
    if (valor == valorCartaVirada) {
      pontos++;
    } else {
        const posicaoCartaVirada0 = posicaoCartaVirada;
      cliquesTravados = true;
      setTimeout(function () {
        e.target.src = fundo;
        e.target.onclick = tratarCliqueImagem;
        let img = document.getElementById(`i${posicaoCartaVirada0}`);
        img.src = fundo;
        img.onclick = tratarCliqueImagem;
        cliquesTravados = false;
      }, 1500);

      temCartaVirada = false;
      posicaoCartaVirada = -1;
      valorCartaVirada = 0;
    }
  }

  if (pontos == 8) {
    document.getElementById("btInicio").disabled = false;
  }
}

/**
 * Inicia o jogo.
 */
function iniciarJogo() {
  // Embaralhar as cartas
  Array_sufle(cartas);

  // Carrega as imagens de fundo
  let elementosImagens = document.querySelectorAll("#memoria img");
  elementosImagens.forEach(
    (img, i) => {
      // Fazendo as cartas aparecerem
      /// Adicionando url da imagem
      img.src = fundo;

      /// Definindo o estilo das imagens das cartas
      img.style.marginBottom = "20px";
      img.style.border = "thin solid black";
      img.style.width = "80px";
      img.style.height = "80px";
      img.style.borderRadius = "10px";

      // Adicionando atributo data-valor a imagem.
      img.setAttribute("data-valor", i);

      // Definindo a ação que quando a carta for clicada
      img.onclick = tratarCliqueImagem;
    },
  );

  // Reinicia o estado do jogo
  re_iniciarVariaveis();

  // Ajusta a interface
  document.getElementById("btInicio").disabled = true;
}

onload = () => {
  // Cria o evento do botão de início
  document.getElementById("btInicio").onclick = iniciarJogo;
};
