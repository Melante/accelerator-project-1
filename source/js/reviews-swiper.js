import Swiper from 'swiper';
import 'swiper/css';
import { Navigation } from 'swiper/modules';

const reviewsSwiper = new Swiper('.reviews__swiper', {
  modules: [Navigation],
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

reviewsSwiper.slideReset();
