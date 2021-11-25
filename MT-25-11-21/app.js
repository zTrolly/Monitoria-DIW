alert("teste");
function leDados () {
    let strDados = localStorage.getItem('db');
    let objDados = {};
    if (strDados) {
        objDados = JSON.parse (strDados);
    }
    else {
        objDados = { receptor: [
                        {nome: "João da Silva", telefone: "31-98795-5587", email: "email1" , tipoSanguineo: "B+"},
                        {nome: "Maria das Graças", telefone: "31-98795-5547", email: "email2" , tipoSanguineo: "A+"},
                        {nome: "Pedro Gomes", telefone: "31-98795-6577", email: "email3" , tipoSanguineo: "AB+"},
                        {nome: "Aquiles Rocha", telefone: "31-98795-6577", email: "email4" , tipoSanguineo: "B-"},
                        {nome: "Breno Lopes", telefone: "31-98795-6577", email: "email5" , tipoSanguineo: "A-"},
                        {nome: "Gabriel Alves", telefone: "31-98795-6577", email: "email6" , tipoSanguineo: "O+"}
                    ]}
    }
    return objDados;
}

function imprimeDados () {
    let tela = document.getElementById('teste');
    let strHtml = '';
    let objDados = leDados();

    for (i=0; i< objDados.receptor.length; i++) {
        strHtml += `<p>${objDados.receptor[i].nome} - ${objDados.receptor[i].telefone} - ${objDados.receptor[i].email}</p>`
    }

    tela.innerHTML = strHtml;
}

imprimeDados();

