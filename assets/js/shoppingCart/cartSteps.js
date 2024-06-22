import {
    containerOfCartItems,
    addOrRemoveItemsInCart,
    toastifyElement
} from '../menu/addItemsToCart.js';

import {
    zipCodeInput, addressInput,
    neighborhoodInput, numberinput,
    ufInput, cityInput
} from './fillAddress.js';


export const cartButtonHeader = document.querySelector('.header__shopping-cart');
export const cartButtonMain = document.querySelector(".button-cart");
export const buttonCloseCart = document.querySelector(".cart__close-button");
const cartContainer = document.querySelector(".cart");
const messageEmptyCart = document.querySelector('.cart__empty-cart-message');

const buttonReturnStage = document.querySelector('.footer__btn-return');

const containerMyCart = document.querySelector('.cart__my-cart');
const buttonNextStageMyCart = document.querySelector('.footer__btn-next-my-cart');

const buttonNextStageDelivery = document.querySelector('.footer__btn-next-delivery');
const containerDeliveryAddress = document.querySelector('.cart__delivery-address');

const buttonNextStageSummary = document.querySelector('.footer__btn-next-summary');
const containerOrderSummary = document.querySelector('.cart__order-summary');



export function toggleMenu() {
    cartContainer.classList.toggle('hidden');

    if (containerOfCartItems.hasChildNodes()) {
        messageEmptyCart.classList.add('hidden');
    }

    buttonNextStageMyCart.removeEventListener('click', checkIfCartEmpty);
    buttonNextStageMyCart.addEventListener('click', checkIfCartEmpty);


    addOrRemoveItemsInCart(); // ? calls the function whenever the menu is clicked, to get the new items added
}


function checkIfCartEmpty() {
    if (!containerOfCartItems.hasChildNodes()) {
        toastifyElement('Seu carrinho está vazio', '#E74C3C');
    } else {
        goToAddressStep();
    }
}

function goToAddressStep() {
    buttonReturnStage.classList.toggle('hidden');

    buttonNextStageMyCart.classList.toggle('hidden');
    buttonNextStageDelivery.classList.toggle('hidden');

    containerMyCart.classList.toggle('hidden');
    containerDeliveryAddress.classList.toggle('hidden');
}


function arrivesFormFilledCorrectly() {

    if (addressInput.value && neighborhoodInput.value && numberinput.value && cityInput.value && zipCodeInput.value) {

        toastifyElement('Passou!', '#2ecc71');
    }
    
    if (addressInput.value && neighborhoodInput.value && numberinput.value && cityInput.value && !zipCodeInput.value) {

        toastifyElement('Passou!', '#2ecc71');

    } 

    if (!numberinput.value) {
        toastifyElement('Informe o número por favor', '#E74C3C');
    }

    if (!zipCodeInput.value) {

        toastifyElement('Informe o CEP por favor', '#E74C3C');

    } else {

        if (!addressInput.value) {
            toastifyElement('Informe o endereço por favor', '#E74C3C');
        }

        if (!neighborhoodInput.value) {
            toastifyElement('Informe o bairro por favor', '#E74C3C');
        }


        if (!cityInput.value) {
            toastifyElement('Informe a cidade por favor', '#E74C3C');
        }
    }

  

}


buttonNextStageDelivery.removeEventListener('click', arrivesFormFilledCorrectly);
buttonNextStageDelivery.addEventListener('click', arrivesFormFilledCorrectly);

buttonReturnStage.addEventListener('click', () => {

    if (containerMyCart.classList.contains('hidden')) {
        containerMyCart.classList.toggle('hidden');
        buttonNextStageMyCart.classList.toggle('hidden');

        buttonNextStageDelivery.classList.toggle('hidden');
        containerDeliveryAddress.classList.toggle('hidden');

        if (!buttonReturnStage.classList.contains('hidden')) {
            buttonReturnStage.classList.toggle('hidden');
        }
    }

})