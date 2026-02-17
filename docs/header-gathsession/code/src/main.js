import './styles.scss';

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-header ul");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
