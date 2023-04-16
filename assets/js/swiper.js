const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  speed: 2800,
  slidesPerView: 3,
  centeredSlides: true,
  spaceBetween: 22,

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

  simulateTouch: false,

  slideToClickedSlide: true,
  //количество пролистываемых слайдов
  slidesPerGroup: 3,
  //настройка стартового слайда
  centeredSlides: false,
});
