import { arrayFoodCounters } from './teste.js';


const itemCountersElement = document.querySelectorAll('.menu__food-count');


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