const phasesContainer = document.querySelector('.cart__phases-container');
const iconStageTwo = document.querySelector('.stage-two');
const iconStageThree = document.querySelector('.stage-three');

export function markIconStepTwo() {
    iconStageTwo.classList.add('phase-marked');

    phasesContainer.classList.add('dash-80');
    phasesContainer.classList.remove('dash-40');
}

export function removeMarkupIconStepTwo() {
    iconStageTwo.classList.remove('phase-marked');

    phasesContainer.classList.remove('dash-80');
    phasesContainer.classList.add('dash-40');
}

export function markIconStepThree() {
    iconStageThree.classList.add('phase-marked');
}

export function removeMarkupIconStepThree() {
    iconStageThree.classList.remove('phase-marked');
}
