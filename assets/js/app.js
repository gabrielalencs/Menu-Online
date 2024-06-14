// * imports

import { mobileMenuBtn, toggleMenuMobile } from './header/menuMobile.js';

import markBtnClicked from './menu/foodButtons.js';

import initializeFoodMenu from './menu/initializeFoodMenu.js'





// * functions

markBtnClicked() // ? marks which food button the user clicked on

initializeFoodMenu(); // ? initializes the menu logic, calling all functions for correct operation



const zipCodeInput = document.getElementById('cep');

const addressInput = document.getElementById('address');

const neighborhoodInput = document.getElementById('neighborhood');

const ufInput = document.getElementById('uf');

const cityInput = document.getElementById('city');

const btnZipCodeSearch = document.getElementById('zip-code-search');


const chamaApiCep = async (cep) => {

    if (!/^\d{8}$/.test(cep)) {
        alert("CEP inválido. Deve conter 8 dígitos numéricos.");
        return null;
    }

    const responseApi = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

    const responseJson = await responseApi.json();

    if (responseJson.erro) {

        alert("CEP não encontrado. Digite as informações manualmente.");

        return

    }

    return responseJson;
}

btnZipCodeSearch.addEventListener('click', async () => {

    const valueInputCep = zipCodeInput.value.trim(); // Remove espaços em branco

    let obj = await chamaApiCep(valueInputCep);

    addressInput.value = obj.logradouro;

    neighborhoodInput.value = obj.bairro;

    cityInput.value = obj.localidade;

    ufInput.value = obj.uf;

});




// * events

mobileMenuBtn.addEventListener('change', toggleMenuMobile);