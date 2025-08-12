const cardTypes = [
  "heart",
  "star",
  "moon",
  "diamond",
  "heart",
  "star",
  "moon",
  "diamond",
];

function shuffleCards(arr) {
  for (let currentIndex = arr.length - 1; currentIndex >= 1; currentIndex--) {
    const randomIndex = Math.floor(Math.random() * (currentIndex + 1));
    const temp = arr[currentIndex];
    arr[currentIndex] = arr[randomIndex];
    arr[randomIndex] = temp;
  }
}

shuffleCards(cardTypes);

function renderCards(arr) {
  const cardContainer = document.getElementById("card-container");
  arr.forEach((currentElement) => {
    const card = document.createElement("div");
    cardContainer.appendChild(card);
    card.classList.add("card");
    card.classList.add("face-down");
    card.setAttribute("data-card-type", currentElement);
  });
}

renderCards(cardTypes);

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
    }, 5000);
  }

  if (matchingSelectedCards.length % 2 === 0) {
    cardClickDisabled = true;
    setTimeout(() => {
      matchingSelectedCards.forEach((element) => {
        element.classList.add("hidden");
        element.classList.remove("selected");
      });
      cardClickDisabled = false;
    }, 5000);
  }
}
