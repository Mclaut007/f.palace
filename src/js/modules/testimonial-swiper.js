import Swiper from "swiper/bundle";

export default function testimonialSwiper() {
  const swiper = new Swiper(".testimonial-swiper", {
    loop: true,

    navigation: {
      nextEl: ".testimonial-swiper-button-next",
      prevEl: ".testimonial-swiper-button-prev",
    },

    spaceBetween: 30,

    breakpoints: {
      400: {
        spaceBetween: 40,
      },
      576: {
        spaceBetween: 44,
      },
    },
  });
}
