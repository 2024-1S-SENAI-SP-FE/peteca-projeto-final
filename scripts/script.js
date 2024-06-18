const kitSelecionado = document.querySelector('.kit-selecionado');
pacoteKit = kitSelecionado.querySelector('.pacote-kit');
descricaoKit = kitSelecionado.querySelector('.descricao-kit');
precoKit = kitSelecionado.querySelector('.preco');

const inputs = document.querySelectorAll('.kits input[name="kit"]');

inputs.forEach(input => {
    input.addEventListener('change', () => {
        if(input.checked) {
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
