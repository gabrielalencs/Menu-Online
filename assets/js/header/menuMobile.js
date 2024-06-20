export const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const menuContainer = document.getElementById('menu-container');
const menuLinks = document.querySelectorAll('.header__list-item');
const inputChekboxMenu = document.getElementById('checkbox');

export const toggleMenuMobile = () => menuContainer.classList.toggle('height');


menuLinks.forEach(link => link.addEventListener('click', () => {
    inputChekboxMenu.checked = false;
    
    toggleMenuMobile();
}));


window.addEventListener('resize', () => {
    inputChekboxMenu.checked = false;

    menuContainer.classList.remove('height');
})