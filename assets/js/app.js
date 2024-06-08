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