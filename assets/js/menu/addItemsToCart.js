export const buttonAddToCart = document.querySelectorAll(".menu__food-shopping-cart");

export const containerOfCartItems = document.querySelector(".cart__container-my-itens");

import { teste } from '../app.js';



let numberItemsAdded = 0;
let totalPriceSum = 0;



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

        toastifyElement('Mais itens adicionados desse alimento');

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


        toastifyElement('Item adicionado ao carrinho');

    };


    addNumberItems(quantityProductItems);

    sumValueItems(productPrice, quantityProductItems);



    addValueNewItemsAdded();


};


// ? shows the number of current items in the cart on the cart button in the corner of the screen

export function addNumberItems(quantityProductItemsArgument) {

    const cartButtonValue = document.querySelector('.button-cart span');

    numberItemsAdded += Number(quantityProductItemsArgument);

    cartButtonValue.textContent = numberItemsAdded;

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





function addValueNewItemsAdded() {

    const buttonsAddItems = document.querySelectorAll('.my-cart-btn-plus');
    const buttonsDecreaseItems = document.querySelectorAll('.my-cart-btn-minus');

    buttonsDecreaseItems.forEach(button => {

        button.addEventListener('click', ({ target }) => {

            let price = target.closest('.my-cart__item').querySelector('.my-cart__texts span').textContent;

            let quantidade = target.closest('.my-cart__item').querySelector('.my-cart__food-count').textContent;


            const purchaseValue = document.querySelector('.footer__subtotal span');
            const TotalPurchaseValue = document.querySelector('.footer__total span span');

            let priceWithoutR$ = price.replace('R$', '').trim();
            let priceWithPoint = priceWithoutR$.replace(',', '.');
            let priceNumber = Number(priceWithPoint);


            if (Number(quantidade) > 0) {
                totalPriceSum -= priceNumber;

                purchaseValue.textContent = totalPriceSum;
    
                TotalPurchaseValue.textContent = totalPriceSum + 5;
            }

        
        })

    })



    buttonsAddItems.forEach(button => {

        button.addEventListener('click', ({ target }) => {

            let price = target.closest('.my-cart__item').querySelector('.my-cart__texts span').textContent;

            const purchaseValue = document.querySelector('.footer__subtotal span');
            const TotalPurchaseValue = document.querySelector('.footer__total span span');

            let priceWithoutR$ = price.replace('R$', '').trim();
            let priceWithPoint = priceWithoutR$.replace(',', '.');
            let priceNumber = Number(priceWithPoint);

            totalPriceSum += priceNumber;

            purchaseValue.textContent = totalPriceSum;

            TotalPurchaseValue.textContent = totalPriceSum + 5;

        })

    })
}
