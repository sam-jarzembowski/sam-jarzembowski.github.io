const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

var menu_shown = false;

function showMenu() {
    navMenu.classList.toggle("show");
    navMenu.classList.toggle("hide");
}

navToggle.addEventListener('click', showMenu);