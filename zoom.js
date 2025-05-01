// Zoom effect on hover
const images = document.querySelectorAll(".box img");

images.forEach(img => {
  img.addEventListener("mouseenter", () => {
    img.classList.add("zoomed");
  });
  img.addEventListener("mouseleave", () => {
    img.classList.remove("zoomed");
  });
});
