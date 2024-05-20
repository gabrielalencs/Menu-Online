const btn = document.querySelector('.header__btn-mobile');
const container = document.querySelector('.header__nav-container');

btn.addEventListener('change', () => {
    container.classList.toggle('height');
})