const zipCodeInput = document.getElementById('cep');
const addressInput = document.getElementById('address');
const neighborhoodInput = document.getElementById('neighborhood');
export const numberinput = document.getElementById('number');
const ufInput = document.getElementById('uf');
const cityInput = document.getElementById('city');
export const btnZipCodeSearch = document.getElementById('zip-code-search');


const callsApiViaCep = async (cep) => {

    if (!/^\d{8}$/.test(cep)) {
        alert("CEP inválido. Deve conter 8 dígitos numéricos.");
        return null;
    }

    const responseApi = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const responseJson = await responseApi.json();

    if (responseJson.erro) {
        alert("CEP não encontrado. Digite as informações manualmente.");

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

