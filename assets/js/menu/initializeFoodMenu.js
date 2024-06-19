// * imports

import fetchDatafoods from './getFoodData.js';

import { foodButtons } from './foodButtons.js';

import showQuantityEachItem from './showsQuantityItemsChosen.js';

import showFoodInformation from './showsFoodInformation.js'


const itemCountersElement = document.querySelectorAll('.menu__food-count');




// ? arrays that will be used for the counts of the items in each section

let itemCountersArrayBurgers = Array(itemCountersElement.length).fill(0);
let itemCountersArrayPizzas = Array(itemCountersElement.length).fill(0);
let itemCountersArrayBarbecue = Array(itemCountersElement.length).fill(0);
let itemCountersArraySteaks = Array(itemCountersElement.length).fill(0);
let itemCountersArrayDrinks = Array(itemCountersElement.length).fill(0);
let itemCountersArrayDesserts = Array(itemCountersElement.length).fill(0);


const buttonsDecreaseItems = document.querySelectorAll('.btn-menu-minus');
const buttonsAddItems = document.querySelectorAll('.btn-menu-plus');


let currentButtonIndex = 0;


export let arrayFoodCounters = [
    itemCountersArrayBurgers,
    itemCountersArrayPizzas,
    itemCountersArrayBarbecue,
    itemCountersArraySteaks,
    itemCountersArrayDrinks,
    itemCountersArrayDesserts
];


const buttonAddToCart = document.querySelectorAll(".menu__food-shopping-cart");



// * detects which food section we are in and uses its specific array to count the items

const addOrRemoveItems = () => {

    // * decrements the counter of the item we want to add to the cart

    buttonsDecreaseItems.forEach((buttonMinus, currentIndex) => {

        buttonMinus.addEventListener('click', () => {

            // ? selects the array corresponding to the current section based on the index of the button clicked

            let selectedItemCountersArray = arrayFoodCounters[currentButtonIndex];

            if (selectedItemCountersArray[currentIndex] > 0) {

                selectedItemCountersArray[currentIndex]--;

                itemCountersElement[currentIndex].textContent = selectedItemCountersArray[currentIndex]

            }

        });

    });


    // * increments the counter of the item we want to add to the cart


    buttonsAddItems.forEach((buttonPlus, currentIndex) => {

        buttonPlus.addEventListener('click', () => {

            // ? selects the array corresponding to the current section based on the index of the button clicked

            let selectedItemCountersArray = arrayFoodCounters[currentButtonIndex];

            selectedItemCountersArray[currentIndex]++;

            itemCountersElement[currentIndex].textContent = selectedItemCountersArray[currentIndex];
    
        });

    });
    


    // * resets my element's counter and shows the reset value on the screen after adding the item to the cart

    buttonAddToCart.forEach((button, currentIndex) => {

        button.addEventListener('click', () => {

            // ? selects the array corresponding to the current section based on the index of the button clicked

            let selectedItemCountersArray = arrayFoodCounters[currentButtonIndex];

            selectedItemCountersArray[currentIndex] = 0;

            itemCountersElement[currentIndex].textContent = selectedItemCountersArray[currentIndex];

        })

    })


};


// * initializes the entire menu, calling all functions that need to be executed before some action

const initializeFoodMenu = async () => {

    let responseFetch = await fetchDatafoods()

    let arrFood = [
        responseFetch.burgers,
        responseFetch.pizzas,
        responseFetch.barbecue,
        responseFetch.steaks,
        responseFetch.drinks,
        responseFetch.desserts
    ];


    addOrRemoveItems();


    foodButtons.forEach((element, index) => {

        element.addEventListener('click', () => {

            currentButtonIndex = index;

            showQuantityEachItem(currentButtonIndex, arrFood); // ? shows the number of items added to the array according to the section the user is in

            showFoodInformation(arrFood[index]); // ? goes through the array of the clicked food section and shows its data on each card

        })

    });

};


export default initializeFoodMenu;