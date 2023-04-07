var swiper = new Swiper(".mySwiper", {
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

///////////////////////////////////////////////////////////
// 粘性导航
const sectionHeroEl = document.querySelector(".details-section");
const main = document.querySelector(".main");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    if (ent.isIntersecting === false) {
      main.classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      main.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "200px",
  }
);
obs.observe(sectionHeroEl);

document.querySelector(".back-icon-box").addEventListener("click", function () {
  window.history.back();
});
