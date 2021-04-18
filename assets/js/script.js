// Difficulty modal and close button 

document.querySelector(".close-button").addEventListener("click", function() {
    document.querySelector(".bg-modal").style.display = "none";
});

let btns = document.querySelectorAll(".btn-margin");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener('click', function () {
		document.querySelector(".bg-modal").style.display = "none";
	}, false);
}

// Generates number of cards based on difficulty selected

let easy = document.getElementById("selectEasy");
let medium = document.getElementById("selectMedium");
let hard = document.getElementById("selectHard");

easy.addEventListener('click', () => game(5));
medium.addEventListener('click', () => game(7));
hard.addEventListener('click', () => game(9));

let cards = Array.from(document.getElementsByClassName("card"));

function game(num) {
  if (num === 5) {
    cards = Array.from(document.getElementsByClassName("Easy"));
    hideLevel2();
    hideLevel3(); 
  } else if (num === 7) {
    let level1 = Array.from(document.getElementsByClassName("Easy"));
    let level2 = Array.from(document.getElementsByClassName("Medium"));
    cards = level1.concat(level2);
    hideLevel3();    
  } else 
  cards = Array.from(document.getElementsByClassName("card"))};

function hideLevel2() {
  let levelTwoCards = Array.from(document.getElementsByClassName("Medium"));
  for (var i of levelTwoCards){
    i.classList.add("hide-cards");
  }
}

function hideLevel3(){
  let levelThreeCards = Array.from(document.getElementsByClassName("Hard")); 
  for (var i of levelThreeCards){
  i.classList.add("hide-cards");
  }
}