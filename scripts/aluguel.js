let dadosValidados = false;

const dadosCarros = [
  {
    id: "carro1",
    nome: "F-150 Shelby",
    ano: "2023",
    imgSrc: "imagens/image-F150 shelby 1.png",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesA",
  },
  {
    id: "carro2",
    nome: "Mustang Mach 1",
    ano: "2023",
    imgSrc: "../imagens/mustang.webp",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  {
    id: "carro3",
    nome: "Ford Territory Titanium",
    ano: "2023",
    imgSrc: "imagens/ford-territory-titanium-new.webp",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  {
    id: "carro4",
    nome: "Ranger Raptor",
    ano: "2023",
    imgSrc: "imagens/ford-next-gen-ranger-raptor-lightning-blue-240522.png",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  {
    id: "carro11",
    nome: "Mustang GT",
    ano: "2023",
    imgSrc: "imagens/mustang-gt-new.png",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  {
    id: "carro6",
    nome: "Ford Super Duty F-450 DRW",
    ano: "2023",
    imgSrc: "imagens/Duty.webp",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  {
    id: "carro7",
    nome: "Ranger XLS",
    ano: "2023",
    imgSrc: "imagens/rangerXLS-removebg-preview 1.png",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  // {
  //   nome: "Ford GT",
  //   ano: "2023",
  //   imgSrc: "imagens/LiquidCarbonFordGT_01-1-1024x683-removebg-preview 2.png",
  //   valorAluguel: "$450/month",
  //   detalhesLink: "#detalhesB",
  // },
  {
    id: "carro9",
    nome: "Mustang Mach-E",
    ano: "2023",
    imgSrc:
      "imagens/2024-ford-mustang-mach-e-rally-1-64f87f1882d10-removebg-preview 1.png",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  {
    id: "carro10",
    nome: "Ford Explores St",
    ano: "2023",
    imgSrc: "imagens/ExploresSt.webp",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  {
    id: "carro5",
    nome: "Shelby GT500",
    ano: "2023",
    imgSrc: "imagens/ShelbyGT500.webp",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  {
    id: "carro12",
    nome: "Maverick",
    ano: "2023",
    imgSrc: "imagens/ford-maverick-1160x725-removebg-preview 1.png",
    valorAluguel: "$450/month",
    detalhesLink: "#detalhesB",
  },
  {
    id: "carro13",
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

let a;
function criaContainerInfoCarro(valorAluguel, detalhesLink) {
  const containerInfoCarro = document.createElement("div");
  containerInfoCarro.classList.add("container-info-carro");

  // const btnAlugue = document.createElement("button");
  // btnAlugue.classList.add("button-alugue");
  // btnAlugue.textContent = "Alugue";
  // btnAlugue.addEventListener('click', function() {
  //   modeloEscolhido('carro1');
  // });

  const spanValorAluguel = document.createElement("span");
  spanValorAluguel.classList.add("valor-aluguel");
  spanValorAluguel.textContent = valorAluguel;

  let a = document.createElement("a");
  a.href = detalhesLink;
  a.classList.add("detalhes");
  a.textContent = "Detalhes";

  containerInfoCarro.append(spanValorAluguel, a);
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

  const btnAlugue = document.createElement("button");
  btnAlugue.classList.add("button-alugue");
  btnAlugue.textContent = "Alugue";
  btnAlugue.addEventListener('click', function () {
    if (dadosValidados) {
      modeloEscolhido(dados.id);
    } else {
      alert('Por favor, registre os dados antes!')
      window.scrollBy({
        top: -10000,
        behavior: 'smooth'
      });
    }
  });

  containerCarro.append(btnAlugue, containerImg, containerNomeAno, containerInfoCarro);
  return containerCarro;
}

const carrosAluguel = document.querySelector(".carros-aluguel");

dadosCarros.forEach((dados) => {
  const containerCarro = criaContainerCarro(dados);
  carrosAluguel.appendChild(containerCarro);
});

console.log("Carros adicionados:", dadosCarros.length);

// Logica da execução da animação de flip-------------------------------------------------------------------
const arrayDetalhes = [
  {
    nome: "F-150 Shelby",
    pessoas: 5,
    tipoC: "flex",
    tipoD: "Automático",
    portas: "4 portas",
    freio: "ABS",
    cidade: "6,3 km/L",
    estrada: "8,6 km/L",
  },
  {
    nome: "Mustang Mach 1",
    pessoas: 4,
    tipoC: "gasosa",
    tipoD: "Automático",
    portas: "2 portas",
    freio: "ABS",
    cidade: "6,1 km/L",
    estrada: "8,8 km/L",
  },
  {
    nome: "Ford Territory Titanium",
    pessoas: 5,
    tipoC: "gasosa",
    tipoD: "Automático",
    portas: "4 portas",
    freio: "ABS",
    cidade: "9,4 km/L",
    estrada: "9,8 km/L",
  },
  {
    nome: "Ranger Raptor",
    pessoas: 5,
    tipoC: "gasosa",
    tipoD: "Automático",
    portas: "4 portas",
    freio: "ABS",
    cidade: "8,3 km/L",
    estrada: "10,2 km/L",
  },
  {
    nome: "Mustang GT",
    pessoas: 4,
    tipoC: "gasosa",
    tipoD: "Automático",
    portas: "4 portas",
    freio: "ABS",
    cidade: "6,1 km/L",
    estrada: "8,8 km/L",
  },
  {
    nome: " Ford Super Duty F-450 DRW",
    pessoas: 5,
    tipoC: "gasosa",
    tipoD: "Automático",
    portas: "4 portas",
    freio: "ABS",
    cidade: "3,1 km/L",
    estrada: "6,8 km/L",
  },
  {
    nome: "Ranger XLS",
    pessoas: 5,
    tipoC: "disel",
    tipoD: "Automático",
    portas: "4 portas",
    freio: "ABS",
    cidade: "7,4 km/L",
    estrada: "11,6 km/L",
  },
  {
    nome: "Ford GT",
    pessoas: 5,
    tipoC: "gasosa",
    tipoD: "Automático",
    portas: "4 portas",
    freio: "ABS",
    cidade: "5,9 km/L",
    estrada: "8,9 km/L",
  },
  {
    nome: "Mustang mach-E",
    pessoas: 5,
    tipoC: "eletrico",
    tipoD: "Automático",
    portas: "4 portas",
    freio: "ABS",
    cidade: "5,2 km/L",
    estrada: "4,7 km/L",
  },
  {
    nome: "Ford Explorer St",
    pessoas: 5,
    tipoC: "gasosa",
    tipoD: "Automático",
    portas: "4 portas",
    freio: "ABS",
    cidade: "4,5 km/L",
    estrada: "4,5 km/L",
  },
  {
    nome: "Shelby GT500",
    pessoas: 5,
    tipoC: "gasosa",
    tipoD: "Automático",
    portas: "4 portas",
    freio: "ABS",
    cidade: "6,4 km/L",
    estrada: "10,2 km/L",
  },
  {
    nome: "Maverick",
    pessoas: 5,
    tipoC: "flex",
    tipoD: "Automático",
    portas: "4 portas",
    freio: "ABS",
    cidade: "8,9 km/L",
    estrada: "13,6 km/L",
  },
  {
    nome: "Ford Ranger 3.2",
    pessoas: 5,
    tipoC: "gasosa",
    tipoD: "Automático",
    portas: "4 portas",
    freio: "ABS",
    cidade: "4,5 km/L",
    estrada: "4,5 km/L",
  },
  {
    nome: "Ranger P703",
    pessoas: 5,
    tipoC: "diesel",
    tipoD: "Automático",
    portas: "4 portas",
    freio: "ABS",
    cidade: "8,9 km/L",
    estrada: "10,2 km/L",
  },
  {
    nome: "Bronco Sport",
    pessoas: 5,
    tipoC: "gasosa",
    tipoD: "Automático",
    portas: "4 portas",
    freio: "ABS",
    cidade: "8,6 km/L",
    estrada: "10,5 km/L",
  },
];

let flip2;

let ancorasFlip = document.querySelectorAll(".detalhes");
ancorasFlip.forEach((ancora) => {
  const newContainer = criaElementosDetalhes();
  ancora.addEventListener("click", () => {
    const paiAncora = ancora.parentElement;
    const avoAncora = paiAncora.parentElement;
    // const avoAncora2 = paiAncora.parentElement;
    avoAncora.parentNode.replaceChild(newContainer, avoAncora);

    flip2 = document.querySelectorAll(".detalhes2");
    // const containerPadrao = document.querySelector(".container-carro");
    flip2.forEach((ancora2) => {
      ancora2.addEventListener("click", () => {
        novoPaiA = ancora2.parentElement;

        novoAvoA = novoPaiA.parentElement;

        avoAncora.classList.add('flip-card-normal')
        novoAvoA.parentNode.replaceChild(avoAncora, newContainer);


      });
    });
  });
});

function criaElementosDetalhes() {
  const containerCarro = document.createElement("div");
  containerCarro.classList.add("container-carro");
  containerCarro.classList.add("flip-card-normal");
  const containerDetalhes = document.createElement("div");
  containerDetalhes.classList.add("container-detalhes");

  function criaLadoALado1() {
    const ladoALado1 = document.createElement("div");
    ladoALado1.classList.add("lado-a-lado");
    const img1 = document.createElement("img");
    img1.classList.add("img-boneco");
    img1.src = "icones/bonecos 2.svg";
    const span1 = document.createElement("span");
    span1.classList.add("pessoas");
    span1.innerHTML = "4 pessoas";
    ladoALado1.append(img1, span1);
    containerDetalhes.append(ladoALado1);
    return containerDetalhes;
  }
  function criaLadoALado2() {
    const ladoALado2 = document.createElement("div");
    ladoALado2.classList.add("lado-a-lado");
    const img2 = document.createElement("img");
    img2.classList.add("img-gasosa");
    img2.src = "icones/gasosa 5.svg";
    const span2 = document.createElement("span");
    span2.classList.add("gasolina");
    span2.innerHTML = "flex";
    ladoALado2.append(img2, span2);
    containerDetalhes.append(ladoALado2);
    return containerDetalhes;
  }
  function criaLadoALado3() {
    const ladoALado3 = document.createElement("div");
    ladoALado3.classList.add("lado-a-lado");
    const img3 = document.createElement("img");
    img3.classList.add("img-volante");
    img3.src = "icones/volante 5.svg";
    const span3 = document.createElement("span");
    span3.classList.add("automatico");
    span3.innerHTML = "automatico";
    ladoALado3.append(img3, span3);
    containerDetalhes.appendChild(ladoALado3);
    return containerDetalhes;
  }
  function criaLadoALado4() {
    const ladoALado4 = document.createElement("div");
    ladoALado4.classList.add("lado-a-lado");
    const img4 = document.createElement("img");
    img4.classList.add("img-portas");
    img4.src = "icones/Car Door.svg";
    const span4 = document.createElement("span");
    span4.classList.add("portas");
    span4.innerHTML = "4 portas";
    ladoALado4.append(img4, span4);
    containerDetalhes.append(ladoALado4);
    return containerDetalhes;
  }
  function criaLadoALado5() {
    const ladoALado5 = document.createElement("div");
    ladoALado5.classList.add("lado-a-lado");
    const img5 = document.createElement("img");
    img5.classList.add("img-abs");
    img5.src = "icones/abs.svg";
    const span5 = document.createElement("span");
    span5.classList.add("abs");
    span5.innerHTML = "abs";
    ladoALado5.append(img5, span5);
    containerDetalhes.append(ladoALado5);
    return containerDetalhes;
  }
  function criaConsumo() {
    const divConsumo = document.createElement("div");
    divConsumo.classList.add("consumo-litragem");
    const span1 = document.createElement("span");
    span1.classList.add("tipo-consumo");
    span1.classList.add("testespan");
    const span2 = document.createElement("span");
    span2.classList.add("tipo-consumo");
    span2.classList.add("spanMargin");
    const span3 = document.createElement("span");
    span3.classList.add("litragem");
    span3.classList.add("testespan");
    const span4 = document.createElement("span");
    span4.classList.add("litragem");
    span4.classList.add("spanMargin");
    span1.innerHTML = "Cidade";
    span2.innerHTML = "10km/L";
    span3.innerHTML = "Estrada";
    span4.innerHTML = "10km/L";
    divConsumo.append(span1, span2, span3, span4);

    return divConsumo;
  }
  function criaA() {
    const a = document.createElement("a");
    const paiA = document.createElement("div");
    a.classList.add("detalhes2");
    a.innerHTML = "Voltar";
    paiA.appendChild(a);
    // a.href=''
    return paiA;
  }

  const retorno1 = criaLadoALado1();
  const retorno2 = criaLadoALado2();
  const retorno3 = criaLadoALado3();
  const retorno4 = criaLadoALado4();
  const retorno5 = criaLadoALado5();
  const retornoConsumo = criaConsumo();
  const retornoA = criaA();
  // console.log(containerCarro);
  containerCarro.append(
    retorno1,
    retorno2,
    retorno3,
    retorno4,
    retorno5,
    retornoConsumo,
    retornoA
  );
  let ancorasFlip = document.querySelectorAll(".detalhes");
  return containerCarro;
}

// Lógica botão registrar -----------------------------------------------------------

const pesquisarCep = async () => {
  const cep = document.querySelector('#cep').value;
  const url = `http://viacep.com.br/ws/${cep}/json/`;
  try {
    const dados = await fetch(url);
    if (!dados.ok) {
      throw new Error('Erro ao buscar CEP');
    }
    const endereco = await dados.json();
    if (endereco.erro) {
      throw new Error('CEP não encontrado');
    }
    localStorage.setItem('endereco', JSON.stringify(endereco));
    return true;
  } catch (error) {
    console.error(error.message);
    return false;
  }
}

const btnRegistrar = document.querySelector(".btn-registrar");
btnRegistrar.addEventListener("click", () => {
  registrarDados()
});

async function registrarDados() {
  const cepValido = await pesquisarCep();
  if (cepValido) {
    let inputLocal = document.querySelector(".local-retirada").value,
      dataRetirada = document.querySelector(".data-retirada").value,
      dataEntrega = document.querySelector(".data-entrega").value;
    let erro;
    if (!inputLocal) erro = "O local não está definido, por favor defina";
    if (!dataRetirada) erro = "Faltam alguns campos para definir:)";
    if (!dataEntrega) erro = "Faltam alguns campos para definir:)";

    if (
      !inputLocal &&
      !dataEntrega &&
      !dataRetirada
    ) {
      window.alert(
        "Nenhum campo preenchido, por favor, digite as informações necessarias"
      );
    } else if (erro) {
      window.alert(erro);
      return false;
    } else {
      const divRegistrar = document.querySelector(".div-registrar");

      btnRegistrar.classList.add("ocultar");
      divRegistrar.classList.add("registrando");

      setTimeout(() => {
        divRegistrar.classList.remove("registrando");
        divRegistrar.classList.add("registrou");
        divRegistrar.innerHTML = "Registrado✅";
      }, 3000);

      const entregaData = new Date(dataRetirada);
      const devolucaoData = new Date(dataEntrega);
      let intervaloMilissegundos = devolucaoData - entregaData;
      let intervaloDias = intervaloMilissegundos / (1000 * 60 * 60 * 24);
      const data = {
        entrega: dataRetirada,
        devolucao: dataEntrega,
        intervalo: intervaloDias
      };
      localStorage.setItem('data', JSON.stringify(data));

      setTimeout(() => {
        btnRegistrar.classList.remove("ocultar");
        divRegistrar.classList.remove("registrando");
        divRegistrar.classList.remove("registrou");
        divRegistrar.innerHTML = "Agora escolha o carro desejado";
        divRegistrar.style.height = "auto";
      }, 8000);

      dadosValidados = true;
    }
  } else {
    alert('CEP não encontrado. Por favor, verifique e tente novamente.');
  }

}

// Delimitar datas -----------------------------------------------------------
const startDateInput = document.querySelector(".data-retirada");
const endDateInput = document.querySelector(".data-entrega");

const today = new Date();
const yyyy = today.getFullYear();
const mm = (today.getMonth() + 1).toString().padStart(2, '0');
const dd = today.getDate().toString().padStart(2, '0');

const todayString = `${yyyy}-${mm}-${dd}`;
startDateInput.min = todayString;

startDateInput.addEventListener('change', () => {
  if (startDateInput.value) {
    endDateInput.value = '';
    endDateInput.readOnly = false;

    const selectedDate = new Date(startDateInput.value);
    selectedDate.setDate(selectedDate.getDate() + 2);

    const yyyy = selectedDate.getFullYear();
    const mm = (selectedDate.getMonth() + 1).toString().padStart(2, '0');
    const dd = selectedDate.getDate().toString().padStart(2, '0');

    const nextDayString = `${yyyy}-${mm}-${dd}`;
    endDateInput.min = nextDayString;

  } else {
    endDateInput.readOnly = true;
    endDateInput.value = '';
  }
});
// -----------------------------------------------------------

function modeloEscolhido(idCarro) {
  fetch('data/carros.json')
    .then(response => response.json())
    .then(data => {
      const carroSelecionado = data.carros.find(carro => carro.id === idCarro);
      if (carroSelecionado) {
        localStorage.setItem('carroEscolhido', JSON.stringify(carroSelecionado));
        window.location.href = "reserva.html";
      } else {
        console.error('Carro não encontrado no arquivo JSON.');
      }
    })
    .catch(error => console.error('Erro ao carregar dados do arquivo JSON:', error));
}

