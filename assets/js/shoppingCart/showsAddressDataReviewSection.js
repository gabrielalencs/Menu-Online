import {
    zipCodeInput, addressInput,
    neighborhoodInput, numberinput, 
    cityInput, complementInput
} from './fillAddress.js';

const locationAddress = document.querySelector('.location-address');
const locationNumber = document.querySelector('.location-number');
const locationNeighborhood = document.querySelector('.location-neighborhood');
const locationCity = document.querySelector('.location-city');
const locationComplement = document.querySelector('.location-complement');
const locationZipCode = document.querySelector('.location-cep');

function showSubmittedAddressDataReviewSection() {
    locationZipCode.textContent = ''

    locationAddress.textContent = addressInput.value;
    locationNumber.textContent = numberinput.value;
    locationNeighborhood.textContent = neighborhoodInput.value;
    locationCity.textContent = cityInput.value;

    if (zipCodeInput.value) {
        locationCity.textContent = cityInput.value + ' /';
        locationZipCode.textContent = zipCodeInput.value;
    }

    if (complementInput.value) {
        locationNumber.textContent = numberinput.value + ', ' 
        locationComplement.textContent = complementInput.value;
    }
}

export default showSubmittedAddressDataReviewSection;