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

btnZipCodeSearch.addEventListener("click", fillInputFields); // ?calls the function to fill in the form based on the zip code

const buttonCart = document.getElementById("teste");

const carrinho = document.querySelector(".cart");
const butaoFecharCarrinho = document.querySelector(".cart__close-button");

const containerDeItensDoCarrinho = document.querySelector(".cart__my-cart");


const buttonAdicionarAoCarrinho = document.querySelectorAll(".menu__food-shopping-cart");





buttonCart.addEventListener("click", () => {
    carrinho.classList.toggle("hidden");
});

butaoFecharCarrinho.addEventListener("click", () => {
    carrinho.classList.toggle("hidden");
});


buttonAdicionarAoCarrinho.forEach((item) => {
    item.addEventListener("click", () => {

        const imagemDoProduto = item.parentNode.parentNode.parentNode.querySelector(".menu__food-img").src;
        const tituloDoProduto = item.parentNode.parentNode.parentNode.querySelector(".menu__food-title").textContent;
        const precoDoProduto = item.parentNode.parentNode.parentNode.querySelector(".menu__food-price").textContent;
        const valorDoContador = item.parentNode.parentNode.querySelector(".menu__food-count").textContent;



        // Verifica se o item já está no carrinho
        let itemExistente = null;

        const itensNoCarrinho = containerDeItensDoCarrinho.querySelectorAll(".my-cart__item");

        itensNoCarrinho.forEach((cartItem) => {

            const tituloNoCarrinho = cartItem.querySelector(".my-cart__texts p").textContent;

            if (tituloNoCarrinho === tituloDoProduto) {

                itemExistente = cartItem;

            }
        });


        if (itemExistente) {
            // Atualiza o contador do item existente
            const contadorExistente = itemExistente.querySelector(".my-cart__food-count");

            contadorExistente.textContent = parseInt(contadorExistente.textContent) + parseInt(valorDoContador);
        } else {
            // Cria um novo item no carrinho
            const htmlDoItemAdicionado = `
                 <div class="my-cart__item">
                     <div class="my-cart__content">
                         <div class="my-cart-image">
                             <img src="${imagemDoProduto}" alt="icon">
                         </div>
                         <div class="my-cart__texts">
                             <p>${tituloDoProduto}</p>
                             <span>${precoDoProduto}</span>
                         </div>
                     </div>
                     <div class="my-cart__buttons-container">
                         <button class="my-cart__button-count">
                             <span class="my-cart__food-icon">
                                 <i class="fa-solid fa-minus"></i>
                             </span>
                             <span class="my-cart__food-count">${valorDoContador}</span>
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

            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = htmlDoItemAdicionado;

            containerDeItensDoCarrinho.appendChild(tempDiv.firstElementChild);
        }

        

    });
});

// * events

mobileMenuBtn.addEventListener("change", toggleMenuMobile);
