// Glow effect on hover for gallery images
const galleryImages = document.querySelectorAll(".gallery img");
galleryImages.forEach((image) => {
  image.addEventListener("mouseover", () => {
    image.style.boxShadow = "0px 0px 15px 5px #f4a261";
  });
  image.addEventListener("mouseout", () => {
    image.style.boxShadow = "none";
  });
});
