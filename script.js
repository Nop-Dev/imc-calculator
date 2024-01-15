// Variáveis
const form = document.querySelector('form');

const inputPeso = document.querySelector('#peso');
const inputAltura = document.querySelector('#altura');

form.onsubmit = function(e) {
    e.preventDefault();
    
    const peso = inputPeso.value;
    const altura = inputAltura.value;

    const result = IMC(peso, altura)
    console.log(result)
};

function IMC(weight, height) {
    return (weight / ((height / 100) ** 2)).toFixed(2)
};