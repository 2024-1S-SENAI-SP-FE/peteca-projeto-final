function bordaVermelha(index) {
  const input = document.querySelectorAll("input");
  const span = document.querySelectorAll(".invalido");
  input[index].style.border = "2px solid red";
  span[index].style.visibility = "visible";
  console.log("cor vermelha");
}

function bordaAzul(index) {
  const input = document.querySelectorAll("input");
  const span = document.querySelectorAll(".invalido");
  input[index].style.border = "2px solid blue"; // Alterado para azul
  span[index].style.visibility = "hidden";
  console.log("cor azul");
}

function validaNome() {
  const nome = document.querySelector("#nome");
  if (nome.value.length >= 3) {
    bordaAzul(0); // Chamado bordaAzul quando válido
  } else {
    bordaVermelha(0);
  }
}
function validaCpf() {
    const cpf = document.querySelector('.cpf').value
    if (cpf.length === 11) {
        bordaAzul(1)
    } else {
        bordaVermelha(1)
    }
}
function validaEmail() {
    const email = document.querySelector('.email').value
    if (email.includes('@') && email.includes('.com')) {
        bordaAzul(2)
    } else {
        bordaVermelha(2)
    }
}
function validaNum() {
    const num = document.querySelector('.num').value
    if (num.length === 11) {
        bordaAzul(3)
    }
    else {
        bordaVermelha(3)
    }
}
function validaSenha() {
     const senha = document.querySelector(".senha").value;
    if (senha.length === 8) {
        bordaAzul(4);
    } else {
        bordaVermelha(4)
    }
}

function invalido() {
  const invalido = document.querySelector(".invalido");
}

function validaInputs() {
  const inputsDaPag = document.querySelectorAll("input");
  let allValid = true;

  inputsDaPag.forEach((input, index) => {
    if (input.value.trim() === "") {
      bordaVermelha(index);
      allValid = false;
    } else {
      bordaAzul(index);
    }
  });

  return allValid;
}

const apiUrl = "http://localhost:3000/usuarios";
async function cadastrar(event) {
  event.preventDefault(); // Previne o comportamento padrão de recarregar a página

    if (validaInputs()) {
        // setTimeOut para evitar de enviar antes de executar a animação
        setTimeout(async() => {
          const inputsDaPag = document.querySelectorAll("input"); // Correção: 'input' sem 's'

    inputsDaPag.forEach((input, index) => {
      if (input.value.trim() !== "") {
        bordaAzul(index);
      } else {
        bordaVermelha(index);
      }
    });

    const req = {
      user: document.querySelector("#nome").value,
      cpf: document.querySelector(".cpf").value,
      email: document.querySelector(".email").value,
      num: document.querySelector(".num").value,
      senha: document.querySelector(".senha").value,
    };

    const newUser = new Request(apiUrl, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(req),
    });

    try {
      await fetch(newUser); // Adicionado await para esperar a resposta da API
      console.log("aaaaaa");
    } catch (error) {
        console.error("Erro ao cadastrar:", error);
    }
    window.location='index.html'
        }, 3000)
      document.querySelector('.form-login').style.visibility='hidden'
      document.querySelector('h1').style.visibility='hidden'
      document.querySelector('.btn-login').style.visibility='hidden'
      document.querySelector('.btn-link').style.visibility='hidden'
      document.querySelector(".cadastrou").classList.add("cadastrou2");
    
  } 
}



document.querySelector(".btn-login").addEventListener("click", cadastrar);


