// ? function that displays my popup in the corner of the screen

function toastifyElement(textToastify, colorToastify) {
    Toastify({
        text: textToastify,
        duration: 800,
        newWindow: false,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: colorToastify,
            fontSize: '1.8rem',
            borderRadius: '1.5rem'

        },
    }).showToast();
}


export default toastifyElement;