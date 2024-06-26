import {
    sumTotalValueItems,
    subtractTotalValueItems
} from './sumValorOfItems.js';


const cartButtonValue = document.querySelector('.button-cart span');
const messageEmptyCart = document.querySelector('.cart__empty-cart-message');

let sumTotalCartItems = 0;

export function showQuantityItemsInCart(currentButtonArgument) {
    const productContainer = currentButtonArgument.closest('.menu__food');
    const quantityProductItems = productContainer.querySelector(".menu__food-count").textContent;
    let cartButtonValueNumber = Number(cartButtonValue.textContent);
    let quantityProductItemsNumber = Number(quantityProductItems);

    sumTotalCartItems = cartButtonValueNumber + quantityProductItemsNumber;
    cartButtonValue.textContent = sumTotalCartItems;
}


export function handleAddClick({ target }) {
    const clickedItemCounter = target.closest('.my-cart__item').querySelector('.my-cart__food-count');
    const clickedItemPrice = target.closest('.my-cart__item').querySelector('.my-cart__texts span').textContent;
    let itemCounter = Number(clickedItemCounter.textContent);

    itemCounter++;
    clickedItemCounter.textContent = itemCounter;

    sumTotalCartItems++;
    cartButtonValue.textContent = sumTotalCartItems;

    sumTotalValueItems(clickedItemPrice); // ? adds the value when we add more items to the cart itself
}


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

    if (itemCounter === 0) target.closest('.my-cart__item').remove()

    subtractTotalValueItems(clickedItemPrice); // ? subtracts the value when we remove items from the cart itself
}


export function handleDeleteClick({ target }) {
    const parentClickedButton = target.closest('.my-cart__item');
    const clickedItemCounter = target.closest('.my-cart__item').querySelector('.my-cart__food-count');
    let itemCounter = Number(clickedItemCounter.textContent);

    sumTotalCartItems -= itemCounter;
    cartButtonValue.textContent = sumTotalCartItems;

    parentClickedButton.remove();

    if (!containerOfCartItems.hasChildNodes()) {
        messageEmptyCart.classList.remove('hidden');
    }
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