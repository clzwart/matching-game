document.querySelectorAll(".card").forEach((element) => {
  element.onclick = flipCard;
});

let cardClickDisabled = false;

function flipCard(event) {
  if (cardClickDisabled) return;

  event.target.classList.remove("face-down");
  event.target.classList.add("selected");
  const cards = document.querySelectorAll(".card");
  const cardType = event.target.dataset.cardType;
  const selectedCards = document.querySelectorAll(".selected");
  const matchingSelectedCards = document.querySelectorAll(
    `.selected[data-card-type="${cardType}"]`
  );

  if (selectedCards.length === 2 && matchingSelectedCards.length < 2) {
    cardClickDisabled = true;
    setTimeout(() => {
      cards.forEach((element) => {
        element.classList.add("face-down");
        element.classList.remove("selected");
      });
      cardClickDisabled = false;
    }, 7000);
  }

  if (matchingSelectedCards.length % 2 === 0) {
    cardClickDisabled = true;
    setTimeout(() => {
      matchingSelectedCards.forEach((element) => {
        element.classList.add("hidden");
        element.classList.remove("selected");
      });
      cardClickDisabled = false;
    }, 7000);
  }
}
