// Glow effect on hover for game cards
const gameCards = document.querySelectorAll(".game-card");
gameCards.forEach((card) => {
  card.addEventListener("mouseover", () => {
    card.style.boxShadow = "0px 0px 15px 5px #FFD700";
  });
  card.addEventListener("mouseout", () => {
    card.style.boxShadow = "0px 0px 10px 2px #FFD700";
  });
});
