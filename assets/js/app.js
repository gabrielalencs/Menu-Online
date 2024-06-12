// * imports

import { mobileMenuBtn, toggleMenuMobile } from './header/menuMobile.js';

import markBtnClicked from './menu/foodButtons.js';




// * functions

markBtnClicked() // ? marks which food button the user clicked on


const itemCountersElement = document.querySelectorAll('.menu__food-count');


let itemCountersArrayBurgers = Array(itemCountersElement.length).fill(0);
let itemCountersArrayPizzas = Array(itemCountersElement.length).fill(0);
let itemCountersArrayBarbecue = Array(itemCountersElement.length).fill(0);
let itemCountersArraySteaks = Array(itemCountersElement.length).fill(0);
let itemCountersArrayDrinks = Array(itemCountersElement.length).fill(0);
let itemCountersArrayDesserts = Array(itemCountersElement.length).fill(0);


export let currentButtonIndex = 0



const buttonsDecreaseItems = document.querySelectorAll('.btn-menu-minus');

const buttonsAddItems = document.querySelectorAll('.btn-menu-plus');



let arrayFoodCounters = [
    itemCountersArrayBurgers,
    itemCountersArrayPizzas,
    itemCountersArrayBarbecue,
    itemCountersArraySteaks,
    itemCountersArrayDrinks,
    itemCountersArrayDesserts
];



export const addOrRemoveItems = () => {

    buttonsDecreaseItems.forEach((buttonMinus, currentIndex) => {

        buttonMinus.addEventListener('click', () => {


            let selectedItemCountersArray = arrayFoodCounters[currentButtonIndex];


            if (selectedItemCountersArray[currentIndex] > 0) {

                selectedItemCountersArray[currentIndex]--;


                itemCountersElement[currentIndex].textContent = selectedItemCountersArray[currentIndex]

            }

        });

    });


    buttonsAddItems.forEach((buttonPlus, currentIndex) => {

        buttonPlus.addEventListener('click', () => {

            let selectedItemCountersArray = arrayFoodCounters[currentButtonIndex];

            selectedItemCountersArray[currentIndex]++;

            itemCountersElement[currentIndex].textContent = selectedItemCountersArray[currentIndex];


        });

    });

}




addOrRemoveItems(itemCountersArrayBurgers, itemCountersElement) // ? increment or decrement menu items before adding to cart







































// * events

mobileMenuBtn.addEventListener('change', toggleMenuMobile);

















const foodButtons = document.querySelectorAll('.menu__button-food');

const menuFoodTitle = document.querySelectorAll('.menu__food .menu__food-title');

const menuFoodPriceHover = document.querySelectorAll('.menu__food .menu__hover-title');

const menuFoodPrice = document.querySelectorAll('.menu__food .menu__food-price');

const menuFoodImg = document.querySelectorAll('.menu__food .menu__food-img');




export const fetchDatafoods = async () => {
    const dadosFood = await fetch('../../assets/data/foods.json');

    const responseDados = await dadosFood.json();

    return responseDados

}


export const showFoodInformation = (foodArray) => {

    foodArray.forEach((array, currentIndex) => {

        menuFoodTitle[currentIndex].textContent = array.name;

        menuFoodPrice[currentIndex].textContent = `R$ ${array.price},00`;

        menuFoodPriceHover[currentIndex].textContent = `R$ ${array.price},00`;

        menuFoodImg[currentIndex].src = array.image;

    });

}


export const showQuantityEachItem = (currentIndex, array) => {

    itemCountersElement.forEach(item => {

        item.textContent = 0

    })


    if (currentIndex >= 0 && currentIndex < array.length) {

        let selectedItemCountersArray = arrayFoodCounters[currentIndex]

        itemCountersElement.forEach((itemCount, index) => {

            itemCount.textContent = selectedItemCountersArray[index];

        });

    }


}



export const initializeFoodMenu = async () => {

    let responseFetch = await fetchDatafoods()

    let arrFood = [
        responseFetch.burgers,
        responseFetch.pizzas,
        responseFetch.barbecue,
        responseFetch.steaks,
        responseFetch.drinks,
        responseFetch.desserts
    ];


    foodButtons.forEach((element, index) => {

        element.addEventListener('click', () => {

            currentButtonIndex = index


            showQuantityEachItem(currentButtonIndex, arrFood);


            showFoodInformation(arrFood[index])

        })


    })

}


initializeFoodMenu()