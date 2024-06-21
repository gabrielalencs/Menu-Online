// * header

import { mobileMenuBtn, toggleMenuMobile } from "./header/menuMobile.js";


// * menu

import markBtnClicked from "./menu/clickFoodButtons.js";

import {
    buttonAddToCart,
    addItemInCart,
    containerOfCartItems,
    showQuantityItemsInCart
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






// ? header

mobileMenuBtn.addEventListener("change", toggleMenuMobile); // * open or close mobile menu



// ? menu

markBtnClicked(); // * marks which food button the user clicked on



buttonAddToCart.forEach(currentButton =>
    currentButton.addEventListener("click", () => {

        addItemInCart(currentButton) // * add items to cart

        showQuantityItemsInCart(currentButton) // * shows the current quantity of items in the cart after adding

    })
);





initializeFoodMenu(); // * initializes the menu logic, calling all functions for correct operation



// ? shopping cart

cartButtonHeader.addEventListener('click', toggleMenu); // * opens the cart when the header button is clicked


cartButtonMain.addEventListener('click', toggleMenu); // * opens the cart when the main button is clicked


buttonCloseCart.addEventListener("click", toggleMenu); // * closes the cart when the close cart button is clicked


btnZipCodeSearch.addEventListener("click", fillInputFields); // * calls the function to fill in the form based on the zip code
