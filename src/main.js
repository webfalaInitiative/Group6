const menu = document.querySelector('.menu');
const icon = document.querySelector('.icon');
const menuIcon = document.querySelector('.line-icon');
const closeIcon = document.querySelector('.close');

function toggleMenu() {
    if(menu.classList.contains("show-menu")){
        menu.classList.remove("show-menu");
        menuIcon.style.display = 'block';
        closeIcon.style.display = 'none';
    } else {
        menu.classList.add("show-menu");
        menuIcon.style.display = 'none';
        closeIcon.style.display = 'block';
    }
}
closeIcon.addEventListener("click", toggleMenu())
menu.addEventListener("click", toggleMenu)