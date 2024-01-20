import { Modal } from './modal.js';
import { alertError } from './alert-error.js';
import { calculateIMC, notANumber} from './utils.js';

const form = document.querySelector('form');

const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');

form.onsubmit = event => {
    event.preventDefault();
    
    const peso = inputPeso.value;
    const altura = inputAltura.value;

    const weightOrHeightIsNotANumber = notANumber(peso) || notANumber(altura);

    if (weightOrHeightIsNotANumber) {
        alertError.open();
        return;
    };

    alertError.close();

    const result = calculateIMC(peso, altura);

    displayResultMessage(result);    
};

function displayResultMessage(result) {
    const message = `Seu IMC é de ${result}`;

    Modal.message.innerText = message;
    Modal.open();
}