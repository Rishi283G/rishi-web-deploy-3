// Dynamic glowing effect on hover for genre tags
const genres = document.querySelectorAll(".genre-tag");
genres.forEach((tag) => {
  tag.addEventListener("mouseover", () => {
    tag.style.boxShadow = "0px 0px 15px 5px #FF6F91";
  });
  tag.addEventListener("mouseout", () => {
    tag.style.boxShadow = "none";
  });
});
