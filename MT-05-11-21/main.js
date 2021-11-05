
let btnDarkMode = document.getElementById("btn_mode_dark");
let lampadaVazia = document.getElementById("lampada-vazia");
let lampadaCheia = document.getElementById("lampada-cheia");
let teste = document.getElementById("teste");
let html = document.querySelector('html');




btnDarkMode.addEventListener('click', () => {
  html.classList.toggle('active');
  lampadaCheia.classList.toggle('disabled');
  lampadaVazia.classList.toggle('disabled');
  if(html.classList.contains('active') == false ) {
    teste.innerHTML ="Ligth Mode On";
  }else{
    teste.innerHTML = "Dark Mode On"
  }
})









