import {
    sumTotalValueItems,
    subtractTotalValueItems,
    subtractValuFromSumAllItems
} from './sumValorOfItems.js';


const cartButtonValue = document.querySelector('.button-cart span');
const messageEmptyCart = document.querySelector('.cart__empty-cart-message');
const containerOfCartItems = document.querySelector(".cart__container-my-itens");
const buttonCart = document.querySelector('.button-cart');


let sumTotalCartItems = 0;

// ?    shows the current number of items in the cart

export function showQuantityItemsInCart(currentButtonArgument) {
    const productContainer = currentButtonArgument.closest('.menu__food');
    const quantityProductItems = productContainer.querySelector(".menu__food-count").textContent;
    let cartButtonValueNumber = Number(cartButtonValue.textContent);
    let quantityProductItemsNumber = Number(quantityProductItems);

    sumTotalCartItems = cartButtonValueNumber + quantityProductItemsNumber;
    cartButtonValue.textContent = sumTotalCartItems;
}

// ?     add more items and count total items in cart

export function handleAddClick({ target }) {
    const clickedItemCounter = target.closest('.my-cart__item').querySelector('.my-cart__food-count');
    const clickedItemPrice = target.closest('.my-cart__item').querySelector('.my-cart__texts span').textContent;
    let itemCounter = Number(clickedItemCounter.textContent);

    itemCounter++;
    clickedItemCounter.textContent = itemCounter;

    sumTotalCartItems++;
    cartButtonValue.textContent = sumTotalCartItems;

    sumTotalValueItems(clickedItemPrice); // ?  adds the value when we add more items to the cart itself
}

// ?    reduces the number of items and counts the current items

export function handleDecreaseClick({ target }) {
    const clickedItemCounter = target.closest('.my-cart__item').querySelector('.my-cart__food-count');
    const clickedItemPrice = target.closest('.my-cart__item').querySelector('.my-cart__texts span').textContent;
    let itemCounter = Number(clickedItemCounter.textContent);

    if (itemCounter > 0) {
        itemCounter--;
        clickedItemCounter.textContent = itemCounter;

        sumTotalCartItems--;
        cartButtonValue.textContent = sumTotalCartItems;
    }

    if (itemCounter === 0) {
        target.closest('.my-cart__item').remove();

        if (!containerOfCartItems.hasChildNodes()) {
            messageEmptyCart.classList.remove('hidden');
            buttonCart.classList.remove('animation-jump');
        }
    }

    subtractTotalValueItems(clickedItemPrice); // ?     subtracts the value when we remove items from the cart itself
}


export function handleDeleteClick({ target }) {
    const parentClickedButton = target.closest('.my-cart__item');
    const clickedItemCounter = target.closest('.my-cart__item').querySelector('.my-cart__food-count');
    const clickedItemPrice = target.closest('.my-cart__item').querySelector('.my-cart__texts span').textContent;

    let itemCounter = Number(clickedItemCounter.textContent);

    sumTotalCartItems -= itemCounter;
    cartButtonValue.textContent = sumTotalCartItems;

    parentClickedButton.remove();

    if (!containerOfCartItems.hasChildNodes()) {
        messageEmptyCart.classList.remove('hidden');
        buttonCart.classList.remove('animation-jump');
    }

    subtractValuFromSumAllItems(clickedItemPrice, clickedItemCounter);
}


export function addOrRemoveItemsInCart() {
    const buttonsDecreaseItems = document.querySelectorAll('.my-cart-btn-minus');
    const buttonsAddItems = document.querySelectorAll('.my-cart-btn-plus');
    const deleteItemButton = document.querySelectorAll('.my-cart__button-close');

    buttonsDecreaseItems.forEach(currentButton => {
        currentButton.removeEventListener('click', handleDecreaseClick);
        currentButton.addEventListener('click', handleDecreaseClick);
    });

    buttonsAddItems.forEach(currentButton => {
        currentButton.removeEventListener('click', handleAddClick);
        currentButton.addEventListener('click', handleAddClick);
    });

    deleteItemButton.forEach(currentButton => {
        currentButton.removeEventListener('click', handleDeleteClick);
        currentButton.addEventListener('click', handleDeleteClick);
    });
}