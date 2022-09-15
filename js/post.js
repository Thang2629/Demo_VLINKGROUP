$('.events-post').slick({
    slidesToShow:2,
    scrollToShow:1,
    infinite: true,
    prevArrow:`<button type='button' class='slick-prev pull-left'><img src="../images/prevArrow.svg"/></button>`,
    nextArrow: `<button type='button' class='slick-next pull-right'><img src="../images/nextArrow.svg"/></button>`,
    dots: true,
    responsive:[
        {
            breakpoint: 1024,
            settings:{
                slidesToShow: 1,
                scrollToShow: 1,
                infinite: true,
                prevArrow:`<button type='button' class='slick-prev pull-left'><img src="../images/prevArrow.svg"/></button>`,
                nextArrow: `<button type='button' class='slick-next pull-right'><img src="../images/nextArrow.svg"/></button>`,
                dots: true
            }
        },
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
});