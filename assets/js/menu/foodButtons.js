const foodButtons = document.querySelectorAll('menu__button-food');

foodButtons.forEach(button => {
   button.addEventListener('click', () => {

   });
});

menuBtn.forEach(btn => {
    btn.addEventListener('click', () => {
       menuBtn.forEach(btn => btn.classList.remove('menu-btn-checked'))

        btn.classList.add('menu-btn-checked')
        
    })
})