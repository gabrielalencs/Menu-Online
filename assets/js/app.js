const btn = document.querySelector('.header__btn-mobile');
const container = document.querySelector('.header__nav-container');

btn.addEventListener('change', () => {
    container.classList.toggle('height');
})


const menuBtn = document.querySelectorAll('.menu__button-food');

menuBtn.forEach(btn => {
    btn.addEventListener('click', () => {
       menuBtn.forEach(btn => btn.classList.remove('menu-btn-checked'))

        btn.classList.add('menu-btn-checked')
        
    })
})