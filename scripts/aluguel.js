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

function criaContainerInfoCarro(valorAluguel, detalhesLink) {
  const containerInfoCarro = document.createElement("div");
  containerInfoCarro.classList.add("container-info-carro");

  const btnAlugue = document.createElement("button");
  btnAlugue.classList.add("button-alugue");
  btnAlugue.textContent = "Alugue";

  const spanValorAluguel = document.createElement("span");
  spanValorAluguel.classList.add("valor-aluguel");
  spanValorAluguel.textContent = valorAluguel;

  const a = document.createElement("a");
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


//Lógica do flip
/*
Detectar o click no link
Executar a animação no card especifico
Colocar as informações respectivas do carro 
*/