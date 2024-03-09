var swiper = new Swiper(".slide-content ", {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    centerSlide: true,
    fade: 'true',
    gragCursor: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
    mousewheel: true,
    keyboard: true,

});