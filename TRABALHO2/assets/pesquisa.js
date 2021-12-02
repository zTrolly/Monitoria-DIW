const URL = "https://api.github.com/users/";
var input = document.getElementById("input-pesquisa").value;
const URL_PESQUISA =  URL + input;


 async function pesquisa(){
   console.log(input);
 const d = await fetch(`${URL_PESQUISA}`);
 const f = await d.json();
 console.log(f);
}