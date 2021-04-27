// Difficulty modal 
document.getElementById("game-button").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "flex";
});

document.querySelector(".click-close1").addEventListener("click", function () {
  document.querySelector(".bg-modal").style.display = "none";
});


// Tutorial modal

document.getElementById("tutorial-button").addEventListener("click", function () {
  document.querySelector(".tutorial-modal").style.display = "flex";
});

document.querySelector(".click-close2").addEventListener("click", function () {
  document.querySelector(".tutorial-modal").style.display = "none";
});


// Generates number of cards based on difficulty selected
let easy = document.getElementById("selectEasy");
let medium = document.getElementById("selectMedium");
let hard = document.getElementById("selectHard");

easy.addEventListener('click', () => pair(5));
medium.addEventListener('click', () => pair(7));
hard.addEventListener('click', () => pair(9));