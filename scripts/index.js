const menu_rps = document.getElementById('rps_menu');
const menu_btn = document.getElementById('menu_btn');

menu_btn.addEventListener('click', () => {
    menu_rps.classList.toggle('.inactive');
});