$('.owl-carousel').owlCarousel({
    loop:true,
    margin:30,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,

        },
        600:{
            items:3,
            nav:false,
            loop:true,
        },
        1000:{
            items:5,
            loop:true,
            nav:true,
        }
    }
})



