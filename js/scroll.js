// fixed-top-animated-menu.1.0.js
var spacetop = 106;
$(document).on("click", ".scrollspy .scrollspy__item a", function (event) {
  "use strict";
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top - spacetop,
    },
    500
  );
});
$(document).on("click", "a.anchor", function (event) {
  "use strict";
  event.preventDefault();

  $("html, body").animate(
    {
      scrollTop: $($.attr(this, "href")).offset().top - spacetop,
    },
    500
  );
});
//changing color of menu elements when scrolling
$(function () {
  "use strict";
  $(window).bind("scroll", function () {
    $(".anchor").each(function () {
      var anchored = $(this).attr("id"),
        position = $(this).position().top - $(window).scrollTop(),
        targetOffset = $(this).offset().top - 500;
        
      if ($(window).scrollTop() > targetOffset) {
        $(".scrollspy").find(".scrollspy__item").removeClass("active");
        $(".scrollspy")
          .find('*[data-anchor="' + anchored + '"]')
          .addClass("active");
      }

      // if ($(window).scrollTop() < 20) {
      //   $(".scrollspy").find(".scrollspy__item").removeClass("active");
      // }
    });
  });
});
window.onscroll = function() {scrollFunction()};
      
function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

// const li = document.querySelectorAll('.menu-item');
// const sec = document.querySelectorAll('section');

// function activeMenu(){
//   let len = sec.length;
//   while(--len && window.scrollY + 97 < sec[len].offsetTop){}
//   li.forEach(ltx => ltx.classList.remove("active"));
//   li[len].classList.add("active");
// }
// activeMenu();
// window.addEventListener("scroll",activeMenu);