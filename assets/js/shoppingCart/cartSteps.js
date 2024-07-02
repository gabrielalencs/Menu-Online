import { addOrRemoveItemsInCart } from './addOrRemoveItems.js';

import showSubmittedAddressDataReviewSection from './showsAddressDataReviewSection.js'

import toastifyElement from '../menu/toastifyElement.js';

import arrivesFormFilledCorrectly from './formChecks.js';

import {
    markIconStepTwo, removeMarkupIconStepTwo,
    markIconStepThree, removeMarkupIconStepThree
} from './markStageForm.js';


const containerOfCartItems = document.querySelector(".cart__container-my-itens");

const cartContainer = document.querySelector(".cart");
const messageEmptyCart = document.querySelector('.cart__empty-cart-message');

const buttonReturnStage = document.querySelector('.footer__btn-return');

const containerMyCart = document.querySelector('.cart__my-cart');
const buttonNextStageMyCart = document.querySelector('.footer__btn-next-my-cart');

const buttonNextStageDelivery = document.querySelector('.footer__btn-next-delivery');
const containerDeliveryAddress = document.querySelector('.cart__delivery-address');

const buttonNextStageSummary = document.querySelector('.footer__btn-next-summary');
const containerOrderSummary = document.querySelector('.cart__order-summary');

const containerChosenItems = document.querySelector('.cart__container-my-itens');
const containerOrderSummaryItens = document.querySelector('.order-summary__container-itens');

let sectionCounter = 0;


export function toggleMenu() {
    cartContainer.classList.toggle('hidden');
    document.querySelector('body').classList.toggle('scroll')

    if (containerOfCartItems.hasChildNodes()) {
        messageEmptyCart.classList.add('hidden');
    }

    addOrRemoveItemsInCart(); // ? calls the function whenever the menu is clicked, to get the new items added

    cartInitialState(); // ? returns the menu to the first step

    // ? removes marking styles from icons marking bottles
    removeMarkupIconStepTwo();
    removeMarkupIconStepThree();

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
    markIconStepTwo(); // ? Mark that we are in step two in the cart header icons

    sectionCounter = 1;
    
    buttonReturnStage.classList.remove('hidden');

    buttonNextStageMyCart.classList.add('hidden');
    containerMyCart.classList.add('hidden');
    
    buttonNextStageDelivery.classList.remove('hidden');
    containerDeliveryAddress.classList.remove('hidden');
    
    showChosenItemsReviewSection();
}

// * goes to the review stage of the chosen items

export function goToRevisionStep() {

    markIconStepThree(); // ? Mark that we are in step three in the cart header icons

    sectionCounter = 2;

    buttonNextStageDelivery.classList.add('hidden');
    containerDeliveryAddress.classList.add('hidden');

    buttonNextStageSummary.classList.remove('hidden');
    containerOrderSummary.classList.remove('hidden');

    showSubmittedAddressDataReviewSection();
}


// * return the cart to step one of the cart

function cartInitialState() {
    containerMyCart.classList.remove('hidden');
    buttonNextStageMyCart.classList.remove('hidden')

    buttonReturnStage.classList.add('hidden');

    containerDeliveryAddress.classList.add('hidden');
    buttonNextStageDelivery.classList.add('hidden')

    containerOrderSummary.classList.add('hidden');
    buttonNextStageSummary.classList.add('hidden');
}

// * shows items in cart summary section

function showChosenItemsReviewSection() {
    containerOrderSummaryItens.innerHTML = '';

    const containerChosenItemsClone = containerChosenItems.cloneNode(true)
    const containerChosenItemsArray = Array.from(containerChosenItemsClone.children);

    containerChosenItemsArray.forEach(chosenItem => {
        chosenItem.querySelector('.my-cart__quantity-items').classList.remove('hidden');
        chosenItem.querySelector('.my-cart__button-count').classList.add('hidden');
        chosenItem.querySelector('.my-cart__button-close').classList.add('hidden');

        let numberItemsChosen = chosenItem.querySelector('.my-cart__food-count').textContent;

        chosenItem.querySelector('.my-cart__quantity-items span').textContent = 'x' + numberItemsChosen;

        const clonedChild = chosenItem.cloneNode(true);
        containerOrderSummaryItens.appendChild(clonedChild);
    });
}



buttonNextStageMyCart.removeEventListener('click', checkIfCartEmpty);
buttonNextStageMyCart.addEventListener('click', checkIfCartEmpty);

buttonNextStageDelivery.removeEventListener('click', arrivesFormFilledCorrectly);
buttonNextStageDelivery.addEventListener('click', arrivesFormFilledCorrectly);

// * check which section of the cart we are in, to know which step should be shown or hidden when the return button is clicked

buttonReturnStage.addEventListener('click', () => {
    if (sectionCounter == 1) {
        
        removeMarkupIconStepTwo();

        containerMyCart.classList.remove('hidden');
        buttonNextStageMyCart.classList.remove('hidden');

        buttonNextStageDelivery.classList.add('hidden');
        containerDeliveryAddress.classList.add('hidden');

        if (!buttonReturnStage.classList.contains('hidden')) {
            buttonReturnStage.classList.add('hidden')
        }

    } else if (sectionCounter == 2) {
        removeMarkupIconStepThree();

        containerDeliveryAddress.classList.remove('hidden');
        buttonNextStageDelivery.classList.remove('hidden');

        buttonNextStageSummary.classList.add('hidden')
        containerOrderSummary.classList.add('hidden')

        sectionCounter = 1;
    }
});