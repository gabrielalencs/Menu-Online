import toastifyElement from '../menu/toastifyElement.js';

export const zipCodeInput = document.getElementById('cep');
export const addressInput = document.getElementById('address');
export const neighborhoodInput = document.getElementById('neighborhood');
export const numberinput = document.getElementById('number');
export const ufInput = document.getElementById('uf');
export const cityInput = document.getElementById('city');
export const btnZipCodeSearch = document.getElementById('zip-code-search');
export const complementInput = document.getElementById('complement');


const callsApiViaCep = async (cep) => {
    if (!/^\d{5}-?\d{3}$/.test(cep)) {
        toastifyElement('CEP inválido. Deve conter 8 dígitos numéricos.', '#E74C3C');
        return null;
    }

    const responseApi = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const responseJson = await responseApi.json();

    if (responseJson.erro) {
        toastifyElement('CEP não encontrado. Digite as informações manualmente.', '#E74C3C');
        return;
    }

    return responseJson;
}

export const fillInputFields = async () => {
    const valueInputCep = zipCodeInput.value.trim();

    let zipCodeData = await callsApiViaCep(valueInputCep);

    if (zipCodeData) {
        addressInput.value = zipCodeData.logradouro;

        neighborhoodInput.value = zipCodeData.bairro;

        cityInput.value = zipCodeData.localidade;

        ufInput.value = zipCodeData.uf;
    }
}

