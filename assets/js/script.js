// Game setup
class MarioMemoryMatch {
  constructor(totalTime, cards) {
    this.cardsArray = game();
    this.totaltime = totalTime;
    this.timer = document.getElementById("time");
    this.ticker = document.getElementbyId("flips");
    this.audioController = new AudioController();
  }
  
  // This function is called for every new game
  startGame(){
    this.cardToCheck = null;
    this.totalClicks = 0;
    this.timeRemaining = this.totalTIme;
    this.matchedCards = [];
    this.busy = true;

  }
}


// ready function to start the game 
function ready() {
  let cards = Array.from(document.getElementsByClassName("card"));
 
 
cards.forEach(card => {
  card.addEventListener("click", () => {
    game.flipCard(card);
      });
  });
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
} else 
cards = Array.from(document.getElementsByClassName("card"))};

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
function flipCard() {
  this.classList.toggle("visible");
} cards.forEach((card) => card.addEventListener("click", flipCard));

