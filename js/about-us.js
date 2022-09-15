$('.team-mobile').slick({
    slidesToShow:1,
    scrollToShow:1,
    infinite: true,
    arrows: false,
    dots: true,
    responsive:[
        {
            breakpoint: 450,
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