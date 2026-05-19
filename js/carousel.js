

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

        if (arr) {
            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel._items = arr;
                Carousel.Proximo(); // start
                Carousel._interval = setInterval(function () { Carousel.Proximo(); }, 5000);
            }
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Proximo() {
        const item = Carousel._items[Carousel._sequence];
        const container = document.getElementById('carousel');
        const titleContainer = document.getElementById('carousel-title');

        if (container && titleContainer) {
            container.innerHTML = '<img src="img/' + item.image + '" alt="' + item.title + '" />';
            titleContainer.textContent = item.title;
        }

        Carousel._sequence = (Carousel._sequence + 1) % Carousel._size;

        
        }
    }
       

document.addEventListener('DOMContentLoaded', function () {
    Carousel.Start(carouselArr);

    const button_direito = document.getElementById('butao_direito');
    const button_esquerdo = document.getElementById('butao_esquerdo');

    if(button_direito) {
        button_direito.addEventListener('click', function () {
            index = index + 1 % Carousel._size;
            clearInterval(Carousel._interval);
            Carousel.Proximo();
        });
    }
    if(button_esquerdo) {
        index = --index < 0 ? Carousel._size - 1 : index;
        button_esquerdo.addEventListener('click', function () {
            clearInterval(Carousel._interval);
            Carousel.Proximo();
        });
    }
});


