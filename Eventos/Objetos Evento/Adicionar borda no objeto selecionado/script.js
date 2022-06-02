function trataEvento(evento) {
  let lista = document.querySelectorAll("#imagens > img");
  lista.forEach((item, index) => {
    item.style.border = "thick black solid";
  })
  evento.target.style.border = "thick blue solid";
  let selecionado = document.getElementById("selecionado");
  selecionado.innerHTML = `Imagem selecionada: ${evento.target.alt}`;
}

window.onload = () => {
    let lista = document.querySelectorAll("#imagens > img");
    lista.forEach((item, index) => {
      item.onclick = trataEvento;
    });
}