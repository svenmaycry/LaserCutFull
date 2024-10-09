export const initSpoilers = () => {
  // Модуль работы со спойлерами.
  function spoilers() {
    const spoilers = document.querySelectorAll("[data-spoiler]");

    if (spoilers.length > 0) {
      const breakpoint = 1024;
      const matchMedia = window.matchMedia(`(max-width: ${breakpoint}px)`);

      initSpoilers(spoilers, matchMedia);

      matchMedia.addEventListener('change', () => initSpoilers(spoilers, matchMedia));

      function initSpoilers(spoilersArray, matchMedia) {
        spoilersArray.forEach(spoiler => {

          const mainNavItem = spoiler.closest(".js-spoiler-item");

          if (mainNavItem) {
            if (matchMedia.matches || spoiler.dataset.spoiler === "click") {
              spoiler.addEventListener("click", toggleSpoiler);
              spoiler.removeEventListener("mouseover", showSpoiler);
              mainNavItem.removeEventListener("mouseleave", hideSpoiler);
            } else {
              spoiler.removeEventListener("click", toggleSpoiler);
              spoiler.addEventListener("mouseover", showSpoiler);
              mainNavItem.addEventListener("mouseleave", hideSpoiler);
            }
          }
        });
      }

      function showSpoiler(e) {
        const el = e.target.closest("[data-spoiler]");
        if (el) {
          const oneSpoiler = el.hasAttribute("data-one-spoiler");

          if (oneSpoiler && !el.classList.contains("--spoiler-active")) {
            hideSpoiler();
          }

          el.classList.add("--spoiler-active");
          e.preventDefault();
        }
      }

      function toggleSpoiler(e) {
        const el = e.target.closest("[data-spoiler]");
        if (el) {
          const oneSpoiler = el.hasAttribute("data-one-spoiler");

          if (oneSpoiler && !el.classList.contains("--spoiler-active")) {
            hideSpoiler();
          }

          el.classList.toggle("--spoiler-active");
          e.preventDefault();
        }
      }

      function hideSpoiler() {
        const activeSpoilers = document.querySelectorAll("[data-spoiler].--spoiler-active");

        if (activeSpoilers.length > 0) {
          activeSpoilers.forEach(activeSpoiler => {
            activeSpoiler.classList.remove("--spoiler-active");
          });
        }
      }

      function handleClickOutside(e) {
        if (!e.target.closest(".js-spoiler-item")) {
          hideSpoiler();
        }
      }

      function handleKeydown(e) {
        if (e.key === 'Escape') {
          hideSpoiler();
        }
      }

      document.addEventListener("click", handleClickOutside);
      document.addEventListener("keydown", handleKeydown);
    }
  }

  spoilers();
}