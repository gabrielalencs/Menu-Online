export const foodButtons = document.querySelectorAll('.menu__button-food');
const containerFoods = document.querySelector('.menu__foods-container');

const markBtnClicked = () => {
    foodButtons.forEach(button => {
        button.addEventListener('click', () => {
            foodButtons.forEach(button => button.classList.remove('menu-btn-checked'));
            button.classList.add('menu-btn-checked');

            containerFoods.classList.remove('fade-in-up');
            void containerFoods.offsetWidth; // Trigger reflow to restart the animation
            containerFoods.classList.add('fade-in-up');
        });
    })
};

export default markBtnClicked;