$( document ).ready(function() {
    $(".owl-carousel").owlCarousel({
        
        margin:10,
        nav:false,
        navClass:["slider__nav--left", "slider__nav--right"],
        responsive: {
            0:{
                items:1
            },
            1000:{
                items:2
            },
            1500:{
                items:4
            }
            
        }
        
    })
    
  });