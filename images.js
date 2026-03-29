const HERO_SLIDES = [
  "img/hero1.JPEG",
  "img/hero2.JPEG",
  "img/hero3.PNG",
];

const VEHICLE_IMAGES = {
  INNOVA:          "img/INNOVA.webp",
  INDIGO:          "img/indigo.avif",
  ETIOS:           "img/etios.jpg",
  TAVERA:          "img/tavera.avif",
  TEMPO_TRAVELLER: "img/tempo traveller.jpg",
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

const SPOT_IMAGES = {
  // Tour 1 — Valley
  coakers_walk:      "img/Coaker's Walk.jpg",
  upper_lake_view:   "img/Upper Lake View.jpg",
  pambar_falls:      "img/Pambar Falls.jpg",
  green_valley:      "img/Green Valley View.jpg",
  golf_course:       "img/Golf Course.jpg",
  pillar_rocks:      "img/Pillar Rocks.jpg",
  devils_kitchen:    "img/Devil's Kitchen.jpg",
  pine_forest:       "img/Pine Forest.jpg",
  moier_point:       "img/Moier Point.jpg",
  bryant_park:       "img/Bryant Park.jpg",
  kodai_lake_drop:   "img/Kodai Lake Drop.jpg",

  // Tour 2 — Village
  gundar_falls:          "img/Gundar Falls.jpg",
  palani_hills:          "img/Palani Hills View.jpg",
  mahalakshmi_temple:    "img/Mahalakshmi Temple.jpg",
  poomparai_village:     "img/Poomparai Village View.jpg",
  poombarai_temple:      "img/Poombarai Village Murugan Temple.jpg",
  mannavanur_sheep_farm: "img/Mannavanur Sheep Farm.jpg",
  mannavanur_lake:       "img/Mannavanur Lake.jpg",

  // Tour 3 — Forest
  silent_valley:     "img/Silent Valley View.jpg",
  berijam_lake_view: "img/Berijam Lake View.webp",
  caps_fly_valley:   "img/Cap's Fly Valley.jpg",
  berijam_lake:      "img/Berijam Lake.jpg",
  medicine_forest:   "img/Mathi Kettan Sola.jpg",

  // Tour 4 — Trekking
  la_salette_church: "img/La Salette Church.jpg",
  old_tree:          "img/500 Year Old Tree.jpg",
  mountain_beauty:   "img/Mountain Beauty.jpg",
  dolphins_nose:     "img/Dolphins Nose.jpg",
  vattakanal_falls:  "img/Vattakanal Falls.jpg",
  echo_rocks:        "img/Echo Rocks.jpg",
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
