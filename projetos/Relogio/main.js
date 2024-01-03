const horas = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');

const relogio = setInterval(function time() {
    let dateToDay = new Date();
    let valorHora = dateToDay.getHours();
    let valorMinutos = dateToDay.getMinutes();
    let valorSegundos = dateToDay.getSeconds();


    if (valorHora < 10) valorHora = '0' + valorHora;
    if (valorMinutos < 10) valorMinutos = '0' + valorMinutos;
    if (valorSegundos < 10) valorSegundos = '0' + valorSegundos;

    horas.textContent = valorHora;
    minutos.textContent = valorMinutos;
    segundos.textContent = valorSegundos;
})