export const initMainCategorisSwiper = () => {
  const categoriesSwiper = new Swiper('.js-swiper-categories', {
    // Optional parameters
    observer: true,
    observeParents: true,
    loop: false,
    slidesPerView: 3.7,
    slidesPerGroup: 3.7,
    spaceBetween: 0,
    speed: 900,
    parallax: true,
    preloadImages: false,

    // Navigation arrows
    navigation: {
      nextEl: '.js-swiper-button-next--categories',
      prevEl: '.js-swiper-button-prev--categories',
      disabledClass: 'swiper-button-disabled',
    },

    // Брейкпоинты

    breakpoints: {
      320: {
        slidesPerView: 3.7,
        slidesPerGroup: 3.7,
        spaceBetween: 0,
      },
      340: {
        slidesPerView: 4.3,
        slidesPerGroup: 4.3,
      },
      479: {
        slidesPerView: 5.7,
        slidesPerGroup: 5.7,
      },
      606: {
        slidesPerView: 6.7,
        slidesPerGroup: 6.7,
      },
      700: {
        slidesPerView: 7.7,
        slidesPerGroup: 7.7,
      },
      900: {
        slidesPerView: 6.7,
        slidesPerGroup: 6.7,
      },
      1190: {
        slidesPerView: 8.7,
        slidesPerGroup: 8.7,
      },
      1280: {
        slidesPerView: 9,
        slidesPerGroup: 9,
        spaceBetween: 10,
      },
      1440: {
        slidesPerView: 10,
        slidesPerGroup: 5,
        spaceBetween: 10,
      },
      1700: {
        slidesPerView: 11,
        slidesPerGroup: 5,
        spaceBetween: 25,
      },
    }

  });
}