document.querySelectorAll(".card").forEach((element) => {
  element.onclick = flipCard;
});

function flipCard(event) {
  event.target.classList.remove("face-down");
  event.target.classList.add("selected");
  const cardType = event.target.dataset.cardType;
  const matchingSelectedCards = document.querySelectorAll(
    `.selected[data-card-type="${cardType}"]`
  );

  if (matchingSelectedCards.length % 2 === 0) {
    matchingSelectedCards.forEach((element) => {
      element.classList.add("hidden");
    });
  } else {
    matchingSelectedCards.forEach((element) => {
      element.classList.add("face-down");
    });
  }
}
