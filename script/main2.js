$( document ).ready(function() {
    $(".owl-carousel2").owlCarousel({
        
        margin:10,
        nav:false,
        navClass:["slider__nav--left", "slider__nav--right"],
        responsive: {
            0:{
                items:1
            },
            700:{
                items:2
            },
            1200:{
                items:4
            }
            
        }
        
    })
    
  });
