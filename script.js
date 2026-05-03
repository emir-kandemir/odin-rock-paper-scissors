let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else if (randomNumber === 3) {
    return "scissors";
  }
}

function getHumanChoice() {
  let playerChoice = prompt("Type 'rock', 'paper' or 'scissors'").toLowerCase();
  if (playerChoice === "rock") {
    return "rock";
  } else if (playerChoice === "paper") {
    return "paper";
  } else if (playerChoice === "scissors") {
    return "scissors";
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(
      `Computer Score : ${computerScore} vs Human Score: ${humanScore}`,
    );
    console.log(
      `You choose '${humanChoice}', computer choose '${computerChoice}'. It is a tie.`,
    );
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    console.log(
      `Computer Score : ${computerScore} vs Human Score: ${humanScore}`,
    );
    console.log(`You lose '${computerChoice}' beats '${humanChoice}'.`);
  } else {
    humanScore++;
    console.log(
      `Computer Score : ${computerScore} vs Human Score: ${humanScore}`,
    );
    console.log(`You win '${humanChoice}' beats '${computerChoice}'.`);
  }
}

function playGame() {
  humanScore = 0;
  computerScore = 0;

  let humanSelection = getHumanChoice();
  let computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  humanSelection = getHumanChoice();
  computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Computer won the game!");
  } else {
    console.log("It is a tie!");
  }
}

playGame();
