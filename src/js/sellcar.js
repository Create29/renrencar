///////////////////////////////////////////////////////////
// 粘性导航
const sectionHeroEl = document.querySelector(".back");
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
    rootMargin: "-110px",
  }
);
obs.observe(sectionHeroEl);
