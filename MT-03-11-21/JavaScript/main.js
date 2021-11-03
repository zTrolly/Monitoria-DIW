
//Criamos a variavel "logado" com o valor de false para verificar se o usuário está ou não logado
const logado = false;

//Fazemos a verificação se o item "acesso" do localStorage tem o valor de true
if(localStorage.getItem('acesso') == "true"){

  //Se o valor for true alteramos o valor do "logado" para true
  logado = true;

};

//Ferificação final da variavel "logado"
if(logado!=true){

  //Se o "logado" não for "true" avisamos o usuário e redirecionamos ele para a página de Login
  alert("usuário não autenticado!");
  window.location.href ="login.html";
}