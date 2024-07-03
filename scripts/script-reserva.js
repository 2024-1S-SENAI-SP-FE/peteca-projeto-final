const carroEscolhido = JSON.parse(localStorage.getItem('carroEscolhido'));
const infosReserva = localStorage.getItem('data');
const infos = JSON.parse(infosReserva);


function formatarDataParaExibicao(dataString) {
    const date = new Date(dataString);
    const dia = String(date.getDate() + 1).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const ano = date.getFullYear();
    return `${dia}-${mes}-${ano}`;
}

document.addEventListener('DOMContentLoaded', () => {
    const infoEndereco = JSON.parse(localStorage.getItem('endereco'));
    if (!infoEndereco) {
        console.log('Nenhum endereço encontrado no localStorage.');
        return;
    }
    document.querySelector('.local-retirada').innerHTML = `<strong>Entrega:</strong> ${infoEndereco.logradouro}, ${infoEndereco.bairro}, ${infoEndereco.uf}`;
    document.querySelector('.local-devolucao').innerHTML = `<strong>Devolução:</strong> ${infoEndereco.logradouro}, ${infoEndereco.bairro}, ${infoEndereco.uf}`;
});

if (infosReserva) {

    const retiradaFormatada = formatarDataParaExibicao(infos.entrega);
    const devolucaoFormatada = formatarDataParaExibicao(infos.devolucao);

    document.querySelector('.qntd-dias').innerHTML = `<strong>Período do contrato:</strong> ${infos.intervalo} dia(s)`;
    document.querySelector('.dia-retirada').innerHTML = `<strong>Data:</strong> ${retiradaFormatada}`;
    document.querySelector('.dia-devolucao').innerHTML = `<strong>Data:</strong> ${devolucaoFormatada}`;
}

if (carroEscolhido) {
    document.querySelector('.nome-carro').innerHTML = `${carroEscolhido.modelo}`;
    document.querySelector('.carro-imagem').src = `${carroEscolhido.imagem}`;
    document.querySelector('.preco').innerHTML = `R$${carroEscolhido.preco.replace('.', ',')}/dia`;
}

const kitSelecionado = document.querySelector('.kit-selecionado');
pacoteKit = kitSelecionado.querySelector('.pacote-kit');
descricaoKit = kitSelecionado.querySelector('.descricao-kit');
precoKit = kitSelecionado.querySelector('.preco');
let precoFinal = document.querySelector('.preco-final');
precoFinal.innerHTML = `R$${(carroEscolhido.preco * infos.intervalo).toFixed(2)}`.replace('.', ',');
let valorBase = Number(`${(carroEscolhido.preco * infos.intervalo)}`);

const inputs = document.querySelectorAll('.kits input[name="kit"]');

inputs.forEach(input => {
    input.addEventListener('change', () => {
        if (input.checked) {
            const label = input.nextElementSibling;
            const titulo = label.querySelector('.kit-titulo') ? label.querySelector('.kit-titulo').textContent : "";
            const descricao = label.querySelector('p').textContent;
            const preco = label.querySelector('.kit-preco') ? label.querySelector('.kit-preco').textContent : "";

            pacoteKit.innerHTML = titulo;
            descricaoKit.innerHTML = descricao;
            precoKit.innerHTML = preco;

            let conversaoDePreco = Number(preco.slice(2));
            if (input.id === 'kit1') {
                precoFinal.innerHTML = `R$${valorBase.toFixed(2)}`.replace('.', ',');
            } else {
                precoFinal.innerHTML = `R$${(conversaoDePreco + valorBase).toFixed(2)}`.replace('.', ',');
            }
        }
    });
});
