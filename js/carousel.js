

//carousel

//Array storage class
let carouselArr = [];

    document.addEventListener("DOMContentLoaded", function(event) {
    
        Carousel.Start(carouselArr);
    });


//class Carousel
class Carousel { 

    constructor (){
        this.imagem
        this.texto
        this.link

    }

    
      
    static Start(arr){
        if(arr){

            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                Carousel._interval = setInterval(function(){ Carousel.Next(); },5000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }

    static Next(){
        
    }
};
