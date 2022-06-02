function trataEvento(evento) {
  console.log(`${evento.type} em ${evento.target.alt}`);
}

window.onload = () => {
    let leoa = document.getElementById("leoa");
    leoa.onclick = trataEvento;

    let cachorro = document.getElementById("cachorro");
    cachorro.onclick = trataEvento;

    let urso = document.getElementById("urso");
    urso.onclick = trataEvento;
}