// * header

import { mobileMenuBtn, toggleMenuMobile } from "./header/menuMobile.js";


// * menu

import markBtnClicked from "./menu/foodButtons.js";

import {
    buttonAddToCart,
    addItemInCart
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


// ? add items to cart

buttonAddToCart.forEach(currentButton =>
    currentButton.addEventListener("click", () => addItemInCart(currentButton))
);


initializeFoodMenu(); // ? initializes the menu logic, calling all functions for correct operation



// * shopping cart

cartButtonHeader.addEventListener('click', toggleMenu); // ? opens the cart when the header button is clicked


cartButtonMain.addEventListener('click', toggleMenu); // ? opens the cart when the main button is clicked


buttonCloseCart.addEventListener("click", toggleMenu); // ? closes the cart when the close cart button is clicked


btnZipCodeSearch.addEventListener("click", fillInputFields); // ? calls the function to fill in the form based on the zip code



import { addNumberItems } from './menu/addItemsToCart.js';


export function teste() {
    const buttonsDecreaseItems = document.querySelectorAll('.my-cart-btn-minus');
    const buttonsAddItems = document.querySelectorAll('.my-cart-btn-plus');

    const deleteItemButton = document.querySelectorAll('.my-cart__button-close');

    

    buttonsDecreaseItems.forEach(button => {

        button.addEventListener('click', ({target}) => {
            
            const clickedItemCounter = target.parentNode.parentNode.querySelector('.my-cart__food-count');

            let itemCounter = Number(clickedItemCounter.textContent);

            if (itemCounter > 0) itemCounter--;

            clickedItemCounter.textContent = itemCounter;

        })

    })


    buttonsAddItems.forEach(button => {

        button.addEventListener('click', ({target}) => {
            
            const clickedItemCounter = target.parentNode.parentNode.querySelector('.my-cart__food-count');

            let itemCounter = Number(clickedItemCounter.textContent);

            itemCounter++

            clickedItemCounter.textContent = itemCounter;

        })

    })



    deleteItemButton.forEach(currentButton => {

        currentButton.addEventListener('click', ({target}) => {

            let parentClickedButton = target.closest('.my-cart__item');
        
            parentClickedButton.remove();

        })

    })
}



// buttonsDecreaseItems.addEventListener('click', () => {

//     let valorNum = Number(valor.textContent);
    

//     if (valorNum > 0) valorNum--;
    
    
//     valor.textContent = valorNum;

// })

// buttonsAddItems.addEventListener('click', () => {

//     let valorNum = Number(valor.textContent);
    

//     valorNum++

    
//     valor.textContent = valorNum;

// })