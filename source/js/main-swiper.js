const swiper = new Swiper('.swiper', {

  // Optional parameters
  direction: 'horizontal',
  loop: true,
  speed: 500,

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      centeredSlides: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween:40,

    },
    1366: {
      slidesPerView: 4,
      spaceBetween:40,
    },
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
