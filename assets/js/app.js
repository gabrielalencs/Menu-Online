// * header
import { mobileMenuBtn, toggleMenuMobile } from "./header/menuMobile.js";

// * menu

import markBtnClicked from "./menu/clickFoodButtons.js";
import addItemInCart from './menu/addItemsToCart.js';
import { showQuantityItemsInCart } from './shoppingCart/addOrRemoveItems.js';
import initializeFoodMenu from "./menu/initializeFoodMenu.js";

// * shopping cart

import { toggleMenu } from './shoppingCart/cartSteps.js';
import {
    btnZipCodeSearch,
    fillInputFields,
} from "./shoppingCart/fillAddress.js";


// * Depositions

import switchTestimonials from './depositions/showTestimonials.js';


// ? header

mobileMenuBtn.addEventListener("change", toggleMenuMobile);         // * open or close mobile menu


// ? menu

markBtnClicked();       // * marks which food button the user clicked on

const buttonAddToCart = document.querySelectorAll(".menu__food-shopping-cart");

buttonAddToCart.forEach(currentButton =>
    currentButton.addEventListener("click", () => {
        addItemInCart(currentButton)        // * add items to cart

        showQuantityItemsInCart(currentButton)      // * shows the current quantity of items in the cart after adding
    })
);

initializeFoodMenu();       // * initializes the menu logic, calling all functions for correct operation


// ? depositions 

const buttonsTestimonial = document.querySelectorAll('.depositions__button');

buttonsTestimonial.forEach(currentButton => {
    currentButton.addEventListener('click', switchTestimonials);
});


// ? shopping cart

const cartButtonHeader = document.querySelector('.header__shopping-cart');
const cartButtonMain = document.querySelector(".button-cart");
const buttonCloseCart = document.querySelector(".cart__close-button");

cartButtonHeader.addEventListener('click', toggleMenu);         // * opens the cart when the header button is clicked
cartButtonMain.addEventListener('click', toggleMenu);           // * opens the cart when the main button is clicked
buttonCloseCart.addEventListener("click", toggleMenu);          // * closes the cart when the close cart button is clicked
btnZipCodeSearch.addEventListener("click", fillInputFields);    // * calls the function to fill in the form based on the zip code