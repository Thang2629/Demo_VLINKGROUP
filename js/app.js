$( window ).scroll(function() {
    if($(window).scrollTop()){
      $('.header').css({'border-bottom': '1px solid rgba(255, 255, 255, 0.05)'}); 
      $('.header').css({'background': '#071e3e'}); 
      $('.header-logo').css({'width': '85'}); 
      
    }else{
        $('.header').css({'border-bottom': 'none'});
        $('.header-logo').css({'width': '120px'}); 
        $('.header').css({'background': '#061529'}); 
    }
});
// var spacetop = 0;
// $(document).on('click', '.menu .menu-item a', function (event) {
//     "use strict";
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top - spacetop
//     }, 0);
// });
// $(document).on('click', 'a.anchorlink', function (event) {
//     "use strict";
//     event.preventDefault();

//     $('html, body').animate({
//         scrollTop: $($.attr(this, 'href')).offset().top - spacetop
//     }, 500);
// });

$('.is-mobile').slick({
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

const toggle = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".menu-close");
const menu = document.querySelector(".menu");
const activeMobile = document.querySelector(".active");
const activeClass = "is-show";
toggle.addEventListener("click", function () {
  menu.classList.add(activeClass);
});
closeBtn.addEventListener("click", function () {
  menu.classList.remove(activeClass);
});
activeMobile.addEventListener("click", function () {
  menu.classList.remove(activeClass);
});
window.addEventListener("click", function (e) {
  if ( menu.contains(e.target) || !e.target.matches(".menu-toggle")) {
    menu.classList.remove(activeClass);
  }
});
particlesJS.load('particles-js', '../particlesjs-config.json', function() {
  console.log('callback - particles.js config loaded');
});
