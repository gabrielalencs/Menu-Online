// * imports

import { mobileMenuBtn, toggleMenuMobile } from './header/menuMobile.js';

import markBtnClicked from './menu/foodButtons.js';

import initializeFoodMenu from './menu/initializeFoodMenu.js'





// * functions

markBtnClicked() // ? marks which food button the user clicked on

initializeFoodMenu(); // ? initializes the menu logic, calling all functions for correct operation





// * events

mobileMenuBtn.addEventListener('change', toggleMenuMobile);