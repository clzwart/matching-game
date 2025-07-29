document.querySelectorAll(".card").forEach((element) => {
  element.onclick = flipCard;
});

function flipCard(event) {
  event.target.classList.remove("face-down");
  event.target.classList.add("selected");
  const cards = document.querySelectorAll(".card");
  const cardType = event.target.dataset.cardType;
  const selectedCards = document.querySelectorAll(".selected");
  const matchingSelectedCards = document.querySelectorAll(
    `.selected[data-card-type="${cardType}"]`
  );

  if (selectedCards.length === 2 && matchingSelectedCards.length < 2) {
    cards.forEach((element) => {
      element.classList.add("face-down");
      element.classList.remove("selected");
    });
  }

  if (matchingSelectedCards.length % 2 === 0) {
    matchingSelectedCards.forEach((element) => {
      element.classList.add("hidden");
      element.classList.remove("selected");
    });
  }
}
