function trataEvento(evento) {
  console.log(`${evento.type} em ${evento.target.alt}`);
}

window.onload = () => {
    let lista = document.querySelectorAll("#imagens > img");
    lista.forEach((item, index) => {
      item.onclick = trataEvento;
      item.onmouseover = trataEvento;
      item.onmouseout = trataEvento;
      item.ondblclick = trataEvento;
      item.ondrag = trataEvento;
    });
}