const games=[
  {title: "Minecraft", category: "pc", description: "Build, explore and survive in a world made of blocks.", image: "images/pc-keyboard.jpg" , alt: "Illuminated computer set on a desk"} , 
  {title: "Mario Kart 8 Deluxe", category: "console", description: "Race against friends with wild items and colourful tracks.", image: "images/console-controller.jpg" , alt: "Gaming controller placed on wood" } , 
  {title: "UNO", category: "cards", description: "A fast and simple card game that is fun for all ages.", image: "images/cards-deck.jpg" , alt: "Standing pack of playing cards" } , 
  {title: "Catan", category: "board", description: "Trade resources and build settlements to win the island.", image: "images/board-dice.jpg" , alt: "Set of dice on reflective surface" } , 
  {title: "Dota 2", category: "pc", description: "A huge MOBA with extremely interesting heroes.", image: "images/pc-keyboard.jpg" , alt: "Illuminated computer set on a desk" } , 
  {title: "Tekken 8", category: "console", description: "Choose your fighter and battle your friends.", image: "images/console-controller.jpg" , alt: "Gaming controller placed on wood" } , 
  {title: "Skull", category: "cards", description: "A fast bluffing game with face down rose and skull cards.", image: "images/cards-deck.jpg" , alt: "Standing pack of playing cards" } , 
  {title: "Monopoly", category: "board", description: "Buy,trade and pay rent to bankruptcy with your friends.", image: "images/board-dice.jpg" , alt: "Set of dice on reflective surface" } , 
  {title: "Doom", category: "pc", description: "Shoot and kill demons till you can't no more in this iconic FPS.", image: "images/pc-keyboard.jpg" , alt: "Illuminated computer set on a desk" } , 
  {title: "Forza Horizon 6", category: "console", description: "Build your cars and race with them.", image: "images/console-controller.jpg" , alt: "Gaming controller placed on wood" } , 
  {title: "Dominion", category: "cards", description: "A deck-building game that will rack your brain.", image: "images/cards-deck.jpg" , alt: "Standing pack of playing cards" } , 
  {title: "Clue", category: "board", description: "Murder-mystery deduction game where you find the clues.", image: "images/board-dice.jpg" , alt: "Set of dice on reflective surface" } , 
  {title: "Red Dead Redemption 2", category: "pc", description: "Explore an openworld and it's story in the Wild West." , image: "images/pc-keyboard.jpg" , alt: "Illuminated computer set on a desk"} , 
  {title: "Hollow Knight", category: "console", description: "Jump, dash and run in this platform game.", image: "images/console-controller.jpg" , alt: "Gaming controller placed on wood" } , 
  {title: "Scout", category: "cards", description: "Climb the ladder faster than your opponent and subotage them with your cards.", image: "images/cards-deck.jpg" , alt: "Standing pack of playing cards" } , 
  {title: "Scrabble", category: "board", description: "Build words and score points with letter tiles.", image: "images/board-dice.jpg" , alt: "Set of dice on reflective surface" }
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

const pageSize = 8;        // how many cards per page (never changes)
let currentPage = 1;       // which page we're on (changes when you click)
let currentList = games;   // the list the filter chose (changes when you click a filter)

// Make one card for every game in the list
function renderGames(list) {
  grid.innerHTML="";

  list.forEach(function (game) {
  
    const card = document.createElement("article");
    card.className = "game-card";

    // NEW: make and fill the picture
    const image = document.createElement("img");
    image.src = game.image;
    image.alt = game.alt;

    const title = document.createElement("h3");
    title.textContent = game.title;

    const tag = document.createElement("p");
    tag.className = "tag";
    tag.textContent = categoryLabels[game.category];

    const description = document.createElement("p");
    description.textContent = game.description;

    // NEW: place the picture FIRST, so it's at the top of the card
    card.appendChild(image);
    card.appendChild(title);
    card.appendChild(tag);
    card.appendChild(description);

    grid.appendChild(card);
  });
}

function showPage() {
  const start = (currentPage - 1) * pageSize;
  const end = start + pageSize;
  renderGames(currentList.slice(start, end));
}

showPage();

const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach(function (filterButton) {
  filterButton.addEventListener("click", function () {
    const category = filterButton.dataset.category;

    if (category === "all"){
       renderGames(games);
    }else{
     const filtered = games.filter(function (game){
       return game.category === category;
     });
     renderGames(filtered);
   }
  });
});

// Find the theme button on the page
var button = document.getElementById("theme-button");

// Run this code every time the button is clicked
button.addEventListener("click", function () {
  //Add the class "dark" if it is missing, remove it if it is there
  document.body.classList.toggle("dark");
});