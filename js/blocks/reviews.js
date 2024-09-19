export const initReviews = () => {
// Модуль работы с табами.
  function tabsReviews() {
    const tabsReviewsBlocks = document.querySelectorAll('[data-tabs-reviews]');

    tabsReviewsBlocks.forEach((tabsReviewsBlock) => {
      const tabsTitles = tabsReviewsBlock.querySelectorAll('[data-tabs-reviews-titles] > *');
      const tabsContents = tabsReviewsBlock.querySelectorAll('[data-tabs-reviews-body] > *');

      tabsTitles.forEach((tabTitle, index) => {
        tabTitle.setAttribute('data-tabs-reviews-title', index);
        tabsContents[index].setAttribute('data-tabs-reviews-item', index);

        tabsContents[index].hidden = !tabTitle.classList.contains('js-reviews-tab-active');

        tabTitle.addEventListener('click', () => {
          activateTab(tabsReviewsBlock, index);
        });
      });
    });

    function activateTab(tabsReviewsBlock, activeIndex) {
      const tabsTitles = tabsReviewsBlock.querySelectorAll('[data-tabs-reviews-title]');
      const tabsContents = tabsReviewsBlock.querySelectorAll('[data-tabs-reviews-item]');

      tabsTitles.forEach((tabTitle, index) => {
        if (index === activeIndex) {
          tabTitle.classList.add('js-reviews-tab-active');
          tabsContents[index].hidden = false;
        } else {
          tabTitle.classList.remove('js-reviews-tab-active');
          tabsContents[index].hidden = true;
        }
      });
    }
  }

  tabsReviews();

  const reviewsSwiper = new Swiper('.js-swiper-reviews', {
    // Optional parameters
    observer: true,
    observeParents: true,
    loop: false,
    slidesPerView: 3,
    slidesPerGroup: 3,
    spaceBetween: 20,
    speed: 600,
    parallax: true,
    preloadImages: false,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      autoHeight: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      disabledClass: 'swiper-button-disabled',
    },

    // Брейкпоинты

    breakpoints: {
      320: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 5,
      },
      479: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 5,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 10,
      },
      992: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 10,
      },
      1268: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 20,
      },
    }
  });
}