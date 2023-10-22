const myButton = document.querySelector('.myButton')
let nome;
let altura;
let peso;
let imc;

function coletaDados () {
    nome = document.querySelector('.nome');
    altura = document.querySelector('.altura');
    peso = document.querySelector('.peso');
};

function calculoImc (peso, altura) {
    ress = peso / (altura * altura);
    imc = ress.toFixed(2)
    return imc;
}

function verificaImc(peso, imc) {
    if (peso < 0 || peso >= 400) {
        alert("Peso invalido!!! informe um valor aceitável");
        setTimeout(function() { location. reload(); }, 3000)
    }
    // Abaixo de 17	Muito abaixo do peso
    // Entre 17 e 18,49	Abaixo do peso
    // Entre 18,5 e 24,99	Peso normal
    // Entre 25 e 29,99	Acima do peso
    // Entre 30 e 34,99	Obesidade I
    // Entre 35 e 39,99	Obesidade II (severa)
    // Acima de 40	Obesidade III (mórbida)
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
    verificaImc(peso, imc)
    limpaDados();
});
