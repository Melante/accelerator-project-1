const swiper = new Swiper('.reviews__swiper', {

  // Optional parameters
  direction: 'horizontal',
  loop: false,
  speed: 500,
  slidesPerView: 1,
  centeredSlides: 1,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
