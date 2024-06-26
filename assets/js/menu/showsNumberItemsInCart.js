import {
    subtractTotalValueItemsTwo, 
    sumValueItemsTwo
} from './sumValorOfItems.js';

let sumTotalCartItems = 0;

const cartButtonValue = document.querySelector('.button-cart span');


export function showQuantityItemsInCart(currentButtonArgument) {
    const productContainer = currentButtonArgument.closest('.menu__food');
    const quantityProductItems = productContainer.querySelector(".menu__food-count").textContent;
    let cartButtonValueNumber = Number(cartButtonValue.textContent);
    let quantityProductItemsNumber = Number(quantityProductItems);

    sumTotalCartItems = cartButtonValueNumber + quantityProductItemsNumber;
    cartButtonValue.textContent = sumTotalCartItems;
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

    if (itemCounter === 0) target.closest('.my-cart__item').remove();


    subtractTotalValueItemsTwo(clickedItemPrice);
}

export function handleAddClick({ target }) {
    const clickedItemCounter = target.closest('.my-cart__item').querySelector('.my-cart__food-count');
    const clickedItemPrice = target.closest('.my-cart__item').querySelector('.my-cart__texts span').textContent;
    let itemCounter = Number(clickedItemCounter.textContent);

    itemCounter++;
    clickedItemCounter.textContent = itemCounter;

    sumTotalCartItems++;
    cartButtonValue.textContent = sumTotalCartItems;


    sumValueItemsTwo(clickedItemPrice)
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