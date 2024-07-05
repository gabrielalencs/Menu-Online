import toastifyElement from '../menu/toastifyElement.js';


import {
    zipCodeInput, addressInput,
    neighborhoodInput, numberinput,
    ufInput, cityInput
} from './fillAddress.js';

import { goToRevisionStep } from './cartSteps.js'


function arrivesFormFilledCorrectly() {
    const address = addressInput.value;
    const neighborhood = neighborhoodInput.value;
    const number = numberinput.value;
    const city = cityInput.value;
    const zipCode = zipCodeInput.value;
    const uf = ufInput.value;

    if (address && neighborhood && city && uf !== '-1') {
        if (number) {
            goToRevisionStep();

        } else {
            toastifyElement('Informe o número!', '#E74C3C');
        }

    } else if (!address && !neighborhood && !number && !city && !zipCode && uf == '-1') {

        toastifyElement('Informe o CEP!', '#E74C3C');

    } else {
        if (!address) {
            toastifyElement('Informe o endereço por favor', '#E74C3C');
        }

        if (!neighborhood) {
            toastifyElement('Informe o bairro por favor', '#E74C3C');
        }

        if (!city) {
            toastifyElement('Informe a cidade por favor', '#E74C3C');
        }

        if (uf == '-1') {
            toastifyElement('Informe a UF por favor', '#E74C3C');
        }
    }
}

export default arrivesFormFilledCorrectly;