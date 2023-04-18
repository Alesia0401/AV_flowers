const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  speed: 3000,
  slidesPerView: 3,
  spaceBetween: 22,
  //количество пролистываемых слайдов
  slidesPerGroup: 3,

  //Буллеты
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    //dynamicBullets: true,
  },

  //Стрелки
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  //simulateTouch: false,

  //slideToClickedSlide: true,
  breakpoints: {
    100: {
      speed: 1200,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      speed: 1200,
      slidesPerView: 2,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});
