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

const infosReserva = localStorage.getItem('data');

if (infosReserva) {
    const infos = JSON.parse(infosReserva);
    document.querySelector('.qntd-dias').innerHTML = `<strong>Período do contrato:</strong> ${infos.diferenca} dia(s)`;
    document.querySelector('.local-retirada').innerHTML = `<strong>Retirada:</strong> ${infos.local}`;
    document.querySelector('.dia-retirada').innerHTML = `<strong>Data:</strong> ${infos.retirada}`;
    document.querySelector('.local-devolucao').innerHTML = `<strong>Devolução:</strong> ${infos.local}`;
    document.querySelector('.local-devolucao').innerHTML = `<strong>Devolução:</strong> ${infos.local}`;
    document.querySelector('.dia-devolucao').innerHTML = `<strong>Data:</strong> ${infos.devolucao}`;
}

if (carroEscolhido) { 
    document.querySelector('.nome-carro').innerHTML = `${carroEscolhido.modelo}`;
    document.querySelector('.carro-imagem').src = `${carroEscolhido.imagem}`;
    document.querySelector('.preco').innerHTML = `R$${carroEscolhido.preco}`;
}
