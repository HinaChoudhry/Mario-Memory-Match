let cards = Array.from(document.getElementsByClassName("card"));
let matchedCards = [];
let cardsArray = cards;
const cardCount = {5: 10, 7: 14, 9: 18}


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
    this.stopMusic();
    this.gameOverSound.play();
  }
}

class MarioMemoryMatch {
  constructor (totalTime, cards) {
   
    this.totalTime = totalTime;
    this.timeRemaining = totalTime;
    this.timer = document.getElementById("time-remaining");
    this.ticker = document.getElementById("flips");
    this.audioController = new AudioController();
  }
  startGame() {
    this.cardToCheck = null;
    this.totalClicks = 0;
    this.timeRemaining = this.totalTime;
    
    this.busy = true;
    setTimeout(() => {
      this.shuffleCards();
      this.countDown = this.startCountDown();
      this.busy = false;
      }, 500);
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
 

     cardMatch(card1, card2) {
      matchedCards.push(card1); 
      matchedCards.push(card2);
      card1.classList.add("matched");
      card2.classList.add("matched");
      this.audioController.match();
      console.log(difficulty);
      console.log(matchedCards.length);
      if (matchedCards.length === cardCount[difficulty]) {
      this.victory();}
  }
  
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
    
    startCountDown() {
      return setInterval(() => {
        this.timeRemaining--;
        this.timer.innerText = this.timeRemaining;
        if(this.timeRemaining === 0)
          this.gameOver();
    }, 1000);
  }
    

    gameOver(){
      clearInterval(this.countDown);
      this.audioController.gameOver();
      document.getElementById("game-over-text").classList.add("visible");
    }

    victory() {
      clearInterval(this.countDown);
      this.audioController.victory();
      document.getElementById("victory-text").classList.add("visible");
      
  }
  


  shuffleCards() { 
    for (let i = cardsArray.length - 1; i > 0; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        cardsArray[randomIndex].style.order = i;
        cardsArray[i].style.order = randomIndex; 
    }
}

/**  This returns a boolean of true if busy is false and if matched cards doesn't include card, and card doesn't equal 
    cardToCheck, so that a card can be flipped.*/
  canFlipCard(card) {
    return !this.busy && !matchedCards.includes(card) && card !== this.cardToCheck
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

