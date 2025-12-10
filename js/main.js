const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
if (mobileMenu.classList.contains("max-h-0")) {
    mobileMenu.classList.remove("max-h-0");
    mobileMenu.classList.add("max-h-screen");
} else {
    mobileMenu.classList.remove("max-h-screen");
    mobileMenu.classList.add("max-h-0");
}
});

// Landing page typing
new TypeIt("#typing-text-landing", {
  strings: ["Web Developer", "Frontend Designer", "UI/UX Enthusiast"],
  speed: 100,
  breakLines: false,
  deleteSpeed: 50,
  waitUntilVisible: true,
  loop: true,
  nextStringDelay: 1000,
  cursorChar: "|"
}).go();

// About section typing (optional)
new TypeIt("#typing-text-about", {
  strings: ["Web Developer", "Frontend Designer", "UI/UX Enthusiast"],
  speed: 100,
  breakLines: false,
  deleteSpeed: 50,
  waitUntilVisible: true,
  loop: true,
  nextStringDelay: 1000,
  cursorChar: "|"
}).go();