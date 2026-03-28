/**
 * ============================================================
 *  images.js — KodaikanalTaxi Website Image Configuration
 * ============================================================
 *
 *  THIS IS THE ONLY FILE YOU NEED TO EDIT FOR IMAGES.
 *  Do NOT touch index.html for image changes.
 *
 *  HOW TO UPDATE AN IMAGE:
 *  ─────────────────────────────────────────────────────────
 *  Option A — Use a URL (recommended, free hosting options below):
 *    src: "https://i.imgur.com/yourimage.jpg"
 *    src: "https://res.cloudinary.com/yourname/image/upload/yourimage.jpg"
 *    src: "https://drive.google.com/uc?id=YOUR_FILE_ID"
 *
 *  Option B — Use a local file (place images in an /images/ folder):
 *    src: "images/innova.jpg"
 *
 *  STEPS:
 *  1. Upload your photo to Imgur, Cloudinary, or any host
 *  2. Copy the direct image URL
 *  3. Paste it as the src value below for the correct image
 *  4. Save this file — done!
 * ============================================================
 */


// ── HERO CAROUSEL IMAGES (the 3 sliding background photos) ──
// These appear in the big hero section at the top of the page.

const HERO_SLIDES = [
  "images/hero-slide-1.jpg",   // ← Slide 1: e.g. Kodaikanal landscape
  "images/hero-slide-2.jpg",   // ← Slide 2: e.g. mountain road photo
  "images/hero-slide-3.jpg",   // ← Slide 3: e.g. taxi / car photo
];


// ── VEHICLE IMAGES (photos in the Our Vehicles section) ──

const VEHICLE_IMAGES = {
  INNOVA: "images/innova.jpg",   // ← Toyota Innova photo
  // Add more vehicles below as needed:
  // ETIOS:  "images/etios.jpg",
  // TAVERA: "images/tavera.jpg",
};


// ============================================================
//  INTERNAL CODE — Do not edit below this line
//  This code reads the values above and applies them to the page.
// ============================================================

document.addEventListener("DOMContentLoaded", function () {

  // Apply hero slide background images
  const slides = document.querySelectorAll(".cslide[data-slide]");
  slides.forEach(function (slide, index) {
    if (HERO_SLIDES[index]) {
      slide.style.background = "url('" + HERO_SLIDES[index] + "') center/cover no-repeat";
    }
  });

  // Apply vehicle images
  Object.entries(VEHICLE_IMAGES).forEach(function ([key, src]) {
    const el = document.querySelector('[data-vehicle="' + key + '"]');
    if (el) {
      el.src = src;
    }
  });

});
