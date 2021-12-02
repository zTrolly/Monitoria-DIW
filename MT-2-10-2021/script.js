const API_KEY='***** chave api newapi.org';

function exibeNoticias (){
    let divTela = document.getElementById('pesquisa');
    let texto = '';

    let dados = JSON.parse(this.responseText);


    for(i=0; i<dados.articles.length; i++){
        let noticia = dados.articles[i];
        let data = new Date (noticia.publishedAt);
        texto = texto + `<div class="box-noticia">
        <img src="${noticia.urlToImage}" alt="" width="100px" height="100px">
        <br><br><br><br>
        <span class="titulo">${noticia.title}</span><br>
        <span class="creditos">${data.toLocaleDateString} - 
            ${noticia.source.name} - 
            ${noticia.author}</span><br>
        <span class="texto">
             ${noticia.content} <a href="${noticia.url}">leia mais.....</a>
        </span>
    </div>  
        `;
    };
    divTela.innerHTML = texto;

}

function executaPesquisa(){
    let query = document.getElementById('txtPesquisa').value;

    let xhr = new XMLHttpRequest();
    xhr.onload = exibeNoticias;
    xhr.open('GET', `https://newsapi.org/v2/everything?q=${query}&apiKey=${API_KEY}`);
    xhr.send();
}

document.getElementById('btnPesquisa').addEventListener('click',executaPesquisa);