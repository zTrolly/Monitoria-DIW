

//pegamos o botão do darkmode
let btnDarkMode = document.getElementById("btn_mode_dark");

//pegamos o lampada vazada
let lampadaVazia = document.getElementById("lampada-vazia");

//pegamos a lampada preenchida
let lampadaCheia = document.getElementById("lampada-cheia");

//pegamos o html
let html = document.querySelector('html');

//pegamos o titulo
let teste = document.getElementById("teste");



//adicionamos um evento de click na div do botao
btnDarkMode.addEventListener('click', () => {
  //assim que a div for clicada adicionamos a classe 'active' no html
  html.classList.toggle('active');

  // colocamos toggle tanto na lampada vazia quanto na preenchida
  lampadaCheia.classList.toggle('disabled');
  lampadaVazia.classList.toggle('disabled');

  //vertificamos se o html tem a class active, se tiver trocamos o conteúdo do titulo
  if(html.classList.contains('active') == false ) {
    teste.innerHTML ="Ligth Mode On";
  }else{
    teste.innerHTML = "Dark Mode On"
  }
})









