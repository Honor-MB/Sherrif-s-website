const navToggle = document.querySelector(".header__menu")
const navMenu = document.querySelector(".nav__menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav__menu-active")
})