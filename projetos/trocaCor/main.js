const container = document.querySelector('.container');
const color = document.querySelector('input');

const defultColor = '#fff';
container.style.backgroundColor = `S{defaultColor}`;

function onChangeBg() {
  container.style.backgroundColor = `${color.value}`
}