// Variáveis para armazenamos o valor, o operador e o estado da calculadora

/**
 * Valor que será apresentado no display.
 */
let sValor = "0";

/**
 * Indica se o próximo digito será de um novo número.
 */
let ehNovoNumero = true;

/**
 * Valor acumulado para uma operação.
 */
let valorAnterior = 0;

/**
 * Operação acumulada.
 */
let operacaoPendente = null;

// Funções

/**
 * Atualiza o display da calculadora.
 */
function atualizarVisor() {
  let [parteInteira, parteDecimal] = sValor.split(",");
  let stringDisplay = "";
  let contador = 0;
  for (let i = parteInteira.length - 1; i >= 0; i--) {
    if (++contador > 3) {
      stringDisplay = "." + stringDisplay;
      contador = 1;
    }
    stringDisplay = parteInteira[i] + stringDisplay;
  }
  stringDisplay = stringDisplay + (parteDecimal ? ("," + parteDecimal) : "");
  document.getElementById("display").innerText = stringDisplay;
}

/**
 * Função executada quando o um botão de um número é clicado.
 * @param {*} n Número pressionado.
 */
function digito(n) {
  if (ehNovoNumero) {
    sValor = "" + n;
    ehNovoNumero = false;
  } else {
    sValor += n;
  }
  atualizarVisor();
}

/**
 * Função executada quando o botão de vírgula é clicado.
 */
function virgula() {
  // Verificando se já não há virgula
  if (!sValor.includes(",")) {
    if (ehNovoNumero) {
      sValor = "0,";
      ehNovoNumero = false;
    } else {
      sValor += ",";
    }

    atualizarVisor();
  }
}

/**
 * Função executada quando o botão AC é clicado
 */
function limpar() {
  ehNovoNumero = true;
  valorAnterior = 0;
  sValor = "0";
  operacaoPendente = null;
  atualizarVisor();
}

/**
 * Realiza o cálculo de uma operação matemática.
 */
function calcular() {
  if (operacaoPendente != null) {
    let resultado;
    switch (operacaoPendente) {
      case "+":
        resultado = valorAnterior + convertStringToFloat(sValor);
        break;
      case "-":
        resultado = valorAnterior - convertStringToFloat(sValor);
        break;
      case "*":
        resultado = valorAnterior * convertStringToFloat(sValor);
        break;
      case "/":
        resultado = valorAnterior / convertStringToFloat(sValor);
        break;
    }
    sValor = convertFloatToString(resultado);
  }
  ehNovoNumero = true;
  operacaoPendente = null;
  valorAnterior = 0;
  atualizarVisor();
}

/**
 * Converte uma string numérica (com vírgula, como separador de casa decimal) em um número.
 * @param {String} str String numérica.
 * @returns Número obtido como resultado da conversão.
 */
function convertStringToFloat(str) {
  if (typeof str != "string") {
    throw TypeError("str must be string");
  }

  return parseFloat(str.replace(",", "."));
}

/**
 * Converte um número em uma string numérica.
 * @param {Number} flo Número.
 * @returns String numérica como resultado da conversão.
 */
function convertFloatToString(flo) {
  if (typeof flo != "number") {
    throw TypeError("flo must be a number");
  }

  return flo.toString().replace(".", ",");
}

/**
 * Função executada quando os botões de operadores.
 * @param {String} op Operação a ser realizada.
 */
function operador(op) {
  calcular();
  valorAnterior = convertStringToFloat(sValor);

  // Acumula nova operação
  operacaoPendente = op;

  ehNovoNumero = true;
}

// Adicionando evento para cada botão da calculadora
onload = () => {
  // Adicionando ação aos botões de números
  document.getElementById("bt-7").onclick = () => digito(7);
  document.getElementById("bt-8").onclick = () => digito(8);
  document.getElementById("bt-9").onclick = () => digito(9);
  document.getElementById("bt-4").onclick = () => digito(4);
  document.getElementById("bt-5").onclick = () => digito(5);
  document.getElementById("bt-6").onclick = () => digito(6);
  document.getElementById("bt-1").onclick = () => digito(1);
  document.getElementById("bt-2").onclick = () => digito(2);
  document.getElementById("bt-3").onclick = () => digito(3);
  document.getElementById("bt-0").onclick = () => digito(0);

  // Adicionando ação aos outros botões
  document.getElementById("bt-comma").onclick = virgula;
  document.getElementById("bt-ac").onclick = limpar;
  document.getElementById("bt-plus").onclick = () => operador("+");
  document.getElementById("bt-minus").onclick = () => operador("-");
  document.getElementById("bt-times").onclick = () => operador("*");
  document.getElementById("bt-divide").onclick = () => operador("/");
  document.getElementById("bt-equals").onclick = calcular;
};
