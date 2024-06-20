import { containerOfCartItems } from '../menu/addItemsToCart.js'

import { teste } from '../app.js';


export const cartButtonHeader = document.querySelector('.header__shopping-cart');
export const cartButtonMain = document.querySelector(".button-cart");
export const buttonCloseCart = document.querySelector(".cart__close-button");

const cartContainer = document.querySelector(".cart");

const messageEmptyCart = document.querySelector('.cart__empty-cart-message');


export const toggleMenu = () => {
    cartContainer.classList.toggle('hidden');

    if (containerOfCartItems.hasChildNodes()) {
        messageEmptyCart.classList.add('hidden');
    }

    teste();

}


