export const initBloggerVideoSwiper = () => {
  const videoSwiper = new Swiper('.js-swiper-blogger-video', {
    // Optional parameters
    observer: true,
    observeParents: true,
    loop: false,
    spaceBetween: 20,
    speed: 600,
    parallax: true,
    preloadImages: false,

    // Navigation arrows
    navigation: {
      nextEl: '.js-swiper-button-next--video-blogger',
      prevEl: '.js-swiper-button-prev--video-blogger',
      disabledClass: 'swiper-button-disabled',
    },

    // Брейкпоинты


    breakpoints: {
      320: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      992: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      1268: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
    }

  });

  const reelsSwiper = new Swiper('.js-swiper-blogger-reels', {
    // Optional parameters
    observer: true,
    observeParents: true,
    loop: false,
    spaceBetween: 20,
    speed: 600,
    parallax: true,
    preloadImages: false,

    // Navigation arrows
    navigation: {
      nextEl: '.js-swiper-button-next--reels-blogger',
      prevEl: '.js-swiper-button-prev--reels-blogger',
      disabledClass: 'swiper-button-disabled',
    },

    // Брейкпоинты


    breakpoints: {
      320: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        slidesPerGroup: 4,
      },
      992: {
        slidesPerView: 6,
        slidesPerGroup: 6,
      },
      1268: {
        slidesPerView: 8,
        slidesPerGroup: 8,
      },
    }

  });

}