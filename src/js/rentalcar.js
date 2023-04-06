"use strict";
const mainNavBox = document.querySelector(".main-nav-box");
const allItem = document.querySelectorAll(".main-nav-item");
const addressTextBadge = document.querySelector(".address-text-badge");
const allTextBadge = document.querySelectorAll(".text-badge-item");

const clearAllActive = function () {
  allItem.forEach((item) => item.classList.remove("main-nav-item--active"));
};

const clearTextBadge = function () {
  allTextBadge.forEach((item) =>
    item.classList.remove("text-badge-item--active")
  );
};

mainNavBox.addEventListener("click", function (e) {
  const item = e.target.closest(".main-nav-item");
  if (!item) return;
  clearAllActive();
  item.classList.add("main-nav-item--active");
});

addressTextBadge.addEventListener("click", function (e) {
  const badge = e.target.closest(".text-badge-item");
  if (!badge) return;
  clearTextBadge();
  badge.classList.add("text-badge-item--active");
});

///////////////////////////////////////////////////////////
// 粘性导航
const sectionHeroEl = document.querySelector(".choose-address-section");
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
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
