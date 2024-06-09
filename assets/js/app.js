// * imports

// ? header

import { mobileMenuBtn, toggleMenuMobile } from './header/menuMobile.js';

// ? menu

import markBtnClicked from './menu/foodButtons.js';


// * functions

// ? menu

markBtnClicked()


// * events

// ? header

mobileMenuBtn.addEventListener('change', toggleMenuMobile);


const btnMinus = document.querySelectorAll('.btn-menu-minus');
const countEl = document.querySelectorAll('.menu__food-count');
const btnPlus = document.querySelectorAll('.btn-menu-plus');


let counts = Array(countEl.length).fill(0);


btnMinus.forEach((item, index) => {

    item.addEventListener('click', () => {

        if (counts[index] > 0) {

            counts[index]--;

            countEl[index].textContent = counts[index];

        }

    });

});


btnPlus.forEach((item, index) => {

    item.addEventListener('click', () => {

        counts[index]++;

        countEl[index].textContent = counts[index];


    });


});

