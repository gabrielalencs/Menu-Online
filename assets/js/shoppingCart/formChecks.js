import toastifyElement from '../menu/toastifyElement.js';

import {
    zipCodeInput, addressInput,
    neighborhoodInput, numberinput,
    ufInput, cityInput
} from './fillAddress.js';

import { goToRevisionStep } from './cartSteps.js'


function arrivesFormFilledCorrectly() {
    if (addressInput.value &&
        neighborhoodInput.value &&
        numberinput.value &&
        cityInput.value &&
        zipCodeInput.value) {

        goToRevisionStep()

    } else if (
        addressInput.value &&
        neighborhoodInput.value &&
        numberinput.value &&
        cityInput.value &&
        !zipCodeInput.value) {

        goToRevisionStep()

    } else if (!addressInput.value &&
        !neighborhoodInput.value &&
        !numberinput.value &&
        !cityInput.value &&
        !zipCodeInput.value) {

        toastifyElement('Informe o CEP!', '#E74C3C');

    } else if (addressInput.value &&
        neighborhoodInput.value &&
        !numberinput.value &&
        cityInput.value &&
        zipCodeInput.value) {

        toastifyElement('Informe o número!', '#E74C3C');

    } else if (addressInput.value &&
        neighborhoodInput.value &&
        !numberinput.value &&
        cityInput.value &&
        !zipCodeInput.value) {

        toastifyElement('Informe o número!', '#E74C3C');

    } else {
        if (!addressInput.value) {
            toastifyElement('Informe o endereço por favor', '#E74C3C');
        }

        if (!neighborhoodInput.value) {
            toastifyElement('Informe o bairro por favor', '#E74C3C');
        }

        if (!cityInput.value) {
            toastifyElement('Informe a cidade por favor', '#E74C3C');
        }

        if (!ufInput.value) {
            toastifyElement('Informe a UF por favor', '#E74C3C');
        }
    }
}

export default arrivesFormFilledCorrectly;