const kitSelecionado = document.querySelector('.kit-selecionado');
pacoteKit = kitSelecionado.querySelector('.pacote-kit');
descricaoKit = kitSelecionado.querySelector('.descricao-kit');
precoKit = kitSelecionado.querySelector('.preco');

const inputs = document.querySelectorAll('.kits input[name="kit"]');

inputs.forEach(input => {
    input.addEventListener('change', () => {
        if (input.checked) {
            const label = input.nextElementSibling;
            const titulo = label.querySelector('.kit-titulo').textContent;
            const descricao = label.querySelector('p').textContent;
            const preco = label.querySelector('.kit-preco').textContent;

            pacoteKit.innerHTML = titulo;
            descricaoKit.innerHTML = descricao;
            precoKit.innerHTML = preco;
        }
    })
})

const carroEscolhido = JSON.parse(localStorage.getItem('carroEscolhido'));

function formatarDataParaExibicao(dataString) {
    const date = new Date(dataString);
    const dia = String(date.getDate() + 1).padStart(2, '0');
    const mes = String(date.getMonth() + 1).padStart(2, '0');
    const ano = date.getFullYear();
    return `${dia}-${mes}-${ano}`;
}

const infosReserva = localStorage.getItem('data');

if (infosReserva) {
    const infos = JSON.parse(infosReserva);

    const retiradaFormatada = formatarDataParaExibicao(infos.retirada);
    const devolucaoFormatada = formatarDataParaExibicao(infos.devolucao);

    document.querySelector('.qntd-dias').innerHTML = `<strong>Período do contrato:</strong> ${infos.intervalo} dia(s)`;
    document.querySelector('.local-retirada').innerHTML = `<strong>Retirada:</strong> ${infos.local}`;
    document.querySelector('.dia-retirada').innerHTML = `<strong>Data:</strong> ${retiradaFormatada}`;
    document.querySelector('.local-devolucao').innerHTML = `<strong>Devolução:</strong> ${infos.local}`;
    document.querySelector('.local-devolucao').innerHTML = `<strong>Devolução:</strong> ${infos.local}`;
    document.querySelector('.dia-devolucao').innerHTML = `<strong>Data:</strong> ${devolucaoFormatada}`;
}

if (carroEscolhido) { 
    document.querySelector('.nome-carro').innerHTML = `${carroEscolhido.modelo}`;
    document.querySelector('.carro-imagem').src = `${carroEscolhido.imagem}`;
    document.querySelector('.preco').innerHTML = `R$${carroEscolhido.preco}`;
}


