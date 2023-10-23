const myButton = document.querySelector('.myButton');
const resposta = document.querySelector('.resposta');

function pegaNome () {
    nome = document.querySelector('.nome').value;
    return nome;
};

function pegaAltura () {
    altura = parseFloat(document.querySelector('.altura').value);
    return altura;
};

function verificaAltura (altura) {
    if (altura < 0.50 || altura >= 2.50 ) {
        alert("Altura invalida!!! informe um valor aceitável");
        mensagem = `Erro!`;
        setTimeout(function() { location. reload(); }, 200)
    }
}

function pegaPeso () {
    peso = parseFloat(document.querySelector('.peso').value);
    return peso;
};

function verificaPeso (peso) {
    if (peso < 0 || peso >= 400) {
        alert("Peso invalido!!! informe um valor aceitável");
        mensagem = `Erro!`;
        setTimeout(function() { location. reload(); }, 200)
    }
}

function calculaImc (peso, altura) {
    const imc = (peso / (altura * altura)).toFixed(2)
    return imc
}

function verificaImc(nome, imc) {
    if (imc >= 0 && imc <= 17) {
        mensagem = `Olá ${nome}, seu imc é ${imc} e você esta muito abaixo do peso.`
    } else if (imc > 17 && imc < 18.49) {
        mensagem = `Olá ${nome}, seu imc é ${imc} e você esta abaixo do peso.`
    } else if (imc > 18.5 && imc < 24.99) {
        mensagem = `Olá ${nome}, seu imc é ${imc} e você esta no peso ideal.`
    } else if (imc > 25 && imc < 29.99) {
        mensagem = `Olá ${nome}, seu imc é ${imc} e você esta acima do peso.`
    } else if (imc > 30 && imc < 34.99) {
        mensagem = `Olá ${nome}, seu imc é ${imc} e é caracterizado como obesidade I.`
    } else if (imc > 35 && imc < 39.99) {
        mensagem = `Olá ${nome}, seu imc é ${imc} e é caracterizado como obesidade II (severa).`
    } else {
        mensagem = `Olá ${nome}, seu imc é ${imc} e é caracterizado como obesidade III (mórbida).`
    }
}

function imprimeMensagem() {
    resposta.innerHTML = mensagem;
}

function limpaDados () {
    document.querySelector('.nome').value = '';
    document.querySelector('.altura').value = '';
    document.querySelector('.peso').value = '';
};



myButton.addEventListener('click', (evento) => {
    evento.preventDefault();
    const nome = pegaNome();
    const altura = pegaAltura();
    verificaAltura(altura);
    const peso = pegaPeso();
    verificaPeso(peso);
    const imc = calculaImc(peso, altura);
    verificaImc(nome, imc);
    imprimeMensagem();
    limpaDados();
});
