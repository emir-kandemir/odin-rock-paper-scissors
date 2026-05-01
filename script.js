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
    console.log(
      `Computer Score : ${computerScore} vs Human Score: ${humanScore}`,
    );
    console.log("It is a tie.");
  } else if (
    (humanChoice === 1 && computerChoice === 2) ||
    (humanChoice === 2 && computerChoice === 3) ||
    (humanChoice === 3 && computerChoice === 1)
  ) {
    computerScore++;
    console.log(
      `Computer Score : ${computerScore} vs Human Score: ${humanScore}`,
    );
    console.log("You lost computer wins.");
  } else if (
    (humanChoice === 1 && computerChoice === 3) ||
    (humanChoice === 2 && computerChoice === 1) ||
    (humanChoice === 3 && computerChoice === 2)
  ) {
    humanScore++;
    console.log(
      `Computer Score : ${computerScore} vs Human Score: ${humanScore}`,
    );
    console.log("You win computer lost");
  }
}

function declareWinner() {
  if (computerScore === humanScore) {
    playGame();
  } else if (computerScore > humanScore) {
    console.log("Computer wins the game.");
  } else if (humanScore > computerScore) {
    console.log("You win the game.");
  }
}

function playGame() {
  const humanSelection = getHumanChoice();
  const computerSelection = getComputerChoice();
  const rpsPlay = playRound(humanSelection, computerSelection);
  if (computerScore === 3 || humanScore === 3) {
    if (computerScore === 3) {
      console.log("Computer wins.");
    } else {
      console.log("You win.");
    }
  }
}

playGame();
playGame();
playGame();
playGame();
playGame();
declareWinner();
