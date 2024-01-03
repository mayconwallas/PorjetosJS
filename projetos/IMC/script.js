const myButton = document.querySelector('.ButtonCalcular');
const ButtonReset = document.querySelector('.ButtonReset');
const resposta = document.querySelector('.resposta');

function pegaNome () {
    const nome = document.querySelector('.nome').value;
    return nome;
};

function pegaAltura () {
    const altura = parseFloat(document.querySelector('.altura').value);
    return altura;
};

function verificaAltura (altura) {
    if (altura < 0.50 || altura >= 2.50 ) {
        alert("Altura invalida!!! informe um valor aceitável");
        setTimeout(function() { location. reload(); }, 200)
    }
}

function pegaPeso () {
    const peso = parseFloat(document.querySelector('.peso').value);
    return peso;
};

function verificaPeso (peso) {
    if (peso < 0 || peso >= 400) {
        alert("Peso invalido!!! informe um valor aceitável");
        setTimeout(function() { location. reload(); }, 200)
    }
}

function calculaImc (peso, altura) {
    const imc = (peso / (altura * altura)).toFixed(2)
    return imc
}

function verificaImc(nome, imc) {
    let mensagem;
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
    return mensagem;
}

function reseta(mensagem) {
    mensagem = ""
    resposta.innerHTML = mensagem;
}

function imprimeMensagem(mensagem) {
    resposta.innerHTML = mensagem;
}

function limpaDados () {
    document.querySelector('.nome').value = '';
    document.querySelector('.altura').value = '';
    document.querySelector('.peso').value = '';
};

ButtonReset.addEventListener('click', (evento) => {
    evento.preventDefault();
    reseta();
})


myButton.addEventListener('click', (evento) => {
    evento.preventDefault();
    const nome = pegaNome();
    const altura = pegaAltura();
    verificaAltura(altura);
    const peso = pegaPeso();
    verificaPeso(peso);
    const imc = calculaImc(peso, altura);
    const mensagemFinal = verificaImc(nome, imc);
    imprimeMensagem(mensagemFinal);
    limpaDados();
});
