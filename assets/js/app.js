// * imports

import { mobileMenuBtn, toggleMenuMobile } from './header/menuMobile.js';

import markBtnClicked from './menu/foodButtons.js';

import addOrRemoveItems from './menu/addItemsToCart.js'


// * functions

markBtnClicked() // ? marks which food button the user clicked on

addOrRemoveItems() // ? increment or decrement menu items before adding to cart



// * events

mobileMenuBtn.addEventListener('change', toggleMenuMobile);