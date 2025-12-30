const searchInput = document.querySelector(".search-box input");
const animeCards = document.querySelectorAll(".anime-card");

if (searchInput) {
  searchInput.addEventListener("keyup", function () {
    const value = searchInput.value.toLowerCase();

    animeCards.forEach(card => {
      const title = card.querySelector("h3").innerText.toLowerCase();
      card.style.display = title.includes(value) ? "block" : "none";
    });
  });
}
