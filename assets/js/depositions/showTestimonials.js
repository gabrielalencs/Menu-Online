const containerDepositions = document.querySelector('.depositions__comment-container');
const containerTestimonialImage = document.querySelector('.depositions__image');
const containerTestimonialName = document.querySelector('.depositions__name');
const containerTestimonialText = document.querySelector('.depostions__text');


function restartAnimation() {
    containerDepositions.classList.remove('fade-in');
    void containerDepositions.offsetWidth;
    containerDepositions.classList.add('fade-in');
}

function switchTestimonials({ target }) {
    const numberButton = target.textContent;
    let imagePath = '';
    let namePeople = '';
    let textTestimonial = '';

    switch (numberButton) {
        case '1':
            imagePath = "assets/images/alex-image.jpg";
            namePeople = 'Alex Thelles';
            textTestimonial = '  Excelente experiência! A comida é preparada com maestria pelo chef, o atendimento é profissional e a comunicação com os clientes é perfeita. Recomendo fortemente!';

            break;
        case '2':
            imagePath = "assets/images/jane-image.jpg";
            namePeople = 'Jane Frank';
            textTestimonial = 'Um jantar perfeito do começo ao fim. Comida e serviço foram tão maravilhosos que fomos dois dias seguidos. fato inédito para mim em uma viagem.';

            break;
        case '3':
            imagePath = "assets/images/michael-image.jpg";
            namePeople = 'Michael Lima';
            textTestimonial = 'A comida estava excelente e o serviço gentil nos surpreendeu! Dica: reserve umas 3 horas para ter uma experiência incrível.';

            break;
    }

    restartAnimation();

    containerTestimonialImage.style.backgroundImage = `url('${imagePath}')`;
    containerTestimonialName.textContent = namePeople
    containerTestimonialText.textContent = textTestimonial;
}


export default switchTestimonials;