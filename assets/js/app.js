// * imports


import { mobileMenuBtn, toggleMenuMobile } from "./header/menuMobile.js";

import markBtnClicked from "./menu/foodButtons.js";

import initializeFoodMenu from "./menu/initializeFoodMenu.js";

import {
    btnZipCodeSearch,
    fillInputFields,
} from "./shoppingCart/fillAddress.js";

import {
    buttonAddToCart,
    addItemInCart
} from './menu/addItemsToCart.js';




// * functions


// ? marks which food button the user clicked on

markBtnClicked();


// ? initializes the menu logic, calling all functions for correct operation

initializeFoodMenu();


// ? calls the function to fill in the form based on the zip code

btnZipCodeSearch.addEventListener("click", fillInputFields);


// ? add items to cart

buttonAddToCart.forEach(currentButton =>

    currentButton.addEventListener("click", () => addItemInCart(currentButton))

);


// const teste = document.querySelector(".teste");

// teste.addEventListener('click', () => {



// })



// * events


mobileMenuBtn.addEventListener("change", toggleMenuMobile);








const buttonCart = document.getElementById("teste");

const carrinho = document.querySelector(".cart");
const butaoFecharCarrinho = document.querySelector(".cart__close-button");

buttonCart.addEventListener("click", () => {
    carrinho.classList.toggle("hidden");

});

butaoFecharCarrinho.addEventListener("click", () => {
    carrinho.classList.toggle("hidden");
});
