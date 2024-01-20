// Variáveis
import { Modal } from './modal.js';
import { alertError } from './alert-error.js';
import { IMC, notANumber} from './utils.js';

const form = document.querySelector('form');

const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');

form.onsubmit = event => {
    event.preventDefault();
    
    const peso = inputPeso.value;
    const altura = inputAltura.value;

    const showAlertError = notANumber(peso) || notANumber(altura);

    if (showAlertError) {
        alertError.open();
        return;
    };

    alertError.close();

    const result = IMC(peso, altura);
    console.log(result);

    const message = `Seu IMC é de ${result}`;

    Modal.message.innerText = message;
    Modal.open();
};