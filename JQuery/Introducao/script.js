$(document).ready(function() {
    $('a').click(function(evento) {
        alert("O link foi clicado");
        evento.preventDefault();
    });
});