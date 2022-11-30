$(function(){

    // Banner Slider Part
    $(".ban_main").slick({
        slidesToShow:1,
        slidesToScroll:1,
        speed: 900,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 768,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0',
                slidesToShow: 1,
                slidesToScroll:1,
              }
            },
            {
              breakpoint: 575,
              settings: {
                arrows: false,
                centerMode: true,
                centerPadding: '0px',
                slidesToShow: 1,
                slidesToScroll:1,
              }
            }
          ]
    })

    // Counter Part Start

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    $(".quote_main").slick({
        slidesToShow:1,
        slidesToScroll:1,
        speed: 1000,
        nextArrow: ".next",
        prevArrow: ".prev", 
        centerPadding: "0px"
    })

    $(".testi_main").slick({
        slidesToShow:1,
        slidesToScroll:1,
        speed: 1000,
        nextArrow: ".nexxt",
        prevArrow: ".preev", 
        centerPadding: "0px"
    })
    
})