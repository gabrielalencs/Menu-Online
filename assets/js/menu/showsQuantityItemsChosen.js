import { arrayFoodCounters } from './initializeFoodMenu.js';




const itemCountersElement = document.querySelectorAll('.menu__food-count');


// ? shows the number of items added to the array according to the section the user is in

const showQuantityEachItem = (currentIndex, array) => {

    itemCountersElement.forEach(item => {

        item.textContent = 0

    })


    if (currentIndex >= 0 && currentIndex < array.length) {

        let selectedItemCountersArray = arrayFoodCounters[currentIndex]

        itemCountersElement.forEach((itemCount, index) => {

            itemCount.textContent = selectedItemCountersArray[index];

        });
    }


    
}


export default showQuantityEachItem;