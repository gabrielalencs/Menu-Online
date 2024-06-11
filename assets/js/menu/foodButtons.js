

const foodButtons = document.querySelectorAll('.menu__button-food');

const markBtnClicked = () => {

    foodButtons.forEach(button => {

        button.addEventListener('click', () => {

            foodButtons.forEach(button => button.classList.remove('menu-btn-checked'))

            button.classList.add('menu-btn-checked');

            
        });

    })




};

export default markBtnClicked