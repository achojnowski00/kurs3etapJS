const paperImg = document.querySelector("[data-option='papier']");
const rockImg = document.querySelector("[data-option='kamień']");
const scisorsImg = document.querySelector("[data-option='nożyczki']");
const list = [paperImg, rockImg, scisorsImg];

const playBtn = document.querySelector('.start');

let userChoice = document.querySelector('[data-summary = "your-choice"]');
let aiChoice = document.querySelector('[data-summary = "ai-choice"]');

const clear = (e) => {
  e.style.boxShadow = ''
}

function select() {
  list.forEach(clear)
  this.style.boxSizing = 'border-box'
  this.style.boxShadow = '0 0 0 5px yellow'

  userChoice.textContent = this.getAttribute('data-option')
}

const gamesTxt = document.querySelector('.numbers span');
const winsTxt = document.querySelector('.wins span');
const losesTxt = document.querySelector('.losses span');
const drawsTxt = document.querySelector('.draws span');


function theGame() {
  gamesTxt.textContent++
  const winner = document.querySelector('[data-summary="who-win"]');
  if (aiChoice.textContent == userChoice.textContent) {
    drawsTxt.textContent++
    winner.textContent = 'Remis'
    winner.style.color = 'orange';
  } else if ((aiChoice.textContent == 'papier' && userChoice.textContent == 'kamień') || (aiChoice.textContent == 'kamień' && userChoice.textContent == 'nożyczki') || (aiChoice.textContent == 'nożyczki' && userChoice.textContent == 'papier')) {
    losesTxt.textContent++
    winner.textContent = 'AI wygrało'
    winner.style.color = 'red';
  } else {
    winsTxt.textContent++
    winner.textContent = 'Wygrałeś'
    winner.style.color = 'green';
  }
}

function endGame() {
  document.querySelector(`[data-option= ${userChoice.textContent}]`).style.boxShadow = '';
  userChoice.textContent = '';
}

function playGame() {
  //if to check if player chose his character
  if (userChoice.textContent == "") alert('Wybierz swojego zawodnika')
  else {
    const index = Math.floor(Math.random() * 3);
    aiChoice.textContent = list[index].getAttribute('data-option')
    theGame();

    // this is to reset your choice after game
    // endGame();
  }
}

playBtn.addEventListener('click', playGame)

paperImg.addEventListener('click', select);
rockImg.addEventListener('click', select);
scisorsImg.addEventListener('click', select);