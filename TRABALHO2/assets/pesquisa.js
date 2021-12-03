 async function pesquisa(){
  const URL = "https://api.github.com/users/";
  var input = document.getElementById("input-pesquisa").value;
  const URL_PESQUISA =  URL + input;
  const display = document.getElementById("display-pesquisa");
  let txt = "";
 const d = await fetch(`${URL_PESQUISA}`);
 const f = await d.json();
 txt += `
 <div class="perfil_img col-md-6 col-lg-6 col-sm-12">
 <img src="${f.avatar_url}" alt="">
 </div>
 <div class="perfil_txt col-md-6 col-lg-6 col-sm-12">
   <h1 class="nome">${f.login}<strong>.</strong></h1>
   <ul>
     <li><p><strong>Ativo no GitHub desde:</strong>  ${f.created_at}</p></li>
     <li><p><strong>Número de repositorios:</strong>  ${f.public_repos}</p></li>
     <li><p><strong>Seguidores:</strong>  ${f.followers}</p></li>
   </ul>
 <div class="perfil_social">
   <h4>Redes Sociais</h4>
   <ul class="redes_sociais">
     <li><a href=""><i class="fab fa-facebook"></i></a></li>
     <li><a href=""><i class="fab fa-twitter"></i></a></li>
     <li><a href=""><i class="fab fa-instagram "></i></a></li>
   </ul>
 </div>
</div>
 `

 display.innerHTML = txt;

}