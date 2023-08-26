var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 75,
    loop:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });