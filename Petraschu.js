$(document).ready(function () {
    
  $("header>nav ul li:nth-child(1),.sub_open").on({
    mouseenter:function(){
      $(".sub_nav").stop(true).fadeIn()
    },
    mouseleave:function(){
      $(".sub_nav").stop(true).fadeOut()
    }
  });

  $(".menu_button").click(function(){
    $(".open_nav").toggleClass("open");
});

});

var swiper = new Swiper(".first", {
    speed:600,
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
    autoplay: {
        delay:3000,
        disableOnInteraction: false
    },
    loop : true,
    
  });

  var swiper = new Swiper(".second", {
    speed:600,
    slidesPerView: 1.5,
    spaceBetween: 10,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      820: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },
    autoplay: {
      delay:1800,
      disableOnInteraction: false
  },
  loop : true
  });


// main slide



