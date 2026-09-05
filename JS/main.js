const menuToggle = document.querySelector(".menu-toggle");
const menu = document.querySelector(".menu");
const btnConseil = document.querySelector(".btn-conseil");
const divMenu = document.querySelector(".div_menu");

menuToggle.addEventListener("click", () => {
  menu.classList.toggle("active");
  btnConseil.classList.toggle("active");
   divMenu.classList.toggle("active");
});