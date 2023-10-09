function getComputerChoice() {
  let rand = Math.floor(Math.random() * 3) + 1;
  if (rand === 1) {
    return "rock";
  } else if (rand === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection.toLowerCase();
  if (player === computerSelection) {
    return "Tie! Both played " + playerSelection;
  }
  if (player === "rock") {
    if (computerSelection === "paper") {
      return "You Lose! Paper beats Rock"
    } else {
      return "You win! Rock beats Scissors";
    }
  }
  if (player === "scissors") {
    if (computerSelection === "rock") {
      return "You Lose! Rock beats Scissors"
    } else {
      return "You win! Scissors beats Paper";
    }
  }
  if (player === "paper") {
    if (computerSelection === "rock") {
      return "You Win! Paper beats Rock"
    } else {
      return "You Lose! Scissors beats Paper";
    }
  }
  return "invalid input";
}

function game() {
  for (let i = 0; i < 5; i++) {
    console.log("Round " + parseInt(i));
    let user_input = prompt("Choose 'rock', 'paper', or 'scissors'");
    console.log(playRound(user_input, getComputerChoice()));
  }
}
