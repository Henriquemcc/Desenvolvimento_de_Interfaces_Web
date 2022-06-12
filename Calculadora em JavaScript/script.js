function digito (n){
    alert(n);
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
}