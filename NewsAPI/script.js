const API_KEY = '';

function exibirNoticias() {
    let divTela = document.getElementById('tela');
    let texto = '';

    // Montar texto HTML das noticias
    let dados = JSON.parse(this.responseText);
    for (let i = 0; i < dados.articles.length; i++) {
        let noticia = dados.articles[i];
        let data = new Date(noticia.publishedAt);

        texto += `
        <div class="box-noticia">
        <img src="${noticia.urlToImage}" crossorigin="anonymous">
        <span class="titulo">${noticia.title}</span><br>
        <span class="creditos">${data.toLocaleDateString()} - ${noticia.source.name} - ${noticia.author}</span><br>
        <span class="text">
            ${noticia.content}<br>
            <a href="${noticia.url}">Leia mais ...</a>
        </span>
    </div>`
    }

    // Preencher a DIV com o texto HTML
    divTela.innerHTML = texto;
}

function executarPesquisa() {
    
    // Obtendo texto digitado pelo usuário
    let query = document.getElementById('txtPesquisa').value;

    // Executando requisição web
    let xmlhttpRequestObject = new XMLHttpRequest();
    xmlhttpRequestObject.onload = exibirNoticias;
    xmlhttpRequestObject.open('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xmlhttpRequestObject.send();

}

window.onload = () => {
    document.getElementById('btnPesquisa').addEventListener('click', executarPesquisa);
}