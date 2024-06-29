
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
