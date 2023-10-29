const container = document.querySelector('#container');
let pScore = 0;
let cScore = 0;

const winnerText = document.querySelector('#winner');

const pScoreText = document.querySelector('#pScore');
pScoreText.textContent = "Player score: " + pScore;

const cScoreText = document.querySelector('#cScore');
cScoreText.textContent = "Computer score: " + cScore;

const resultMsg = document.querySelector('#result');

const rockBtn = document.querySelector('#rockbtn');

rockBtn.addEventListener('click', () => { if (pScore < 5 && cScore < 5) { showResult('rock') } });

const paperBtn = document.querySelector('#paperbtn');

paperBtn.addEventListener('click', () => { if (pScore < 5 && cScore < 5) { showResult('paper') } });

const scissorsBtn = document.querySelector('#scissorsbtn');

scissorsBtn.addEventListener('click', () => { if (pScore < 5 && cScore < 5) { showResult('scissors') } });

const restartBtn = document.querySelector('#restart');

restartBtn.addEventListener('click', restart);

const computerChoiceImage = document.querySelector('#computer-choice');

const playerRockImage = document.querySelector('#p-rock');
const playerPaperImage = document.querySelector('#p-paper');
const playerScissorImage = document.querySelector('#p-scissor');

function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3) + 1;
  if (rand === 1) {
    computerChoiceImage.src = "images/rock.png";
    return "rock";
  } else if (rand === 2) {
    computerChoiceImage.src = "images/paper.png";
    return "paper";
  } else {
    computerChoiceImage.src = "images/scissor.png";
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  resetColors();
  computerChoiceImage.style.borderStyle = "solid";
  let player = playerSelection.toLowerCase();
  if (player === computerSelection) {
    computerChoiceImage.style.borderColor = "yellow";
    if (player === "rock") {
      playerRockImage.style.borderColor = "yellow";
    } else if (player === "paper") {
      playerPaperImage.style.borderColor = "yellow";
    } else {
      playerScissorImage.style.borderColor = "yellow";
    }
    return "Tie! Both played " + playerSelection;
  }
  if (player === "rock") {
    if (computerSelection === "paper") {
      computerChoiceImage.style.borderColor = "green";
      playerRockImage.style.borderColor = "red";
      return "You Lose! Paper beats Rock"
    } else {
      computerChoiceImage.style.borderColor = "red";
      playerRockImage.style.borderColor = "green";
      return "You Win! Rock beats Scissors";
    }
  }
  if (player === "scissors") {
    if (computerSelection === "rock") {
      computerChoiceImage.style.borderColor = "green";
      playerScissorImage.style.borderColor = "red";
      return "You Lose! Rock beats Scissors"
    } else {
      computerChoiceImage.style.borderColor = "red";
      playerScissorImage.style.borderColor = "green";
      return "You Win! Scissors beats Paper";
    }
  }
  if (player === "paper") {
    if (computerSelection === "rock") {
      computerChoiceImage.style.borderColor = "red";
      playerPaperImage.style.borderColor = "green";
      return "You Win! Paper beats Rock"
    } else {
      computerChoiceImage.style.borderColor = "green";
      playerPaperImage.style.borderColor = "red";
      return "You Lose! Scissors beats Paper";
    }
  }
  return "invalid input";
}

function showResult(pChoice) {
  let g = playRound(pChoice, getComputerChoice())
  resultMsg.textContent = g;
  console.log(g[4]);
  if (g[4] == 'W') {
    pScore++;
    pScoreText.textContent = "Player score: " + pScore;
  } else if (g[4] == 'L') {
    cScore++;
    cScoreText.textContent = "Computer score: " + cScore;
  }
  if (pScore >= 5) {
    winnerText.textContent = "Player Wins!";
    restartBtn.style.borderColor = "yellow";
  }
  if (cScore >= 5) {
    winnerText.textContent = "Computer Wins :(";
    restartBtn.style.borderColor = "yellow";
  }
}
function resetColors() {
  let images = document.querySelectorAll('img');
  images.forEach(function (current) {
    current.style.borderColor = "black";
  })
  restartBtn.style.borderColor = "black";
  computerChoiceImage.style.borderStyle = "none";
}
function restart() {
  pScore = 0;
  cScore = 0;
  pScoreText.textContent = "Player score: " + pScore;
  cScoreText.textContent = "Computer score: " + cScore;
  winnerText.textContent = "";
  computerChoiceImage.removeAttribute("src");
  winnerText.textContent = "";
  resultMsg.textContent = "";
  resetColors();
}