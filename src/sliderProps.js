import SwiperCore, {
  Autoplay,
  EffectCreative,
  EffectFade,
  Grid,
  Mousewheel,
  Navigation,
  Pagination,
  Virtual,
} from "swiper";
SwiperCore.use([
  Mousewheel,
  Pagination,
  Navigation,
  EffectFade,
  Autoplay,
  Grid,
  EffectCreative,
  Virtual,
]);

export const doraSlider = {
  serviceSlider: {
    slidesPerView: 4,
    spaceBetween: 30,
    loop: true,
    centerSlider: true,
    fade: true,
    grabCursor: true,
    navigation: {
      nextEl: ".service-swiper-button-right",
      prevEl: ".service-swiper-button-left",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      // when window width is >= 320px
      574: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 766px
      860: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 25,
      },
      // when window width is >= 1024px
      1240: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
    },
  },
  feedbackSlider: {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".feedback-right",
      prevEl: ".feedback-left",
    },
    breakpoints: {
      // when window width is >= 1024px
      1400: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  },
};
