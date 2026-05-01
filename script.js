let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return 1;
  } else if (randomNumber === 2) {
    return 2;
  } else if (randomNumber === 3) {
    return 3;
  }
}

function getHumanChoice() {
  let playerChoice = Number(
    prompt("Type 1 for 'rock', 2 for 'paper', 3 for 'scissors'"),
  );
  if (playerChoice === 1) {
    return 1;
  } else if (playerChoice === 2) {
    return 2;
  } else if (playerChoice === 3) {
    return 3;
  }
  return playerChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It is a tie.");
  } else if (
    (humanChoice === 1 && computerChoice === 2) ||
    (humanChoice === 2 && computerChoice === 3)
  ) {
    computerScore++;
    console.log(
      `Computer Score : ${computerScore} vs Human Score: ${humanScore}`,
    );
    console.log("You lost computer wins.");
  } else if (
    (humanChoice === 1 && computerChoice === 3) ||
    (humanChoice === 2 && computerChoice === 1)
  ) {
    humanScore++;
    console.log(
      `Computer Score : ${computerScore} vs Human Score: ${humanScore}`,
    );
    console.log("You win computer lost");
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
