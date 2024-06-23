const dadosCarros = [
  {
    nome: "F-150 Shelby",
    ano: "2023",
    imgSrc: "imagens/image-F150 shelby 1.png",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesA",
  },
  {
    nome: "Mustang Mach 1",
    ano: "2023",
    imgSrc: "imagens/mustang.jpg",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  {
    nome: "Ford Territory Titanium",
    ano: "2023",
    imgSrc: "imagens/ford-territory-titanium-new.webp",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  {
    nome: "Ranger Raptor",
    ano: "2023",
    imgSrc: "imagens/ford-next-gen-ranger-raptor-lightning-blue-240522.png",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  {
    nome: "Mustang GT",
    ano: "2023",
    imgSrc: "imagens/mustang-gt-new.png",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  {
    nome: "Ford Super Duty F-450 DRW",
    ano: "2023",
    imgSrc: "imagens/f450 1.png",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  {
    nome: "Ranger XLS",
    ano: "2023",
    imgSrc: "imagens/rangerXLS-removebg-preview 1.png",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  {
    nome: "Ford GT",
    ano: "2023",
    imgSrc: "imagens/LiquidCarbonFordGT_01-1-1024x683-removebg-preview 2.png",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  {
    nome: "Mustang Mach-E",
    ano: "2023",
    imgSrc:
      "imagens/2024-ford-mustang-mach-e-rally-1-64f87f1882d10-removebg-preview 1.png",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  {
    nome: "Ford Explores St",
    ano: "2023",
    imgSrc: "imagens/image-Ford Explorer.png",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  {
    nome: "Shelby GT500",
    ano: "2023",
    imgSrc: "imagens/ford-shelbygt500.jpg",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  {
    nome: "Maverick",
    ano: "2023",
    imgSrc: "imagens/ford-maverick-1160x725-removebg-preview 1.png",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  {
    nome: "Ford Ranger 3.2",
    ano: "2023",
    imgSrc: "imagens/image-Ford-Ranger3.2.png",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
 
  {
    nome: "Ranger P703",
    ano: "2023",
    imgSrc: "imagens/image-Ranger-p703.png",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  {
    nome: "Bronco Sport",
    ano: "2023",
    imgSrc: "imagens/image-Ford-Bronco.png",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },

];

function criaContainerImg(imgSrc) {
  const containerImg = document.createElement("div");
  containerImg.classList.add("container-img");

  const img = document.createElement("img");
  img.classList.add("img-carros");
  img.src = imgSrc; 
  containerImg.append(img);

  return containerImg;
}

function criaContainerNomeAno(nome, ano) {
  const containerNomeAno = document.createElement("div");
  containerNomeAno.classList.add("container-nome-ano");

  const spanNome = document.createElement("span");
  spanNome.classList.add("nome-carro");
  spanNome.textContent = nome; 

  const spanAno = document.createElement("span");
  spanAno.classList.add("ano-carro");
  spanAno.textContent = ano; 

  containerNomeAno.append(spanNome, spanAno);
  return containerNomeAno;
}

let a 
function criaContainerInfoCarro(valorAluguel, detalhesLink) {
  const containerInfoCarro = document.createElement("div");
  containerInfoCarro.classList.add("container-info-carro");

  const btnAlugue = document.createElement("button");
  btnAlugue.classList.add("button-alugue");
  btnAlugue.textContent = "Alugue";
  
  const spanValorAluguel = document.createElement("span");
  spanValorAluguel.classList.add("valor-aluguel");
  spanValorAluguel.textContent = valorAluguel;
  
  let a = document.createElement("a");
  a.href = detalhesLink;
  a.classList.add("detalhes");
  a.textContent = "Detalhes";

  containerInfoCarro.append(btnAlugue, spanValorAluguel, a);
  return containerInfoCarro;
}

function criaContainerCarro(dados) {
  const containerCarro = document.createElement("div");
  containerCarro.classList.add("container-carro");

  const containerImg = criaContainerImg(dados.imgSrc);
  const containerNomeAno = criaContainerNomeAno(dados.nome, dados.ano);
  const containerInfoCarro = criaContainerInfoCarro(
    dados.valorAluguel,
    dados.detalhesLink
  );

  containerCarro.append(containerImg, containerNomeAno, containerInfoCarro);
  return containerCarro;
}

const carrosAluguel = document.querySelector(".carros-aluguel");


dadosCarros.forEach((dados) => {
  const containerCarro = criaContainerCarro(dados);
  carrosAluguel.appendChild(containerCarro);
});

console.log("Carros adicionados:", dadosCarros.length);









// Logica da execução da animação de flip-------------------------------------------------------------------

let ancorasFlip = document.querySelectorAll('.detalhes')

ancorasFlip.forEach((ancora) => {
  ancora.addEventListener("click", () => {
    const paiAncora = ancora.parentElement;
    const avoAncora = paiAncora.parentElement;

    if (avoAncora.classList.contains("flip-card")) {
      avoAncora.classList.remove("flip-card");
      avoAncora.classList.add('flip-card-normal')
      ancora.innerHTML = "detalhes";
    } else if (avoAncora.classList.contains('flip-card-normal')) {
      avoAncora.classList.remove("flip-card-normal");
      avoAncora.classList.add('flip-card')
      ancora.innerHTML = "voltar";

    } else {
      avoAncora.classList.add('flip-card')
      ancora.innerHTML = "voltar";
    }
    
  });
});


function criaElementosDetalhes(teste) {
  const containerCarro = document.createElement('div')
  containerCarro.classList.add('container-carro')
  const containerDetalhes = document.createElement('div')
  containerDetalhes.classList.add('container-detalhes')
  const ladoALado1 = document.createElement('div')
  const ladoALado2 = document.createElement('div')
  const ladoALado3 = document.createElement('div')
  const ladoALado4 = document.createElement('div')
  const ladoALado5 = document.createElement('div')
  ladoALado1,ladoALado2,ladoALado3,ladoALado4,ladoALado5.classList.add('lado-a-lado')
  const img = document.createElement('img')
  const span = document.createElement('span')
  ladoALado1.append(
    img.classList.add("img-boneco"),
    (img.src = "icones/bonecos 2.svg"),
    span.innerHTML = '4 pessoas',
    span.classList.add('pessoas')
  );
  containerDetalhes.append(ladoALado1,ladoALado2,ladoALado3,ladoALado4,ladoALado5)
  console.log(ladoALado1)
}
criaElementosDetalhes()
const teste = ancorasFlip.forEach(ancora => {
  const nomeCarro = document.querySelectorAll('.nome-carro')
  const paiAncora = ancora.parentElement;
  const avoAncora = paiAncora.parentElement;
  // if (avoAncora.querySelector('.nome-carro')) {
  //   const nomeCarro = avoAncora.querySelector('.nome-carro')
  //   let naoTem
  //   if (detalhesCarro.includes(nomeCarro)) {
  //     criaElementosDetalhes()
  //   } else {
  //     naoTem = 'Carro não encontrado'
  //   }
  // }
})

// ógica botão registrar -----------------------------------------------------------



const btnRegistrar = document.querySelector(".btn-registrar");
btnRegistrar.addEventListener("click", () => {
  let inputLocal = document.querySelector(".local-retirada").value,
    dataRetirada = document.querySelector(".data-retirada").value,
    horaRetirada = document.querySelector(".hora-retirada").value,
    dataEntrega = document.querySelector(".data-entrega").value,
    horaEntrega = document.querySelector(".hora-entrega").value;
  let erro;
  if(!inputLocal) erro = 'O local não está definido, por favor defina'
  if(!dataRetirada) erro = "Faltam alguns campos para definir:)";
  if(!horaRetirada) erro = "Faltam alguns campos para definir:)";
  if(!dataEntrega) erro = "Faltam alguns campos para definir:)";
  if (!horaEntrega) erro = "Faltam alguns campos para preencher";

  if (!inputLocal&&!dataEntrega&&!dataRetirada&&!horaEntrega&&!horaRetirada) {
    window.alert('Nenhum campo preenchido, por favor, digite as informações necessarias')
  }
   else if (erro) {
   window.alert(erro)
  } else {
    const divRegistrar = document.querySelector(".div-registrar");

    btnRegistrar.classList.add("ocultar");
    divRegistrar.classList.add("registrando");

    setTimeout(() => {
      divRegistrar.classList.remove("registrando");
      divRegistrar.classList.add("registrou");
      divRegistrar.innerHTML = "Registrado✅";
    }, 3000);

    setTimeout(() => {
      btnRegistrar.classList.remove("ocultar");
      divRegistrar.classList.remove("registrando");
      divRegistrar.classList.remove("registrou");
      divRegistrar.innerHTML = "Agora escolha o carro desejado";
      divRegistrar.style.height = "auto";
    }, 8000);
  }
});

