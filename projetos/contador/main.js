let numInicial = 0;

const ress = document.querySelector('#resposta');
const btns = document.querySelectorAll('.btn');

btns.forEach( function (btn) {
    btn.addEventListener("click", function(evento) {
        const styles = evento.currentTarget.classList;
        if (styles.contains("decremento")) {
            numInicial--;
        }
        else if (styles.contains("incremento")) {
            numInicial++
        }
        else {
            numInicial = 0;
        }
        ress.textContent = numInicial;
    })
});