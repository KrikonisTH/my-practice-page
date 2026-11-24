// A small list of light, pleasant colours
var colours = ["#ffd6d6", "#d6f0ff", "#d9f7d9", "#fff2c2", "#e8dcff", "#ffe0c2"];

// Remember which colour we used last, so the next click is different
var lastIndex = -1;

// Find the button and the message on the page
var button = document.getElementById("colour-button");
var message = document.getElementById("message");

// Run this code every time the button is clicked
button.addEventListener("click", function () {
  var index;

  // Pick a random colour, but not the same one as last time
  do {
    index = Math.floor(Math.random() * colours.length);
  } while (index === lastIndex);
  lastIndex = index;

  // Change the page background
  document.body.style.backgroundColor = colours[index];

  // Show the message under the button
  message.textContent = "Hi!";
});
