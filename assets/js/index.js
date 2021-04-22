// Difficulty modal 
document.getElementById("button").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});

document.querySelector(".close-button").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});


// Generates number of cards based on difficulty selected
let easy = document.getElementById("selectEasy");
let medium = document.getElementById("selectMedium");
let hard = document.getElementById("selectHard");

easy.addEventListener('click', () => pair(5));
medium.addEventListener('click', () => pair(7));
hard.addEventListener('click', () => pair(9));