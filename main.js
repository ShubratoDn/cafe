var nextIcon = "<i class=' fa fa-angle-right'></i>";
var prevIcon = "<i class=' fa fa-angle-left'></i>";

$('.menu-item .owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    margin:10,
    dots:true,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    navText:[
        prevIcon,
        nextIcon
    ],
    responsive:{
        0:{
            items:1,
        },
        675:{
            items:2,
        },
        992:{
            items:3,
        },
        1100:{
            items:4,
        },
        1200:{
            items:5,
        },
        
    }
})