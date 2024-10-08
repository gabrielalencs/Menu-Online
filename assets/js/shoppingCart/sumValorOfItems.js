let totalPriceSum = 0;
const containerOfCartItems = document.querySelector(".cart__container-my-itens");


// ?    adds up the value of the items and shows them in the first step of the cart

export function addValueItemsWhenAddingToCart(productPriceArgument, quantityProductItemsArgument) {
    const purchaseValue = document.querySelector('.footer__subtotal span');
    const TotalPurchaseValue = document.querySelector('.footer__total span span');

    let priceWithoutR$ = productPriceArgument.replace('R$', '').trim();
    let priceWithPoint = priceWithoutR$.replace(',', '.');
    let priceNumber = Number(priceWithPoint);

    totalPriceSum += priceNumber * Number(quantityProductItemsArgument);

    purchaseValue.textContent = totalPriceSum;
    TotalPurchaseValue.textContent = totalPriceSum + 5;
}

// ?    adds the value of the new added item

export function sumTotalValueItems (productPriceArgument) {
    const purchaseValue = document.querySelector('.footer__subtotal span');
    const TotalPurchaseValue = document.querySelector('.footer__total span span');

    let priceWithoutR$ = productPriceArgument.replace('R$', '').trim();
    let priceWithPoint = priceWithoutR$.replace(',', '.');
    let priceNumber = Number(priceWithPoint);

    totalPriceSum += priceNumber;

    purchaseValue.textContent = totalPriceSum;
    TotalPurchaseValue.textContent = totalPriceSum + 5;
}

// ?    subtract the value of the item removed

export function subtractTotalValueItems(productPriceArgument) {
    const purchaseValue = document.querySelector('.footer__subtotal span');
    const TotalPurchaseValue = document.querySelector('.footer__total span span');

    let priceWithoutR$ = productPriceArgument.replace('R$', '').trim();
    let priceWithPoint = priceWithoutR$.replace(',', '.');
    let priceNumber = Number(priceWithPoint);

    totalPriceSum -= priceNumber;

    purchaseValue.textContent = totalPriceSum;
    TotalPurchaseValue.textContent = totalPriceSum + 5;

    if (!containerOfCartItems.hasChildNodes()) {
        totalPriceSum = 0
        TotalPurchaseValue.textContent = totalPriceSum;
    }
}

// ?    subtracts the total value from the number of items that were deleted from that clicked item

export function subtractValuFromSumAllItems(productPriceArgument, quantityProductArgument) {
    const purchaseValue = document.querySelector('.footer__subtotal span');
    const TotalPurchaseValue = document.querySelector('.footer__total span span');

    let priceWithoutR$ = productPriceArgument.replace('R$', '').trim();
    let priceWithPoint = priceWithoutR$.replace(',', '.');
    let priceNumber = Number(priceWithPoint);

    totalPriceSum -= priceNumber * Number(quantityProductArgument.textContent);

    purchaseValue.textContent = totalPriceSum;
    TotalPurchaseValue.textContent = totalPriceSum + 5;

    if (!containerOfCartItems.hasChildNodes()) {
        totalPriceSum = 0;
        TotalPurchaseValue.textContent = totalPriceSum;
    }
}


const buttonNextStageSummary = document.querySelector('.footer__btn-next-summary');

buttonNextStageSummary.addEventListener('click', () => {
    const purchaseValue = document.querySelector('.footer__subtotal span');
    const TotalPurchaseValue = document.querySelector('.footer__total span span');

    totalPriceSum = 0

    purchaseValue.textContent = totalPriceSum
    TotalPurchaseValue.textContent = totalPriceSum

});