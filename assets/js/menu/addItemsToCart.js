export const buttonAddToCart = document.querySelectorAll(".menu__food-shopping-cart");

export const containerOfCartItems = document.querySelector(".cart__container-my-itens");

let sumTotalCartItems = 0;
const cartButtonValue = document.querySelector('.button-cart span');
const messageEmptyCart = document.querySelector('.cart__empty-cart-message');



export const addItemInCart = (currentButtonArgument) => {
    const productContainer = currentButtonArgument.closest('.menu__food');
    const productImage = productContainer.querySelector(".menu__food-img").src;
    const productTitle = productContainer.querySelector(".menu__food-title").textContent;
    const productPrice = productContainer.querySelector(".menu__food-price").textContent;
    const quantityProductItems = productContainer.querySelector(".menu__food-count").textContent;

    if (parseInt(quantityProductItems) <= 0) return;

    const cartItems = containerOfCartItems.querySelectorAll(".my-cart__item");
    let existingItem = null;

    // ? checks whether or not the item exists in my cart, based on the titles of the items that are already in the cart

    cartItems.forEach(currentcartItem => {
        const cartItemTitles = currentcartItem.querySelector(".my-cart__texts p").textContent;

        if (cartItemTitles === productTitle) existingItem = currentcartItem;
    });


    if (existingItem) {
        // ? if the item I want to add to my cart is already in the cart, i add the number of items i want to add to the number of items previously added

        const counterExistingItem = existingItem.querySelector(".my-cart__food-count");

        counterExistingItem.textContent = parseInt(counterExistingItem.textContent) + parseInt(quantityProductItems);

        toastifyElement('Mais itens adicionados desse alimento', '#2ecc71');

    } else {

        // ? if the item I want to add doesn't exist, i create a new element with the item information

        const htmlDoItemAdded = `
                 <div class="my-cart__content">
                     <div class="my-cart-image">
                         <img src="${productImage}" alt="icon">
                     </div>

                     <div class="my-cart__texts">
                         <p>${productTitle}</p>
                         <span>${productPrice}</span>
                     </div>
                 </div>

                 <div class="my-cart__buttons-container">
                     <button class="my-cart__button-count">
                         <span class="my-cart__food-icon my-cart-btn-minus">
                             <i class="fa-solid fa-minus"></i>
                         </span>

                         <span class="my-cart__food-count">${quantityProductItems}</span>

                         <span class="my-cart__food-icon my-cart-btn-plus">
                             <i class="fa-solid fa-plus"></i>
                         </span>
                     </button>
                     
                     <div class="my-cart__button-close">
                         <i class="fa-solid fa-xmark"></i>
                     </div>
                 </div>
         `;

        const divTemporary = document.createElement('div');
        divTemporary.classList.add('my-cart__item');
        divTemporary.innerHTML = htmlDoItemAdded;

        containerOfCartItems.appendChild(divTemporary);

        toastifyElement('Item adicionado ao carrinho', '#2ecc71');
    };

};


export function showQuantityItemsInCart(currentButtonArgument) {
    const productContainer = currentButtonArgument.closest('.menu__food');
    const quantityProductItems = productContainer.querySelector(".menu__food-count").textContent;
    let cartButtonValueNumber = Number(cartButtonValue.textContent);
    let quantityProductItemsNumber = Number(quantityProductItems);

    sumTotalCartItems = cartButtonValueNumber + quantityProductItemsNumber;
    cartButtonValue.textContent = sumTotalCartItems;
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


function handleDecreaseClick({ target }) {
    const clickedItemCounter = target.closest('.my-cart__item').querySelector('.my-cart__food-count');
    let itemCounter = Number(clickedItemCounter.textContent);

    if (itemCounter > 0) {
        itemCounter--;
        clickedItemCounter.textContent = itemCounter;

        sumTotalCartItems--;
        cartButtonValue.textContent = sumTotalCartItems;
    }

    if (itemCounter === 0) target.closest('.my-cart__item').remove();
}


function handleAddClick({ target }) {
    const clickedItemCounter = target.closest('.my-cart__item').querySelector('.my-cart__food-count');
    let itemCounter = Number(clickedItemCounter.textContent);

    itemCounter++;
    clickedItemCounter.textContent = itemCounter;

    sumTotalCartItems++;
    cartButtonValue.textContent = sumTotalCartItems;
}


function handleDeleteClick({ target }) {
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


// ? function that displays my popup in the corner of the screen

export function toastifyElement(textToastify, colorToastify) {
    Toastify({
        text: textToastify,
        duration: 800,
        newWindow: false,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: colorToastify,
            fontSize: '1.8rem',
            borderRadius: '1.5rem'

        },
    }).showToast();
}

















// ? adds up the value of the items and shows them in the first step of the cart

export function sumValueItems(productPriceArgument, quantityProductItemsArgument) {

    const purchaseValue = document.querySelector('.footer__subtotal span');
    const TotalPurchaseValue = document.querySelector('.footer__total span span');

    let priceWithoutR$ = productPriceArgument.replace('R$', '').trim();
    let priceWithPoint = priceWithoutR$.replace(',', '.');
    let priceNumber = Number(priceWithPoint);


    totalPriceSum += priceNumber * Number(quantityProductItemsArgument);

    purchaseValue.textContent = totalPriceSum;

    TotalPurchaseValue.textContent = totalPriceSum + 5;

}







