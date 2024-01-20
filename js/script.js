// Variáveis
import { Modal } from './modal.js';
import { alertError } from './alert-error.js';

const form = document.querySelector('form');

const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');

form.onsubmit = event => {
    event.preventDefault();
    
    const peso = inputPeso.value;
    const altura = inputAltura.value;

    const showAlertError = notANumber(peso) || notANumber(altura);

    if (showAlertError) {
        console.log('mostrar o alerta de erro');
        return;
    }

    const result = IMC(peso, altura);
    console.log(result);

    const message = `Seu IMC é de ${result}`;

    Modal.message.innerText = message;
    Modal.open();
};

function notANumber(value) {
    return isNaN(value) || value == "";
};

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2);
};