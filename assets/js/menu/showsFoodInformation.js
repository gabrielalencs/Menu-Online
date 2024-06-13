const menuFoodTitle = document.querySelectorAll('.menu__food .menu__food-title');
const menuFoodPriceHover = document.querySelectorAll('.menu__food .menu__hover-title');
const menuFoodPrice = document.querySelectorAll('.menu__food .menu__food-price');
const menuFoodImg = document.querySelectorAll('.menu__food .menu__food-img');


const showFoodInformation = (foodArray) => {

    foodArray.forEach((array, currentIndex) => {

        menuFoodTitle[currentIndex].textContent = array.name;

        menuFoodPrice[currentIndex].textContent = `R$ ${array.price},00`;

        menuFoodPriceHover[currentIndex].textContent = `R$ ${array.price},00`;

        menuFoodImg[currentIndex].src = array.image;

    });

}

export default showFoodInformation;