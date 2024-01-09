const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("efeito-menu");
const botaoNorte = document.querySelector(".btn-fixed");


menuButton.addEventListener("click", function() {
  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
});

window.addEventListener("scroll", function (evento) {
  if (this.window.scrollY == 0) {
    botaoNorte.classList.remove("visible");
  } else {
    botaoNorte.classList.add("visible");
  }
});


