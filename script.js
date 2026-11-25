const games=[
  {title: "Minecraft", category: "pc", description: "Build, explore and survive in a world made of blocks." } , 
  {title: "Mario Kart 8 Deluxe", category: "console", description: "Race against friends with wild items and colourful tracks." } , 
  {title: "UNO", category: "cards", description: "A fast and simple card game that is fun for all ages." } , 
  {title: "Catan", category: "board", description: "Trade resources and build settlements to win the island." }
];

// Readable names for the tag on each card
const categoryLabels = {
  pc: "PC",
  console: "Console",
  cards: "Cards",
  board: "Board"
};

// Find the place where the cards go
const grid = document.getElementById("games-grid");

// Make one card for every game in the list
games.forEach(function (game) {
  const card = document.createElement("article");
  card.className = "game-card";

  const title = document.createElement("h3");
  title.textContent = game.title;

  const tag = document.createElement("p");
  tag.className = "tag";
  tag.textContent = categoryLabels[game.category];

  const description = document.createElement("p");
  description.textContent = game.description;

  card.appendChild(title);
  card.appendChild(tag);
  card.appendChild(description);

  grid.appendChild(card);
});

// Find the theme button on the page
var button = document.getElementById("theme-button");

// Run this code every time the button is clicked
button.addEventListener("click", function () {
  //Add the class "dark" if it is missing, remove it if it is there
  document.body.classList.toggle("dark");
});