export const initModalPenguin = () => {

  const penguinModal = document.querySelector('.js-penguin-right');
  const penguinModalCloseBtn = document.querySelector('.js-penguin__close-btn');

  if (penguinModal) {
    document.addEventListener("DOMContentLoaded", function () {
      setTimeout(function () {
        penguinModal.style.right = "-100px";
        if (window.innerWidth <= 1023) {
          penguinModal.style.right = "-75px";
        }
      }, 4000);

      penguinModalCloseBtn.addEventListener("click", function () {
        penguinModal.style.right = "-500px";
      });
    });
  }

};
