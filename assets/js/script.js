class AudioController {
  constructor () {
    this.flipSound = new Audio("assets/audio/flip.wav");
    this.matchSound = new Audio("assets/audio/match.wav");
    this.noMatchSound = new Audio("assets/audio/nomatch.wav");
    this.victorySound= new Audio("assets/audio/victory.wav");
    this.gameOverSound = new Audio("assets/audio/gameover.wav");
  }
  flip() {
    this.flipSound.play();
  
  }
  match() {
    this.matchSound.play();
  }
  victory() {
    this.victorySound.play();
  }
  gameOver() {
    this.gameOverSound.play();
  }
}



function ready() {
  let overlays = Array.from(document.getElementsByClassName("overlay-text"));
  let cards = Array.from(document.getElementsByClassName("card"));

  overlays.forEach(overlay => {
    overlay.addEventListener("click", () => {
      overlay.classList.remove("visible");
      //game.startGame()
    });
  });
  cards.forEach(card => {
    card.addEventListener("click", () => {
      // game.flipCard(card);
    });
  });
}

let audioController = new AudioController();


document.addEventListener("DOMContentLoaded", ready());


// Start and stop background music
let audioBg = new Audio("assets/audio/gamebg.mp3");

function startAudio() {
  audioBg.play();
}

function stopAudio() {
  audioBg.pause();
  audioBg.currentTime = 0;
}

//Generating the different number of cards per difficulty

let cards = Array.from(document.getElementsByClassName("card"));

function pair(difficulty) {
  if (difficulty == 5) {
    cards = Array.from(document.getElementsByClassName("Easy"));
    hideLevel2();
    hideLevel3();
  } else if (difficulty == 7) {
    let level1 = Array.from(document.getElementsByClassName("Easy"));
    let level2 = Array.from(document.getElementsByClassName("Medium"));
    cards = level1.concat(level2);
    hideLevel3();
  } else {
    cards = Array.from(document.getElementsByClassName("card"))
  };
}

function hideLevel2() {
  let levelTwoCards = Array.from(document.getElementsByClassName("Medium"));
  for (var i of levelTwoCards) {
    i.classList.add("hide-cards")
  }
}

function hideLevel3() {
  let levelThreeCards = Array.from(document.getElementsByClassName("Hard"));
  for (var i of levelThreeCards) {
    i.classList.add("hide-cards");
  }
}

//Passing variables 

const queryString = window.location.search;

const urlParams = new URLSearchParams(queryString);

const difficulty = urlParams.get('difficulty');

console.log(difficulty);

pair(difficulty);
