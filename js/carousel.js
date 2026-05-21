

// carousel

// Array storage class
let carouselArr = [];

// class Carousel
class Carousel {

    constructor(image, title, link) {
        this.image = image;
        this.title = title;
        this.link = link;
    }

    static Start(arr) {
        
         if (Carousel._interval) {
        clearInterval(Carousel._interval);
    }
        
        if (arr.length > 0) {
            Carousel._sequence = 0;
            Carousel._size = arr.length;
            Carousel._items = arr;
            Carousel.Mostrar();
            Carousel._interval = setInterval(function () { Carousel.Proximo(); }, 5000);
        }
    }

    static Mostrar() {
        const item = Carousel._items[Carousel._sequence];
        const container = document.getElementById('carousel');
        const titleContainer = document.getElementById('carousel-title');

        if (container && titleContainer) {
            container.innerHTML = '<img src="img/' + item.image + '" alt="' + item.title + '" />';
            titleContainer.textContent = item.title;
        }
    }

    static Proximo() {
        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
        Carousel.Mostrar();
    }
}
       

document.addEventListener('DOMContentLoaded', function () {
    Carousel.Start(carouselArr);

    const button_direito = document.querySelector('.butao_direito');
    const button_esquerdo = document.querySelector('.butao_esquerdo');

    if (button_direito) {
        button_direito.onclick = function () {
            botao_direito();
        };
    }

    if (button_esquerdo) {
        button_esquerdo.onclick = function () {
            botao_esquerdo();
        };
    }
});

function botao_direito() {
    if (!Carousel._items || !Carousel._size) {
        return;
    }

    if (Carousel._interval) {
        clearInterval(Carousel._interval);
    }

    Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;
    Carousel.Mostrar();
    Carousel._interval = setInterval(function () { Carousel.Proximo(); }, 5000);
}

function botao_esquerdo() {
    if (!Carousel._items || !Carousel._size) {
        return;
    }

    if (Carousel._interval) {
        clearInterval(Carousel._interval);
    }

    Carousel._sequence = (Carousel._sequence - 1 + Carousel._size) % Carousel._size;
    Carousel.Mostrar();
    Carousel._interval = setInterval(function () { Carousel.Proximo(); }, 5000);
}


