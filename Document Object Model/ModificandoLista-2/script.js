function exemploObterItemPorId() {
  let itemDaLista = document.getElementById("l1");
  itemDaLista.style.color = "red";
}

function exemploObterItemPorTagName() {
  let itemDaLista = document.getElementsByTagName("li");
  for(let i = 0; i < itemDaLista.length; i++) {
    itemDaLista[i].style.color = "blue";
  }
}

window.onload = () => {

  exemploObterItemPorId();
  exemploObterItemPorTagName();
  
};
