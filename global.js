document.querySelectorAll(".recipe-card").forEach(card => {
  card.addEventListener("click", () => {
    window.location.href = "../recipedetails/index.html";
  });
});