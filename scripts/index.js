const menu_rps = document.querySelector(".menu");
const menu_btn = document.querySelector(".bx-menu-alt-left");

menu_btn.addEventListener('click', showMenu);

function showMenu(){
    menu_rps.classList.toggle(".inactive");
}