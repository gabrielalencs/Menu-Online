import {
    containerOfCartItems,
    addOrRemoveItemsInCart,
    toastifyElement
} from '../menu/addItemsToCart.js'


export const cartButtonHeader = document.querySelector('.header__shopping-cart');
export const cartButtonMain = document.querySelector(".button-cart");
export const buttonCloseCart = document.querySelector(".cart__close-button");
const cartContainer = document.querySelector(".cart");
const messageEmptyCart = document.querySelector('.cart__empty-cart-message');
const buttonNextStage = document.querySelector('.footer__btn-next')


export const toggleMenu = () => {
    cartContainer.classList.toggle('hidden');

    if (containerOfCartItems.hasChildNodes()) {
        messageEmptyCart.classList.add('hidden');
    }

    buttonNextStage.removeEventListener('click', checkIfCartEmpty);
    buttonNextStage.addEventListener('click', checkIfCartEmpty);

    addOrRemoveItemsInCart(); // ? calls the function whenever the menu is clicked, to get the new items added
}


function checkIfCartEmpty() {
    if (!containerOfCartItems.hasChildNodes()) {
        toastifyElement('Seu carrinho está vazio', '#E74C3C');
    }
}