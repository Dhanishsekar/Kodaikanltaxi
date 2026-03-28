const HERO_SLIDES = [
  "img/hero1.JPEG",
  "img/hero2.JPEG",
  "img/hero3.PNG",
];

const VEHICLE_IMAGES = {
  INNOVA: "img/INNOVA.webp",
};

const ROUTE_IMAGES = {
  kodairoad:   "img/kodairoad.jpg",
  dindigul:    "img/Dindigul.jpg",
  madurai:     "img/madurai.jpg",
  coimbatore:  "img/coimbatore.jpg",
  trichy:      "img/trichy.jpg",
  cochin:      "img/cochin.jpg",
  munnar:      "img/munnar.jpg",
  chennai:     "img/chennai.jpg",
  kanyakumari: "img/kanyakumari.jpg",
};

document.addEventListener("DOMContentLoaded", function () {
  // Hero slides
  const slides = document.querySelectorAll(".cslide[data-slide]");
  slides.forEach(function (slide, index) {
    if (HERO_SLIDES[index]) {
      slide.style.background = "url('" + HERO_SLIDES[index] + "') center/cover no-repeat";
    }
  });

  // Vehicle images
  Object.entries(VEHICLE_IMAGES).forEach(function ([key, src]) {
    const el = document.querySelector('[data-vehicle="' + key + '"]');
    if (el) { el.src = src; }
  });
});
