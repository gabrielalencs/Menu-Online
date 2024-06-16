// * imports

import { mobileMenuBtn, toggleMenuMobile } from "./header/menuMobile.js";

import markBtnClicked from "./menu/foodButtons.js";

import initializeFoodMenu from "./menu/initializeFoodMenu.js";

import {
    btnZipCodeSearch,
    fillInputFields,
} from "./shoppingCart/fillAddress.js";

// * functions

markBtnClicked(); // ? marks which food button the user clicked on

initializeFoodMenu(); // ? initializes the menu logic, calling all functions for correct operation

btnZipCodeSearch.addEventListener("click", fillInputFields); // ? calls the function to fill in the form based on the zip code



const buttonCart = document.getElementById("teste");

const carrinho = document.querySelector(".cart");
const butaoFecharCarrinho = document.querySelector(".cart__close-button");

buttonCart.addEventListener("click", () => {
    carrinho.classList.toggle("hidden");
});

butaoFecharCarrinho.addEventListener("click", () => {
    carrinho.classList.toggle("hidden");
});




const containerOfCartItems = document.querySelector(".cart__my-cart");
const buttonAddToCart = document.querySelectorAll(".menu__food-shopping-cart");


buttonAddToCart.forEach(currentButton => {

    currentButton.addEventListener("click", () => {
        const productContainer = currentButton.closest('.menu__food'); 

        const productImage = productContainer.querySelector(".menu__food-img").src; 
        const productTitle = productContainer.querySelector(".menu__food-title").textContent;
        const productPrice = productContainer.querySelector(".menu__food-price").textContent;
        const quantityProductItems = productContainer.querySelector(".menu__food-count").textContent;


        const cartItems = containerOfCartItems.querySelectorAll(".my-cart__item");

        let existingItem = null;


        // ? checks whether or not the item exists in my cart, based on the titles of the items that are already in the cart

        cartItems.forEach(currentcartItem => {
            const cartItemTitles = currentcartItem.querySelector(".my-cart__texts p").textContent;

            if (cartItemTitles === productTitle) existingItem = currentcartItem;
        });


        // ? if the item I want to add to my cart is already in the cart, i add the number of items i want to add to the number of items previously added
        // ? if the item I want to add doesn't exist, i create a new element with the item information

        if (existingItem) {
            const counterExistingItem = existingItem.querySelector(".my-cart__food-count");

            counterExistingItem.textContent = parseInt(counterExistingItem.textContent) + parseInt(quantityProductItems);

        } else {
            const htmlDoItemAdded = `
                 <div class="my-cart__item">
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
                             <span class="my-cart__food-icon">
                                 <i class="fa-solid fa-minus"></i>
                             </span>
                             <span class="my-cart__food-count">${quantityProductItems}</span>
                             <span class="my-cart__food-icon">
                                 <i class="fa-solid fa-plus"></i>
                             </span>
                         </button>
                         <div class="my-cart__button-close">
                             <i class="fa-solid fa-xmark"></i>
                         </div>
                     </div>
                 </div>
             `;

            const divTemporary = document.createElement('div');
            divTemporary.innerHTML = htmlDoItemAdded;

            containerOfCartItems.appendChild(divTemporary);
        }
    });

});

// * events

mobileMenuBtn.addEventListener("change", toggleMenuMobile);
