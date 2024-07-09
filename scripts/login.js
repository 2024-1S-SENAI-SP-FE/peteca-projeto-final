



function bordaVermelha(index,text) {
  const input = document.querySelectorAll("input");
  const span = document.querySelectorAll(".invalido")
  input[index].style.border = "2px solid red";
    span[index].style.visibility = "visible";
    span[index].innerHTML=text
  // console.log("cor vermelha");
}

function bordaAzul(index) {
  const input = document.querySelectorAll("input");
  const span = document.querySelectorAll(".invalido");
  input[index].style.border = "2px solid blue"; // Alterado para azul
  span[index].style.visibility = "hidden";
  // console.log("cor azul");
}

function validaInputs() {
    const inputs = document.querySelectorAll("input");
    let validade = true
  inputs.forEach((input, index) => {
      if (input.value) {
         const inputs = document.querySelectorAll('input')
        inputs.forEach((input, index) => {
          if (input.value) {
            bordaAzul(index)
        }
        })
      } else {
        
      validade = false
    }
  });
    return validade
}







async function logIn() {
    const jsonServer = "http://localhost:3000/usuarios";

    if(validaInputs()){
      const emailUsuario = document.querySelector(".email").value;
      const senhaUsuario = document.querySelector(".senha").value;

        try {
            const response = await fetch(jsonServer);
            const data = await response.json();

            // Supondo que data seja um array de objetos com campos email e senha
            const usuarioEncontrado = data.find(
                (usuario) =>
                    usuario.email === emailUsuario && usuario.senha === senhaUsuario
            );
            console.log(usuarioEncontrado);
          if (usuarioEncontrado) {
                
                
            
            document.querySelector('.form-login').style.visibility = 'hidden'
            document.querySelector('.titulo-login').style.visibility = 'hidden'
            document.querySelector('.logado').classList.add('logou')
            setTimeout(() => {
              window.location = 'index.html'
            }, 2000)
          } else {

            const inputs = document.querySelectorAll('input')
            inputs.forEach((input, index) => {
              if (input) {
                
                bordaVermelha(
                  index,
                  "Algo deu errado. Verifique seu cadastro"
                );

            
              } else {
                console.log('teste 2');
              }
              // window.alert("Email ou senha incorretos");
            })
            usuario = usuarioEncontrado
            executou = true
          }
        
      } catch (error) {
        console.error("Erro ao acessar o servidor:", error);
        window.alert("Erro ao tentar fazer login");
      }
    }
    else {
       
        const inputs = document.querySelectorAll('input')
      inputs.forEach((input, index) => {
          if (input.value == '') {
            bordaVermelha(index, 'Por favor digite algo');
            
          } else {
            console.log('teste 2');
          }
         
    })
    }
}
document.querySelector(".btn-login").addEventListener("click", logIn);
