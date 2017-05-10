$(document).ready(function(){
    var carouselStarted = false;
    
    function mod() {
        if (Modernizr.mq('(max-width: 1024px)') && !carouselStarted) {
            carousel.start();
        }else if (carouselStarted){
            carousel.stop();
        }
    }

    var carousel = {
        slides: ["#testimonial0", "#testimonial1"],        
        start: function() {
            var currentIndex = 0;
            $(slides[this.currentIndex]).fadeIn();

            carouselTimer = setInterval (function(){
                console.log("start");
                $(slides[this.currentIndex]).fadeOut( function() {
                    currentIndex++;
                    if (currentIndex < this.slides.length) {
                        $(slides[this.currentIndex]).fadein();
                    } else {
                        currentIndex = 0;
                        $(slides[this.currentIndex]).fadein();
                    }                    
                });                
            },5000);
        },
        stop: function() {
            console.log("stop");
            clearInterval(carouselTimer);
            
        }
    };

    $(window).resize(mod());

});