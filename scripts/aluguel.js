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

  function criaConsumo() {
    const divConsumo = document.createElement('div')
    divConsumo.classList.add('consumo-litragem')
    const span1 = document.createElement('span')
    span1.classList.add('tipo-consumo')
    const span2 = document.createElement('span')
    span2.classList.add("tipo-consumo");
    const span3 = document.createElement('span')
    span3.classList.add('litragem')
    const span4 = document.createElement('span')
    span4.classList.add('litragem')
    divConsumo.append(span1, span2, span3, span4)
   

    return divConsumo
}
  function criaLadoALado1() {
    const ladoALado1 = document.createElement('div')
    ladoALado1.classList.add('lado-a-lado')
    const img1 = document.createElement('img')
    img1.classList.add("img-boneco");
    img1.src = "icones/bonecos 2.svg";
    const span1 = document.createElement('span')
    span1.classList.add('pessoas')
    span1.innerHTML='4 pessoas'
    ladoALado1.append(img1, span1);
    containerDetalhes.append(ladoALado1);
    return containerDetalhes;
}
  function criaLadoALado2() {
    const ladoALado2 = document.createElement('div')
    ladoALado2.classList.add("lado-a-lado");
    const img2 = document.createElement('img')
    img2.classList.add("img-boneco");
    img2.src = "icones/bonecos 2.svg";
    const span2 = document.createElement('span')
    span2.classList.add('pessoas')
    span2.innerHTML='4 pessoas'
    ladoALado2.append(img2, span2);
    containerDetalhes.append(ladoALado2);
    return containerDetalhes;
}
  function criaLadoALado3() {
    const ladoALado3 = document.createElement('div')
    ladoALado3.classList.add("lado-a-lado");
    const img3 = document.createElement('img')
    img3.classList.add("img-boneco");
    img3.src = "icones/bonecos 2.svg";
    const span3 = document.createElement('span')
    span3.classList.add('pessoas')
    span3.innerHTML='4 pessoas'
    ladoALado3.append(img3, span3);
    containerDetalhes.appendChild(ladoALado3);
    return containerDetalhes;
}
  function criaLadoALado4() {
    const ladoALado4 = document.createElement('div')
    ladoALado4.classList.add("lado-a-lado");
    const img4 = document.createElement('img')
    img4.classList.add("img-boneco");
    img4.src = "icones/bonecos 2.svg";
    const span4 = document.createElement('span')
    span4.classList.add('pessoas')
    span4.innerHTML='4 pessoas'
    ladoALado4.append(img4, span4);
    containerDetalhes.append(ladoALado4);
    return containerDetalhes;
}
  function criaLadoALado5() {
    const ladoALado5 = document.createElement('div')
    ladoALado5.classList.add("lado-a-lado");
    const img5 = document.createElement('img')
    img5.classList.add("img-boneco");
    img5.src = "icones/bonecos 2.svg";
    const span5 = document.createElement('span')
    span5.classList.add('pessoas')
    span5.innerHTML='4 pessoas'
    ladoALado5.append(img5, span5);
    containerDetalhes.append(ladoALado5)
    return containerDetalhes
}

   

const retorno1 = criaLadoALado1()
const retorno2 = criaLadoALado2()
const retorno3 = criaLadoALado3()
const retorno4 = criaLadoALado4()
const retorno5 = criaLadoALado5()
const retornoConsumo = criaConsumo();
console.log(containerCarro)
  containerCarro.appendChild(retorno1,retorno2,retorno3,retorno4,retorno5,retornoConsumo )
  return containerCarro;
}
criaElementosDetalhes()

const voltarDetalhes = document.querySelectorAll('.voltar-detalhes')
voltarDetalhes.forEach((ancora) => {
  ancora.addEventListener("click", () => {
    const nomeCarro = document.querySelectorAll(".nome-carro");
    const paiAncora = ancora.parentElement;
    const avoAncora = paiAncora.parentElement;
    if (avoAncora.querySelector(".nome-carro")) {
      const nomeCarro = avoAncora.querySelector(".nome-carro");
      let naoTem;
      if (nomeCarro) {
        criaElementosDetalhes();
      } else {
        console.log("não tem");
      }
    }
  });
});

// Lógica botão registrar -----------------------------------------------------------

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

