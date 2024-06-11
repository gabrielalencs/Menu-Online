// * imports

import { mobileMenuBtn, toggleMenuMobile } from './header/menuMobile.js';

import markBtnClicked from './menu/foodButtons.js';





// * functions

markBtnClicked() // ? marks which food button the user clicked on

const itemCountersElement = document.querySelectorAll('.menu__food-count');


export let itemCountersArrayBurgers = Array(itemCountersElement.length).fill(0);
export let itemCountersArrayPizzas = Array(itemCountersElement.length).fill(0);
let itemCountersArrayBarbecue = Array(itemCountersElement.length).fill(0);
let itemCountersArraySteaks = Array(itemCountersElement.length).fill(0);
let itemCountersArrayDrinks = Array(itemCountersElement.length).fill(0);
let itemCountersArrayDesserts = Array(itemCountersElement.length).fill(0);


export let count = 0



const buttonsDecreaseItems = document.querySelectorAll('.btn-menu-minus');

const buttonsAddItems = document.querySelectorAll('.btn-menu-plus');


export const addOrRemoveItems = () => {

    buttonsDecreaseItems.forEach((buttonMinus, currentIndex) => {

        buttonMinus.addEventListener('click', () => {

            if (count == 0) {

                if (itemCountersArrayBurgers[currentIndex] > 0) {

                    itemCountersArrayBurgers[currentIndex]--;

                    itemCountersElement[currentIndex].textContent = itemCountersArrayBurgers[currentIndex];

                }

            }


            if (count == 1) {

                if (itemCountersArrayPizzas[currentIndex] > 0) {

                    itemCountersArrayPizzas[currentIndex]--;

                    itemCountersElement[currentIndex].textContent = itemCountersArrayPizzas[currentIndex];

                }

            }


            if (count == 2) {

                if (itemCountersArrayBarbecue[currentIndex] > 0) {

                    itemCountersArrayBarbecue[currentIndex]--;

                    itemCountersElement[currentIndex].textContent = itemCountersArrayBarbecue[currentIndex];

                }

            }


            if (count == 3) {

                if (itemCountersArraySteaks[currentIndex] > 0) {

                    itemCountersArraySteaks[currentIndex]--;

                    itemCountersElement[currentIndex].textContent = itemCountersArraySteaks[currentIndex];

                }

            }


            if (count == 4) {

                if (itemCountersArrayDrinks[currentIndex] > 0) {

                    itemCountersArrayDrinks[currentIndex]--;

                    itemCountersElement[currentIndex].textContent = itemCountersArrayDrinks[currentIndex];

                }

            }


            if (count == 5) {

                if (itemCountersArrayDesserts[currentIndex] > 0) {

                    itemCountersArrayDesserts[currentIndex]--;

                    itemCountersElement[currentIndex].textContent = itemCountersArrayDesserts[currentIndex];

                }

            }

        });

    });


    buttonsAddItems.forEach((buttonPlus, currentIndex) => {

        buttonPlus.addEventListener('click', () => {

            if (count == 0) {

                itemCountersArrayBurgers[currentIndex]++;

                itemCountersElement[currentIndex].textContent = itemCountersArrayBurgers[currentIndex];

            }


            if (count == 1) {

                itemCountersArrayPizzas[currentIndex]++;

                itemCountersElement[currentIndex].textContent = itemCountersArrayPizzas[currentIndex];


            }


            if (count == 2) {

                itemCountersArrayBarbecue[currentIndex]++;

                itemCountersElement[currentIndex].textContent = itemCountersArrayBarbecue[currentIndex];

            }

            if (count == 3) {

                itemCountersArraySteaks[currentIndex]++;

                itemCountersElement[currentIndex].textContent = itemCountersArraySteaks[currentIndex];

            }

            if (count == 4) {

                itemCountersArrayDrinks[currentIndex]++;

                itemCountersElement[currentIndex].textContent = itemCountersArrayDrinks[currentIndex];

            }

            if (count == 5) {

                itemCountersArrayDesserts[currentIndex]++;

                itemCountersElement[currentIndex].textContent = itemCountersArrayDesserts[currentIndex];

            }

            
        
            console.log(itemCountersArrayBurgers);
            console.log(itemCountersArrayPizzas);
            console.log(itemCountersArrayBarbecue);
            console.log(itemCountersArraySteaks);
            console.log(itemCountersArrayDrinks);
            console.log(itemCountersArrayDesserts);

        });




    });




}




addOrRemoveItems(itemCountersArrayBurgers, itemCountersElement) // ? increment or decrement menu items before adding to cart







































// * events

mobileMenuBtn.addEventListener('change', toggleMenuMobile);































const foodButtons = document.querySelectorAll('.menu__button-food');

const menuFoodContainer = document.querySelector('.menu__buttons-container');

const menuFoodTitle = document.querySelectorAll('.menu__food .menu__food-title');

const menuFoodPriceHover = document.querySelectorAll('.menu__food .menu__hover-title');

const menuFoodPrice = document.querySelectorAll('.menu__food .menu__food-price');

const menuFoodImg = document.querySelectorAll('.menu__food .menu__food-img');




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

            count = index

            console.log(count);


            itemCountersElement.forEach(item => {

                item.textContent = 0

            })


            if (count == 0) {

                itemCountersElement.forEach((itemCount, index) => {
                    itemCount.textContent = itemCountersArrayBurgers[index];
                })

            }


            if (count == 1) {

                itemCountersElement.forEach((itemCount, index) => {
                    itemCount.textContent = itemCountersArrayPizzas[index];
                })

            }


            if (count == 2) {

                itemCountersElement.forEach((itemCount, index) => {
                    itemCount.textContent = itemCountersArrayBarbecue[index];
                })

            }


            if (count == 3) {

                itemCountersElement.forEach((itemCount, index) => {
                    itemCount.textContent = itemCountersArraySteaks[index];
                })

            }


            if (count == 4) {

                itemCountersElement.forEach((itemCount, index) => {
                    itemCount.textContent = itemCountersArrayDrinks[index];
                })

            }


            if (count == 5) {

                itemCountersElement.forEach((itemCount, index) => {
                    itemCount.textContent = itemCountersArrayDesserts[index];
                })

            }




            passarPelosDados(arrFood[index])

        })


    })



})
