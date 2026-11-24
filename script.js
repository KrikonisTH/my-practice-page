// Find the theme button on the page
var button = document.getElementById("theme-button");

// Run this code every time the button is clicked
button.addEventListener("click", function () {
  //Add the class "dark" if it is missing, remove it if it is there
  document.body.classList.toggle("dark");
});
