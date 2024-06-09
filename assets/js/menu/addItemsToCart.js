const buttonsDecreaseItems = document.querySelectorAll('.btn-menu-minus');

const itemCountersElement = document.querySelectorAll('.menu__food-count');

const buttonsAddItems = document.querySelectorAll('.btn-menu-plus');


let itemCountersArray = Array(itemCountersElement.length).fill(0);


const addOrRemoveItems = () => {

    buttonsDecreaseItems.forEach((buttonMinus, currentIndex) => {

        buttonMinus.addEventListener('click', () => {
    
            if (itemCountersArray[currentIndex] > 0) {
    
                itemCountersArray[currentIndex]--;
    
                itemCountersElement[currentIndex].textContent = itemCountersArray[currentIndex];
    
            }
    
        });
    
    });
    
    
    buttonsAddItems.forEach((buttonPlus, currentIndex) => {
    
        buttonPlus.addEventListener('click', () => {
    
            itemCountersArray[currentIndex]++;
    
            itemCountersElement[currentIndex].textContent = itemCountersArray[currentIndex];
    
        });
    
    });

}



export default addOrRemoveItems;