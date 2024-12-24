// Glow effect on hover for book cards
const bookCards = document.querySelectorAll(".book-card");
bookCards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.style.boxShadow = "0px 0px 15px 5px #ffd700";
  });
  card.addEventListener("mouseout", () => {
    card.style.boxShadow = "0px 0px 10px 2px #ffd700";
  });
});
