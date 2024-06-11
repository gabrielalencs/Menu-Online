// * imports

import { mobileMenuBtn, toggleMenuMobile } from './header/menuMobile.js';

import markBtnClicked from './menu/foodButtons.js';

// import addOrRemoveItems from './menu/addItemsToCart.js'




// * functions

markBtnClicked() // ? marks which food button the user clicked on

const itemCountersElement = document.querySelectorAll('.menu__food-count');


let itemCountersArray = Array(itemCountersElement.length).fill(0);



const buttonsDecreaseItems = document.querySelectorAll('.btn-menu-minus');

const buttonsAddItems = document.querySelectorAll('.btn-menu-plus');


export const addOrRemoveItems = (arrayCounters) => {

    buttonsDecreaseItems.forEach((buttonMinus, currentIndex) => {

        buttonMinus.addEventListener('click', () => {
    
            if (arrayCounters[currentIndex] > 0) {
    
                arrayCounters[currentIndex]--;
    
                itemCountersElement[currentIndex].textContent = arrayCounters[currentIndex];
    
            }
    
        });
    
    });
    
    
    buttonsAddItems.forEach((buttonPlus, currentIndex) => {
    
        buttonPlus.addEventListener('click', () => {
    
            arrayCounters[currentIndex]++;
    
            itemCountersElement[currentIndex].textContent = arrayCounters[currentIndex];
    
        });
    
    });

}




addOrRemoveItems(itemCountersArray, itemCountersElement) // ? increment or decrement menu items before adding to cart







































// * events

mobileMenuBtn.addEventListener('change', toggleMenuMobile);































const foodButtons = document.querySelectorAll('.menu__button-food');


const menuFoodTitle = document.querySelectorAll('.menu__food .menu__food-title');

const menuFoodPriceHover = document.querySelectorAll('.menu__food .menu__hover-title');

const menuFoodPrice = document.querySelectorAll('.menu__food .menu__food-price');

const menuFoodImg = document.querySelectorAll('.menu__food .menu__food-img');



let arr = []

fetch('../../assets/data/foods.json').then(resolve => {

    return resolve.json()

}).then(body => {

    function passarPelosDados(elementArr) {

        elementArr.forEach((element, index) => {
            menuFoodTitle[index].textContent = element.name;

            menuFoodPrice[index].textContent = `R$ ${element.price},00`;

            menuFoodPriceHover[index].textContent = `R$ ${element.price},00`;
    
            menuFoodImg[index].src = element.image;
        });

    }

    let arrayDados = body;


    let arrFood = [
        arrayDados.burgers,
        arrayDados.pizzas,
        arrayDados.barbecue,
        arrayDados.steaks,
        arrayDados.drinks,
        arrayDados.desserts
    ];

    
    

    foodButtons.forEach((element, index) => {
        
        element.addEventListener('click', () => {

           passarPelosDados(arrFood[index])

        })

    })

   

})
