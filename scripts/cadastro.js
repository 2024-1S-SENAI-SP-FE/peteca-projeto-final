function bordaVermelha(index) {
    const input = document.querySelectorAll('input')
    const span = document.querySelector('.invalido')
    input[index].style.border='1px solid red'
    span[index].style.visibility='visible'
    console.log('cor vermelha');
}
function bordaAzul() {
    const input = document.querySelectorAll("input");
    const span = document.querySelector(".invalido");
    input[index].style.border = "1px solid red";
    span[index].style.visibility='hidden'
    console.log("cor azul");
}
function validaNome() {
    const nome = document.querySelector('#nome')
    if (nome.value.lenght >= 3) {
        bordaVermelha(0)
    } else {
        
    }
}
function invalido() {
    const invalido = document.querySelector('.invalido')
}
const apiUrl = "http://localhost:3000/usuarios";
   async function cadastrar() {
    const req = {
    "user" : document.querySelector("#nome").value,
    "cpf" : document.querySelector(".cpf").value,
    "email" : document.querySelector(".email").value,
    "num" : document.querySelector(".num").value,
    "senha" : document.querySelector(".senha").value
    }
   
    const newUser = new Request(apiUrl, {
        "method": 'POST',
        "headers": {
            "Content-type": "application/json"
        },
        "body": JSON.stringify(req)
   })
   
    fetch(newUser)
       console.log('aaaaaa');

       window.location.href='index.html'
}
document.querySelector(".btn-login").addEventListener("click", cadastrar);
