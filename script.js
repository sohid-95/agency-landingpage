const toggle = document.getElementById("menu-toggle");
const navMenu = document.querySelector("nav ul");

toggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});