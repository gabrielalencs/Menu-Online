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

let sectionCounter = 0;


export function toggleMenu() {
    cartContainer.classList.toggle('hidden');

    if (containerOfCartItems.hasChildNodes()) {
        messageEmptyCart.classList.add('hidden');
    }

    addOrRemoveItemsInCart(); // ? calls the function whenever the menu is clicked, to get the new items added
}

// * checks if the cart is empty or not

function checkIfCartEmpty() {
    if (!containerOfCartItems.hasChildNodes()) {
        toastifyElement('Seu carrinho está vazio', '#E74C3C');
    } else {
        goToAddressStep();
    }
}

// * go to the stage of filling out the delivery form

function goToAddressStep() {
    sectionCounter = 1;

    buttonReturnStage.classList.remove('hidden');

    buttonNextStageMyCart.classList.add('hidden');
    containerMyCart.classList.add('hidden');

    buttonNextStageDelivery.classList.remove('hidden');
    containerDeliveryAddress.classList.remove('hidden');
}

// * goes to the review stage of the chosen items

function goToRevisionStep() {
    sectionCounter = 2;

    buttonNextStageDelivery.classList.add('hidden');
    containerDeliveryAddress.classList.add('hidden');

    buttonNextStageSummary.classList.remove('hidden');
    containerOrderSummary.classList.remove('hidden');
}

// * checks whether the form has been filled out correctly

function arrivesFormFilledCorrectly() {
    if (addressInput.value &&
        neighborhoodInput.value &&
        numberinput.value &&
        cityInput.value &&
        zipCodeInput.value) {

        goToRevisionStep()

    } else if (
        addressInput.value &&
        neighborhoodInput.value &&
        numberinput.value &&
        cityInput.value &&
        !zipCodeInput.value) {

        goToRevisionStep()

    } else if (!addressInput.value &&
        !neighborhoodInput.value &&
        !numberinput.value &&
        !cityInput.value &&
        !zipCodeInput.value) {

        toastifyElement('Informe o CEP!', '#E74C3C');

    } else if (addressInput.value &&
        neighborhoodInput.value &&
        !numberinput.value &&
        cityInput.value &&
        zipCodeInput.value) {

        toastifyElement('Informe o número!', '#E74C3C');

    } else if (addressInput.value &&
        neighborhoodInput.value &&
        !numberinput.value &&
        cityInput.value &&
        !zipCodeInput.value) {

        toastifyElement('Informe o número!', '#E74C3C');

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

        if (!ufInput.value) {
            toastifyElement('Informe a UF por favor', '#E74C3C');
        }
    }
}


buttonNextStageMyCart.removeEventListener('click', checkIfCartEmpty);
buttonNextStageMyCart.addEventListener('click', checkIfCartEmpty);

buttonNextStageDelivery.removeEventListener('click', arrivesFormFilledCorrectly);
buttonNextStageDelivery.addEventListener('click', arrivesFormFilledCorrectly);

// * check which section of the cart we are in, to know which step should be shown or hidden when the return button is clicked

buttonReturnStage.addEventListener('click', () => {

    if (sectionCounter == 1) {
        containerMyCart.classList.remove('hidden');
        buttonNextStageMyCart.classList.remove('hidden');

        buttonNextStageDelivery.classList.add('hidden');
        containerDeliveryAddress.classList.add('hidden');

        if (!buttonReturnStage.classList.contains('hidden')) {
            buttonReturnStage.classList.add('hidden')
        }

    } else if (sectionCounter == 2) {

        containerDeliveryAddress.classList.remove('hidden');
        buttonNextStageDelivery.classList.remove('hidden');

        buttonNextStageSummary.classList.add('hidden')
        containerOrderSummary.classList.add('hidden')

        sectionCounter = 1;
    }

})