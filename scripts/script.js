// Tooltip
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

function escolhaCarrossel(id) {
    document.getElementById('buscaCarro').scrollIntoView({ behavior: 'smooth' });
    document.querySelector('select').value = id;
}

const botaoEnviar = document.querySelector('.btn-reservar');

botaoEnviar.addEventListener('click', async () => {
    const cepValido = await pesquisarCep();
    if (cepValido) {
        validarCampos();
    } else {
        alert('CEP não encontrado. Por favor, verifique e tente novamente.');
    }
})

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

function validarCampos() {
    const cep = document.querySelector('#cep');
    const entrega = document.querySelector('#entrega');
    const devolucao = document.querySelector('#devolucao');

    const entregaData = new Date(entrega.value);
    const devolucaoData = new Date(devolucao.value);

    let intervaloMilissegundos = devolucaoData - entregaData;

    let intervaloDias = intervaloMilissegundos / (1000 * 60 * 60 * 24);

    const data = {
        entrega: entrega.value,
        devolucao: devolucao.value,
        intervalo: intervaloDias
    };

    localStorage.setItem('data', JSON.stringify(data));

    const select = document.querySelector('select');

    const tooltipCep = new bootstrap.Tooltip(cep);

    const tooltipEntrega = new bootstrap.Tooltip(entrega);

    const tooltip = new bootstrap.Tooltip(devolucao);

    const tooltipSelect = new bootstrap.Tooltip(select);

    let valid = true;

    if (!cep.value) {
        tooltipCep.show();
        valid = false;
    } else {
        tooltipCep.hide();
    }

    if (!entrega.value) {
        tooltipEntrega.show();
        valid = false;
    } else {
        tooltipEntrega.dispose();
    }

    if (!devolucao.value) {
        tooltip.show();
        valid = false;
    } else {
        tooltip.dispose();
    }

    if (select.value === "Veículo") {
        tooltipSelect.show();
        valid = false;
    } else {
        tooltipSelect.dispose();
    }

    if (!valid) {
        setTimeout(() => {
            tooltipCep.dispose();
            tooltipEntrega.dispose();
            tooltipSelect.dispose();
            tooltip.dispose();
        }, 3000);
    } else {
        // Chama uma função
        modeloEscolhido(select.value);
    }

    cep.addEventListener('input', function () {
        if (local.value) {
            tooltipCep.dispose();
        }
    });

    entrega.addEventListener('input', function () {
        if (entrega.value) {
            tooltipEntrega.dispose();
        }
    });

    devolucao.addEventListener('input', function () {
        if (devolucao.value) {
            tooltip.hide();
        }
    });

    select.addEventListener('change', function () {
        if (select.value !== "Veículo") {
            tooltipSelect.dispose();
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    // Definir datas mínimas
    const startDateInput = document.getElementById('entrega');
    const endDateInput = document.getElementById('devolucao');

    const tooltip = new bootstrap.Tooltip(endDateInput);

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

            tooltip.dispose();

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

    endDateInput.addEventListener('focus', () => {
        if (endDateInput.readOnly) {
            tooltip.show();
            setTimeout(() => {
                tooltip.hide();
            }, 3000);
        }
    });
});

// Função para buscar as informações do carro escolhido no objeto 'carros.json'
function modeloEscolhido(idCarro) {
    fetch('data/carros.json')
        .then(response => response.json())
        .then(data => {
            const carroSelecionado = data.carros.find(carro => carro.id === idCarro);
            if (carroSelecionado) {
                localStorage.setItem('carroEscolhido', JSON.stringify(carroSelecionado));
                setInterval(()=> {
                    window.location.href = "reserva.html";
                }, 3000)
            } else {
                console.error('Carro não encontrado no arquivo JSON.');
            }
        })
        .catch(error => console.error('Erro ao carregar dados do arquivo JSON:', error));
}