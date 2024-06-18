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



export function teste() {
    const buttonsDecreaseItems = document.querySelectorAll('.my-cart-btn-minus');
    const buttonsAddItems = document.querySelectorAll('.my-cart-btn-plus');

    const buttonExcluirItem = document.querySelectorAll('.my-cart__button-close');


    buttonsDecreaseItems.forEach(button => {

        button.addEventListener('click', ({target}) => {
            
            const valorDoContainerClicado = target.parentNode.parentNode.querySelector('.my-cart__food-count');

            let contador = Number(valorDoContainerClicado.textContent);

            if (contador > 0) contador--;

            valorDoContainerClicado.textContent = contador;

        })

    })


    buttonsAddItems.forEach(button => {

        button.addEventListener('click', ({target}) => {
            
            const valorDoContainerClicado = target.parentNode.parentNode.querySelector('.my-cart__food-count');

            let contador = Number(valorDoContainerClicado.textContent);

            contador++

            valorDoContainerClicado.textContent = contador;

        })

    })



    buttonExcluirItem.forEach(button => {

        button.addEventListener('click', ({target}) => {

            let elementoPai = target.parentNode.parentNode.parentNode;

            elementoPai.remove()

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