
//pegamos o conteudo do input com id "email"
const email = document.getElementById("email");

//pegamos o conteudo do input com id "senha"
const senha = document.getElementById("senha");

//Criamos a função de logar
function logar(){
    //verificamos se o valor do campo email e senha são os mesmos do perfil criado
  if(email.value =="admin@admin.com" && senha.value=="admin123"){

    //Se o valor for o mesmo criamos no localStorag o item acesso com o valor true
    localStorage.setItem("acesso", true);

    //Álem disso redirecionamos o usuário para página principal
    window.location.href = "index.html";
  } else{

    //Se o valor não for válido informamos por meio de um alert
    alert("Usuário ou senha inválidos");
  }
}