var swiper = new Swiper(".slide-content ", {
    slidesPerView: 3,
    spaceBetween: 25,
    loop: true,
    centerSlides: true,
    fade:'true',
    // gragCursor: true,
    cssMode: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
  });