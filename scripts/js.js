// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:30,
//     responsiveClass:true,
//     responsive:{
//         0:{
//             items:1,
//
//         },
//         600:{
//             items:3,
//             nav:false,
//             loop:true,
//         },
//         1000:{
//             items:5,
//             loop:true,
//             nav:true,
//         }
//     }
// })
//
//
//
$('.owl-carousel').owlCarousel({
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            margin:10,

        },
        600:{
            items:3,
            nav:false,
            margin:30,

        },
        1000:{
            items:5,
            nav:true,
            loop:true,
            margin:30,

        },
        1199:{
            items:5,
            nav:true,
            loop:true,
            margin:30,

        }
    }
})

$('.close').click(function () {
    $('.od_promo_banner').slideUp(500);
})