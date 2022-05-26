function adicionarElemento() {
  let lista = document.getElementById("lista");
  lista.innerHTML += "<li>Item</li>"
}

window.onload = () => {
  bt.onclick = adicionarElemento;
};
