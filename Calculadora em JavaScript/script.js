// Variáveis para armazenamos o valor, o operador e o estado da calculadora
let sValor = "0";
let ehNovoNumero = true;

/**
 * Atualiza o display da calculadora.
 */
function atualizarVisor() {
  document.getElementById("display").innerText = sValor;
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
    sValor = "0";
    atualizarVisor();
}

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
};
