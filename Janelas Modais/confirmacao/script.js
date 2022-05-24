function exibirJanelaModalDeConfirmacao() {
    let confirma = confirm("Confirma a operação?");
    if (confirma) {
        alert("Operação confirmada");
    }
    else {
        alert("Operação cancelada");
    }
}