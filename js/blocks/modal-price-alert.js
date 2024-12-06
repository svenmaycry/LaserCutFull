export const initModalPriceAlert = () => {

  const priceAlertModal = document.querySelector('.js-price-alert');
  const priceAlertModalCloseBtn = document.querySelector('.js-price-alert-close-btn');

  if (priceAlertModal) {
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(function () {
        priceAlertModal.style.bottom = "25px";
      }, 2000);

      priceAlertModalCloseBtn.addEventListener("click", function () {
        priceAlertModal.style.bottom = "-100px";
      });
    });
  }

};
