
let btnDarkMode = document.getElementById("btn_mode_dark");
let lampadaVazia = document.getElementById("lampada-vazia");
let lampadaCheia = document.getElementById("lampada-cheia");
let html = document.querySelector('html');

btnDarkMode.addEventListener('click', () => {
  html.classList.toggle('active');
  lampadaCheia.classList.toggle('disabled');
  lampadaVazia.classList.toggle('disabled');

})






