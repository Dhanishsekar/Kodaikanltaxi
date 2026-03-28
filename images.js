const HERO_SLIDES = [
  "img/hero1.JPEG",
  "img/hero2.JPEG",
  "img/hero3.PNG",
];

const VEHICLE_IMAGES = {
  INNOVA: "img/INNOVA.webp",
};

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".cslide[data-slide]");
  slides.forEach(function (slide, index) {
    if (HERO_SLIDES[index]) {
      slide.style.background = "url('" + HERO_SLIDES[index] + "') center/cover no-repeat";
    }
  });
  Object.entries(VEHICLE_IMAGES).forEach(function ([key, src]) {
    const el = document.querySelector('[data-vehicle="' + key + '"]');
    if (el) { el.src = src; }
  });
});
