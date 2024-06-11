// * imports

import { mobileMenuBtn, toggleMenuMobile } from './header/menuMobile.js';

import markBtnClicked from './menu/foodButtons.js';

import addOrRemoveItems from './menu/addItemsToCart.js'


// * functions

markBtnClicked() // ? marks which food button the user clicked on

addOrRemoveItems() // ? increment or decrement menu items before adding to cart



// * events

mobileMenuBtn.addEventListener('change', toggleMenuMobile);



const foodButtons = document.querySelectorAll('.menu__button-food');

const menuFood = document.querySelectorAll('.menu__food');

const menuFoodTitle = document.querySelectorAll('.menu__food .menu__food-title');

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

   




    // let burgues = arrayDados.burgers;

    // let pizzas = arrayDados.pizzas;

    // let barbecue = arrayDados.barbecue;

    // let steaks = arrayDados.steaks;

    // let drinks = arrayDados.drinks;

    // let desserts = arrayDados.desserts;

    

})
