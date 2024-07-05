export const foodButtons = document.querySelectorAll('.menu__button-food');
const containerFoods = document.querySelector('.menu__foods-container');

function restartAnimation() {
    containerFoods.classList.remove('fade-in-up');
    void containerFoods.offsetWidth;
    containerFoods.classList.add('fade-in-up');
}

const markBtnClicked = () => {
    foodButtons.forEach(button => {
        button.addEventListener('click', () => {
            foodButtons.forEach(button => button.classList.remove('menu-btn-checked'));
            button.classList.add('menu-btn-checked');

            restartAnimation();
        });
    });
};


export default markBtnClicked;