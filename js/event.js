$('.events-mobile').slick({
    slidesToShow:2,
    scrollToShow:1,
    infinite: true,
    arrows: false,
    dots: true,
    responsive:[
        {
            breakpoint: 768,
            settings:{
                slidesToShow: 1,
                scrollToShow: 1,
                infinite: true,
                arrows: false,
                dots: true
            }
        }
    ]

})