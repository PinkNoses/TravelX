import loader from "./modules/loader.js";
import mobileNav from "./modules/mobile-nav.js";

loader();
mobileNav();

// import Swiper bundle with all modules installed
import Swiper from "swiper/bundle";

// import styles bundle
import "swiper/css/bundle";

// init Swiper:
const swiper = new Swiper(".swiper", {
  // Optional parameters
  parallax: true,
  loop: true,
  speed: 1000,

  keyboard: {
    enabled: true,
  },

  // If we need pagination
  pagination: {
    el: ".slide-control__count",
    type: "fraction",
    formatFractionCurrent: addZero,
    formatFractionTotal: addZero,
  },

  // Navigation arrows
  navigation: {
    nextEl: "#sliderNext",
    prevEl: "#sliderPrev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});

function addZero(num) {
  return num > 9 ? num : "0" + num;
}
