export const initDemo = () => {
  function tabsDemo() {
    const tabsReviewsBlocks = document.querySelectorAll('[data-tabs-demo]');

    tabsReviewsBlocks.forEach((tabsReviewsBlock) => {
      const tabsTitles = tabsReviewsBlock.querySelectorAll('[data-tabs-demo-titles] > *');
      const tabsContents = tabsReviewsBlock.querySelectorAll('[data-tabs-demo-body] > *');

      tabsTitles.forEach((tabTitle, index) => {
        tabTitle.setAttribute('data-tabs-demo-title', index);
        tabsContents[index].setAttribute('data-tabs-demo-item', index);

        tabsContents[index].hidden = !tabTitle.classList.contains('js-demo-tab-active');

        tabTitle.addEventListener('click', () => {
          activateTab(tabsReviewsBlock, index);
        });
      });
    });

    function activateTab(tabsReviewsBlock, activeIndex) {
      const tabsTitles = tabsReviewsBlock.querySelectorAll('[data-tabs-demo-title]');
      const tabsContents = tabsReviewsBlock.querySelectorAll('[data-tabs-demo-item]');

      tabsTitles.forEach((tabTitle, index) => {
        if (index === activeIndex) {
          tabTitle.classList.add('js-demo-tab-active');
          tabsContents[index].hidden = false;
        } else {
          tabTitle.classList.remove('js-demo-tab-active');
          tabsContents[index].hidden = true;
        }
      });
    }
  }

  tabsDemo();

  const demoSwiper = new Swiper('.js-swiper-demo', {
    observer: true,
    observeParents: true,
    loop: false,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    speed: 600,
    parallax: true,
    preloadImages: false,

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      autoHeight: true,
    },

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
      disabledClass: 'swiper-button-disabled',
    },

    breakpoints: {
      320: {
        slidesPerView: 1.2,
        slidesPerGroup: 1.2,
        spaceBetween: 30,
      },

      479: {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 30,
      },
    }
  });
}