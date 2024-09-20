export const initMainPersonalSwiper = () => {
  const bannerSwiper = new Swiper('.js-swiper-banner', {
    // Optional parameters
    observer: true,
    observeParents: true,
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    speed: 900,
    parallax: true,
    preloadImages: false,
    // autoplay: {
    //   delay: 5000,
    // },

    // If we need pagination
    pagination: {
      el: '.js-swiper-pagination--banner',
      clickable: true,
      autoHeight: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.js-swiper-button-next--banner',
      prevEl: '.js-swiper-button-prev--banner',
    },

    // Брейкпоинты

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      992: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      1268: {
        slidesPerView: 1,
        slidesPerGroup: 1
      },
    }

  });

  const aboutSwiper = new Swiper('.js-swiper-about', {
    // Optional parameters
    observer: true,
    observeParents: true,
    loop: false,
    slidesPerView: 1.8,
    slidesPerGroup: 1.8,
    spaceBetween: 15,
    speed: 900,
    parallax: true,
    preloadImages: false,
    // autoplay: {
    //   delay: 3000,
    // },

    // Navigation arrows
    navigation: {
      nextEl: '.js-swiper-button-next--about',
      prevEl: '.js-swiper-button-prev--about',
      disabledClass: 'swiper-button-disabled',
    },

    // Брейкпоинты

    breakpoints: {
      320: {
        slidesPerView: 1.8,
        slidesPerGroup: 1.8,
      },
      479: {
        slidesPerView: 2.2,
        slidesPerGroup: 2.2,
      },
      768: {
        slidesPerView: 2.2,
        slidesPerGroup: 2.2,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1268: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
      1440: {
        slidesPerView: 3,
        slidesPerGroup: 3,
      },
    }

  });
}