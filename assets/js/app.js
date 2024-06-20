// * header

import { mobileMenuBtn, toggleMenuMobile } from "./header/menuMobile.js";


// * menu

import markBtnClicked from "./menu/foodButtons.js";

import {
    buttonAddToCart,
    addItemInCart,
    containerOfCartItems
} from './menu/addItemsToCart.js';


import initializeFoodMenu from "./menu/initializeFoodMenu.js";


// * shopping cart

import {
    cartButtonHeader,
    cartButtonMain,
    buttonCloseCart,
    toggleMenu
} from './shoppingCart/cartOpen.js';

import {
    btnZipCodeSearch,
    fillInputFields,
} from "./shoppingCart/fillAddress.js";










// * header

mobileMenuBtn.addEventListener("change", toggleMenuMobile); // ? open or close mobile menu



// * menu

markBtnClicked(); // ? marks which food button the user clicked on




let soma = 0

const cartButtonValue = document.querySelector('.button-cart span');


// ? add items to cart

buttonAddToCart.forEach(currentButton =>
    currentButton.addEventListener("click", () => {

        addItemInCart(currentButton)

        const productContainer = currentButton.closest('.menu__food');
        const quantityProductItems = productContainer.querySelector(".menu__food-count").textContent;


        let cartButtonValueNumber = Number(cartButtonValue.textContent);
        let quantityProductItemsNumber = Number(quantityProductItems);


        soma = cartButtonValueNumber + quantityProductItemsNumber;

        cartButtonValue.textContent = soma;

    })
);








initializeFoodMenu(); // ? initializes the menu logic, calling all functions for correct operation



// * shopping cart

cartButtonHeader.addEventListener('click', toggleMenu); // ? opens the cart when the header button is clicked


cartButtonMain.addEventListener('click', toggleMenu); // ? opens the cart when the main button is clicked


buttonCloseCart.addEventListener("click", toggleMenu); // ? closes the cart when the close cart button is clicked


btnZipCodeSearch.addEventListener("click", fillInputFields); // ? calls the function to fill in the form based on the zip code












const messageEmptyCart = document.querySelector('.cart__empty-cart-message');

export let eventListenersAdded = false;


export function teste() {

    if (eventListenersAdded) return;

    const buttonsDecreaseItems = document.querySelectorAll('.my-cart-btn-minus');
    const buttonsAddItems = document.querySelectorAll('.my-cart-btn-plus');

    const deleteItemButton = document.querySelectorAll('.my-cart__button-close');


    buttonsDecreaseItems.forEach(button => {

        button.addEventListener('click', ({ target }) => {


            const clickedItemCounter = target.closest('.my-cart__item').querySelector('.my-cart__food-count');


            let itemCounter = Number(clickedItemCounter.textContent);
            console.log(itemCounter);


            if (itemCounter > 0) {
                itemCounter--

                soma--

                cartButtonValue.textContent = soma
            }

            console.log(itemCounter);

            if (itemCounter == 0) target.closest('.my-cart__item').remove();




            clickedItemCounter.textContent = itemCounter;


        })

    })


    buttonsAddItems.forEach(button => {

        button.addEventListener('click', ({ target }) => {

            const clickedItemCounter = target.parentNode.parentNode.querySelector('.my-cart__food-count');

            console.log(clickedItemCounter);

            let itemCounter = Number(clickedItemCounter.textContent);

            itemCounter++;

            soma++

            cartButtonValue.textContent = soma

            clickedItemCounter.textContent = itemCounter;

        })

    })



    deleteItemButton.forEach(currentButton => {

        currentButton.addEventListener('click', ({ target }) => {

            let parentClickedButton = target.closest('.my-cart__item');

            parentClickedButton.remove();

            if (!containerOfCartItems.hasChildNodes()) {
                messageEmptyCart.classList.remove('hidden');
            }
        })

    })

    eventListenersAdded = true;

}







// * outra forma do contador do menu caso de b.o


// document.addEventListener('click', ({target}) => {

//     let teste = target.closest('.my-cart-btn-minus');

//     let teste2 = target.closest('.my-cart-btn-plus');


//     if(teste) {

//         let clicado = teste.parentNode.querySelector('.my-cart__food-count');

//         let itemCounter = Number(clicado.textContent);

//         if (itemCounter > 0) itemCounter--;

//         clicado.textContent = itemCounter

//     }

//     if(teste2) {

//         let clicado = teste2.parentNode.querySelector('.my-cart__food-count');

//         let itemCounter = Number(clicado.textContent);

//         itemCounter++

//         clicado.textContent = itemCounter;

//     }

// })











