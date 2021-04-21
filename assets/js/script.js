const startGameBtn = document.querySelector("#startGame");


function startGame(el){
flipCard(el);
shuffleArray(cards);
}




// Start and stop background music
let audioBg = new Audio("assets/audio/gamebg.mp3");

function startAudio() {
  audioBg.play();
}

function stopAudio (){
audioBg.pause();
audioBg.currentTime = 0;
}

// Flip FX

let audioFlip = new Audio("assets/audio/flip.wav");

function flipNoise() {
audioFlip.play();
}

// Difficulty modal 
document.getElementById("button").addEventListener("click",
    function () {console.log("test")
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

let cards = Array.from(document.getElementsByClassName("card"));

function pair(num) {
if (num === 5) {
cards = Array.from(document.getElementsByClassName("Easy"));
hideLevel2();
hideLevel3(); 
} else if (num === 7) {
let level1 = Array.from(document.getElementsByClassName("Easy"));
let level2 = Array.from(document.getElementsByClassName("Medium"));
cards = level1.concat(level2);
hideLevel3();    
} else {
cards = Array.from(document.getElementsByClassName("card"))};}

function hideLevel2() {
let levelTwoCards = Array.from(document.getElementsByClassName("Medium"));
for (var i of levelTwoCards){
i.classList.add("hide-cards")
}
}

function hideLevel3(){
let levelThreeCards = Array.from(document.getElementsByClassName("Hard")); 
for (var i of levelThreeCards){
i.classList.add("hide-cards");
}
}

// Card flip
function flipCard(el) {
el.classList.toggle("visible");
} 

cards.forEach(card => {
card.addEventListener("click", () => {
  flipCard(card);
})
})





//Shuffle

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
  console.log(array);
  return array;
}
