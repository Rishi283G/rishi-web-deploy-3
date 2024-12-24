// Smooth Scroll Animation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Additional Animation for Hobbies
const hobbyCards = document.querySelectorAll(".hobby-card");
hobbyCards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.style.transform = "scale(1.2)";
  });
  card.addEventListener("mouseout", () => {
    card.style.transform = "scale(1)";
  });
});
