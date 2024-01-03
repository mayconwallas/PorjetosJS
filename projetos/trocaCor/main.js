const container = document.querySelector('.container');
const color = document.querySelector('input');
const myButton = document.querySelector('.myButton');

const defultColor = '#fff';
container.style.backgroundColor = `S{defaultColor}`;

myButton.addEventListener('click', () => {
  container.style.backgroundColor = `${color.value}`
});
