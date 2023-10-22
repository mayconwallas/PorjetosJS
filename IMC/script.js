const myButton = document.querySelector('.myButton')
let nome;
let altura;
let peso;
let imc;

function coletaDados () {
    nome = document.querySelector('.nome');
    altura = document.querySelector('.altura');
    peso = document.querySelector('.peso');
    reposta = document.querySelector('.resposta')
};

function calculoImc (peso, altura) {
    ress = peso / (altura * altura);
    imc = ress.toFixed(2)
    return imc, peso, altura;
}

function verificaImc(imc) {
    if (imc < 0 || imc >= 400) {
        alert("Peso invalido!!! informe um valor aceitável");
        setTimeout(function() { location. reload(); }, 3000)
    }

    if (imc >= 0 && imc < 17) {
        reposta.innerHTML = `seu imc é ${imc} e você esta muito abaixo do peso.`
    }

    if (imc > 17 && imc < 18.49) {
        reposta.innerHTML = `seu imc é ${imc} e você esta abaixo do peso.`
    }

    if (imc > 18.5 && imc < 24.99) {
        reposta.innerHTML = `seu imc é ${imc} e você esta no peso ideal.`
    }

    if (imc > 25 && imc < 29.99) {
        reposta.innerHTML = `seu imc é ${imc} e você esta acima do peso.`
    }

    if (imc > 30 && imc < 34.99) {
        reposta.innerHTML = `seu imc é ${imc} e é caracterizado como obesidade I.`
    }

    if (imc > 35 && imc < 39.99) {
        reposta.innerHTML = `seu imc é ${imc} e é caracterizado como obesidade II (severa).`
    }

    if (imc > 40) {
        reposta.innerHTML = `seu imc é ${imc} e é caracterizado como obesidade III (mórbida).`
    }
}

function limpaDados () {
    document.querySelector('.nome').value = '';
    document.querySelector('.altura').value = '';
    document.querySelector('.peso').value = '';
};



myButton.addEventListener('click', (evento) => {
    evento.preventDefault()
    coletaDados();
    calculoImc(peso.value, altura.value);
    verificaImc(peso, imc);
    limpaDados();
});
