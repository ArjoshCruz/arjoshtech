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