const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  speed: 1500,
  slidesPerView: 3,
  centeredSlides: true,
  //slidesPerGroup: 3,
  spaceBetween: 26,

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
});
