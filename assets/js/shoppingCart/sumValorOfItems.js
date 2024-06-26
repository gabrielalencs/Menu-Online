let totalPriceSum = 0;

// ? adds up the value of the items and shows them in the first step of the cart

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


export function subtractTotalValueItems(productPriceArgument) {
    const purchaseValue = document.querySelector('.footer__subtotal span');
    const TotalPurchaseValue = document.querySelector('.footer__total span span');

    let priceWithoutR$ = productPriceArgument.replace('R$', '').trim();
    let priceWithPoint = priceWithoutR$.replace(',', '.');
    let priceNumber = Number(priceWithPoint);

    totalPriceSum -= priceNumber;

    purchaseValue.textContent = totalPriceSum;
    TotalPurchaseValue.textContent = totalPriceSum + 5;
}

