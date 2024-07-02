const containerTestimonialImage = document.querySelector('.depositions__image');
const containerTestimonialName = document.querySelector('.depositions__name');
const containerTestimonialText = document.querySelector('.depostions__text');


export function teste({target}) {
    const numberButton = target.textContent;

    if (numberButton == '1') {
        console.log('1');
    }

    if (numberButton == '2') {
        console.log('2');
    }

    if (numberButton == '3') {
        console.log('3');
    }
}