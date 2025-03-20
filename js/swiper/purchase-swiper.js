export const initPurchaseSwiper = () => {
  const purchaseSwiper = new Swiper('.js-swiper-purchase-order', {
    observer: true,
    observeParents: true,
    loop: false,
    slidesPerView: 1.1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    speed: 600,
    parallax: true,
    preloadImages: false,

    navigation: {
      prevEl: '.js-swiper-button-prev--purchase-order',
      nextEl: '.js-swiper-button-next--purchase-order',
      disabledClass: 'swiper-button-disabled',
    },

    breakpoints: {
      320: {
        slidesPerView: 1.1,
        slidesPerGroup: 1,
      },
      460: {
        slidesPerView: 1.2,
        slidesPerGroup: 1,
      },
      580: {
        slidesPerView: 1.7,
        slidesPerGroup: 1,
      },
      815: {
        slidesPerView: 1.1,
        slidesPerGroup: 1,
      },
      955: {
        slidesPerView: 1.3,
        slidesPerGroup: 1,
      },
      1100: {
        slidesPerView: 1.5,
        slidesPerGroup: 1,
      },
      1400: {
        slidesPerView: 1.8,
        slidesPerGroup: 1,
      },
    }
  });
}