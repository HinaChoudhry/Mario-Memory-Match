// Difficulty modal and close button 

document.querySelector(".close-button").addEventListener("click", function() {
    document.querySelector(".bg-modal").style.display = "none";
});



// Generates number of cards based on difficulty selected

let easy = document.getElementById("selectEasy");
let medium = document.getElementById("selectMedium");
let hard = document.getElementById("selectHard");

easy.addEventListener('click', () => game(5));
medium.addEventListener('click', () => game(7));
hard.addEventListener('click', () => game(9));

function game(num) {
  if (num === 5) {
    alert("Success!")
  }
  };
