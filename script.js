// Variáveis
const form = document.querySelector('form');

const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');

const modalWrapper = document.querySelector('.modal-wrapper')
const modalMessage = document.querySelector('.modal .title span')
const modalBtnClose = document.querySelector('.modal button.close')

form.onsubmit = event => {
    event.preventDefault();
    
    const peso = inputPeso.value;
    const altura = inputAltura.value;

    const result = IMC(peso, altura);
    console.log(result);

    const message = `Seu IMC é de ${result}`;

    modalMessage.innerText = message;
    modalWrapper.classList.add('open');
};

modalBtnClose.onclick = () => modalWrapper.classList.remove('open');

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
};