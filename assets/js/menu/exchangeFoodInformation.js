// import {
//     itemCountersArrayBurgers, itemCountersArrayPizzas, itemCountersArrayBarbecue,
//     itemCountersArraySteaks, itemCountersArrayDrinks, itemCountersArrayDesserts
// } from './addItemsToCart.js';

import { addOrRemoveItems } from "./addItemsToCart.js";



// import { indexButtonClicked } from '../app.js'

const menuFoodTitle = document.querySelectorAll('.menu__food .menu__food-title');

const menuFoodPrice = document.querySelectorAll('.menu__food .menu__food-price');

const menuFoodPriceHover = document.querySelectorAll('.menu__food .menu__hover-title');

const menuFoodImg = document.querySelectorAll('.menu__food .menu__food-img');


const foodButtons = document.querySelectorAll('.menu__button-food');


const itemCountersElement = document.querySelectorAll('.menu__food-count');



let indexButtonClickedTwo = 0



let itemCountersArrayBurgers = Array(itemCountersElement.length).fill(0);
let itemCountersArrayPizzas = Array(itemCountersElement.length).fill(0);
let itemCountersArrayBarbecue = Array(itemCountersElement.length).fill(0);
let itemCountersArraySteaks = Array(itemCountersElement.length).fill(0);
let itemCountersArrayDrinks = Array(itemCountersElement.length).fill(0);
let itemCountersArrayDesserts = Array(itemCountersElement.length).fill(0);




export const fetchDatafoods = async () => {
    const dadosFood = await fetch('../../assets/data/foods.json');

    const responseDados = await dadosFood.json();

    return responseDados

}



function passarPelosDados(foodArray) {

    foodArray.forEach((array, currentIndex) => {

        menuFoodTitle[currentIndex].textContent = array.name;

        menuFoodPrice[currentIndex].textContent = `R$ ${array.price},00`;

        menuFoodPriceHover[currentIndex].textContent = `R$ ${array.price},00`;

        menuFoodImg[currentIndex].src = array.image;

    });

}


export const teste = async () => {

    // addOrRemoveItems(itemCountersArrayBurgers, itemCountersArrayPizzas, itemCountersArrayBarbecue, itemCountersArraySteaks, itemCountersArrayDrinks, itemCountersArrayDesserts)

    let foodDataResponse = await fetchDatafoods()

    let arrayAllFoods = [
        foodDataResponse.burgers,
        foodDataResponse.pizzas,
        foodDataResponse.barbecue,
        foodDataResponse.steaks,
        foodDataResponse.drinks,
        foodDataResponse.desserts
    ];

    

    foodButtons.forEach((elementBtn, index) => {


        elementBtn.addEventListener('click', () => {

            indexButtonClickedTwo = index;


            itemCountersElement.forEach(item => {

                item.textContent = 0

            })




            if (indexButtonClickedTwo == 0) {

                itemCountersElement.forEach((itemCount, index) => {
                    itemCount.textContent = itemCountersArrayBurgers[index];
                })

            }


            if (indexButtonClickedTwo == 1) {

                itemCountersElement.forEach((itemCount, index) => {
                    itemCount.textContent = itemCountersArrayPizzas[index];
                })

            }


            if (indexButtonClickedTwo == 2) {

                itemCountersElement.forEach((itemCount, index) => {
                    itemCount.textContent = itemCountersArrayBarbecue[index];
                })

            }


            if (indexButtonClickedTwo == 3) {

                itemCountersElement.forEach((itemCount, index) => {
                    itemCount.textContent = itemCountersArraySteaks[index];
                })

            }


            if (indexButtonClickedTwo == 4) {

                itemCountersElement.forEach((itemCount, index) => {
                    itemCount.textContent = itemCountersArrayDrinks[index];
                })

            }


            if (indexButtonClickedTwo == 5) {

                itemCountersElement.forEach((itemCount, index) => {
                    itemCount.textContent = itemCountersArrayDesserts[index];
                })

            }


            passarPelosDados(arrayAllFoods[index])


        })


    })


}


