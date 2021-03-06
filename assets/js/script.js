/* jshint esversion: 6 */
/* globals $:false */

let cards = Array.from(document.getElementsByClassName("card"));
let matchedCards = [];
let cardsArray = cards;
const cardCount = {5: 10, 7: 14, 9: 18};

// Audio controls

class AudioController {
  constructor () {
    this.flipSound = new Audio("assets/audio/flip.wav");
    this.matchSound = new Audio("assets/audio/match.wav");
    this.victorySound= new Audio("assets/audio/victory.wav");
    this.gameOverSound = new Audio("assets/audio/gameover.wav");
  }

  stopMusic() {
    this.bgMusic.pause();
    this.bgMusic.currentTime = 0;
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

// Core game set up

class MarioMemoryMatch {
  constructor (totalTime, cards) {
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.getElementById("time-remaining");
    this.ticker = document.getElementById("flips");
    this.audioController = new AudioController();
  }

  // This is called when the game starts 
  startGame() {
    this.cardToCheck = null;
    // Number of flips at start is reset to 0
    this.totalClicks = 0;
    // Timer resets with each new game
    this.timeRemaining = this.totalTime;
    this.busy = true;
    // This allows the cards to shuffle at the start of each game 
    setTimeout(() => {
      this.shuffleCards();
      this.countDown = this.startCountDown();
      this.busy = false;
      }, 500);
      // This hides the card faces at the start of each game
    this.hideCards();
    this.timer.innerText = this.timeRemaining;
    this.ticker.innerText = this.totalClicks;
  } 

  hideCards() {
    cardsArray.forEach(card => {
      card.classList.remove("visible");
      card.classList.remove("matched");
    });
  }

// Card flipping 

  flipCard(card) {
    if (this.canFlipCard(card)) {
      this.audioController.flip();
      this.totalClicks ++;
      this.ticker.innerText = this.totalClicks;
      card.classList.add("visible");

      if (this.cardToCheck) 
        this.checkForCardMatch(card);
      else
        this.cardToCheck = card;
  
    }
  }
    
  checkForCardMatch(card) {
    if (this.getCardType(card) === this.getCardType(this.cardToCheck))
      this.cardMatch(card, this.cardToCheck);
    else 
      this.cardMisMatch(card, this.cardToCheck);
 
    this.cardToCheck = null;
     }
 
// Checks to see if selected pair match and if they all match, calls the victory function

  cardMatch(card1, card2) {
      matchedCards.push(card1); 
      matchedCards.push(card2);
      card1.classList.add("matched");
      card2.classList.add("matched");
      this.audioController.match();
      if (matchedCards.length === cardCount[difficulty]) {
        this.victory();
      }
    }

// Allows the cards to flip back if they don't match
  
  cardMisMatch(card1, card2) {
      this.busy = true; 
      setTimeout(() => {
        card1.classList.remove("visible");
        card2.classList.remove("visible");
        this.busy = false;
      }, 1000);
    }
      
    getCardType(card) {
      return card.getElementsByClassName("card-value")[0].src;
    }
    
// Sets timer 

  startCountDown() {
    return setInterval(() => {
      this.timeRemaining--;
      this.timer.innerText = this.timeRemaining;
      if(this.timeRemaining === 0)
          this.gameOver();
    }, 1000);
  }
    
// Game over function that runs if the timer gets to 0
  gameOver(){
      clearInterval(this.countDown);
      this.audioController.gameOver();
      document.getElementById("game-over").classList.add("visible");
    }


// Victory function that runs if all the cards are matched
    victory() {
      clearInterval(this.countDown);
      this.audioController.victory();
      document.getElementById("victory-text").classList.add("visible");
      this.stats();
    }
  
    /**  This gets the number of time it took and number of flips it took to complete the game and displays the figures 
    * in the victory modal **/
  stats() {
    let timeLeft = parseInt(document.getElementById("time-remaining").innerHTML);
    let totalTime = 100 - timeLeft;
    let flipCount = parseInt(document.getElementById("flips").innerHTML);
    document.getElementById("victory-p").innerHTML = `You took ${totalTime} seconds and ${flipCount} flips!`;
  }

/** The card shuffle for the game is the Fisher Yates shuffle. This was used from the YouTube
 * video https://www.youtube.com/watch?v=3uuQ3g92oPQ */

  shuffleCards() { 
    for (let i = cardsArray.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        cardsArray[randomIndex].style.order = i;
        cardsArray[i].style.order = randomIndex; 
    }
}

/**  This returns a boolean of true if busy is false and if matched cards doesn't include card, and card doesn't equal 
     cardToCheck, so that a card can be flipped. It is taken from the youtube video https://www.youtube.com/watch?v=3uuQ3g92oPQ at 
     minute 21:39 */

  canFlipCard(card) {
    return !this.busy && !matchedCards.includes(card) && card !== this.cardToCheck;
  }
}

function ready() {
  let overlays = Array.from(document.getElementsByClassName("overlay-text"));
  let cards = Array.from(document.getElementsByClassName("card"));
  let game = new MarioMemoryMatch (100, cards);
 
  overlays.forEach(overlay => {
    overlay.addEventListener("click", () => {
      overlay.classList.remove("visible");
      game.startGame();
    });
  });

  cards.forEach(card => {
    card.addEventListener("click", () => {
      game.flipCard(card);
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

// Reload function

function reload(){
  window.location.reload();
}

//Generating the different number of cards per difficulty


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
    cards = Array.from(document.getElementsByClassName("card"));
  }
}

function hideLevel2() {
  let levelTwoCards = Array.from(document.getElementsByClassName("Medium"));
  for (var i of levelTwoCards) {
    i.classList.add("hide-cards");
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

