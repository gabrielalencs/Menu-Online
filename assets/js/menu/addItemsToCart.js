export const buttonAddToCart = document.querySelectorAll(".menu__food-shopping-cart");

export const containerOfCartItems = document.querySelector(".cart__container-my-itens");

let numberItemsAdded = 0;




// ? function that displays my popup in the corner of the screen

function toastifyElement(textToastify) {
    Toastify({
        text: textToastify,
        duration: 1000,
        newWindow: false,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "#2ecc71",
            fontSize: '1.8rem',
            borderRadius: '1.5rem'

        },
    }).showToast();
}


export const addItemInCart = (currentButtonArg) => {



    const productContainer = currentButtonArg.closest('.menu__food');
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
         `;

        const divTemporary = document.createElement('div');
        divTemporary.classList.add('my-cart__item');
        divTemporary.innerHTML = htmlDoItemAdded;

        containerOfCartItems.appendChild(divTemporary);


        toastifyElement('Item adicionado ao carrinho');

    };


    // ? shows the number of current items in the cart on the cart button in the corner of the screen

    const cartButtonValue = document.querySelector('.button-cart span');

    numberItemsAdded += Number(quantityProductItems);

    cartButtonValue.textContent = numberItemsAdded;

};