function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};
    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { receptor: [
                        {nome: "João da Silva", telefone: "31-98795-5587", email: "email1"},
                        {nome: "Maria das Graças", telefone: "31-98795-5547", email: "email2"},
                        {nome: "Pedro Gomes", telefone: "31-98795-6577", email: "email3"}
                    ]}
    }
    return objDados;
}


function salvaDados (dados) {
    localStorage.setItem ('db', JSON.stringify (dados));
}

function incluirContato (){
    // Ler os dados do localStorage
    let objDados = leDados();

    // Incluir um novo contato
    let strNome = document.getElementById('campoNome').value;
    let strTelefone = document.getElementById('campoTelefone').value;
    let strEmail = document.getElementById('campoEmail').value;
    let novoContato = {
        nome: strNome,
        telefone: strTelefone,
        email: strEmail,
    };
    objDados.contatos.push (novoContato);

    // Salvar os dados no localStorage novamente
    salvaDados (objDados);

    // Atualiza os dados da tela
    imprimeDados ();
}

function imprimeDados () {
    let tela = document.getElementById('tela');
    let strHtml = '';
    let objDados = leDados ();

    for (i=0; i< objDados.contatos.length; i++) {
        strHtml += `<p>${objDados.contatos[i].nome} - ${objDados.contatos[i].telefone} - ${objDados.contatos[i].email}</p>`
    }

    tela.innerHTML = strHtml;
}

// Configura os botões
document.getElementById ('btnCarregaDados').addEventListener ('click', imprimeDados);
document.getElementById ('btnIncluirContato').addEventListener ('click', incluirContato);


function getSelectValue(){
    let selectValue = document.getElementById('select').value;
    console.log(selectValue);
}


