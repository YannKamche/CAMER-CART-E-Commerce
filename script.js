/*-----------SWIPER LIBRARY FOR THE BANNER SECTION-----------*/
const swiper = new Swiper('.swiper', {
    spaceBetween: 20,
    effect: "coverflow",
    grabCursor: true,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });