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
  // return playerChoice;
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log(
      `Computer Score : ${computerScore} vs Human Score: ${humanScore}`,
    );
    console.log("It is a tie.");
  } else if (
    (humanChoice === "rock" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "rock")
  ) {
    computerScore++;
    console.log(
      `Computer Score : ${computerScore} vs Human Score: ${humanScore}`,
    );
    console.log("You lost computer wins.");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    humanScore++;
    console.log(
      `Computer Score : ${computerScore} vs Human Score: ${humanScore}`,
    );
    console.log("You win computer lost");
  }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
console.log(humanSelection);
console.log(computerSelection);
// function declareWinner() {
//   if (computerScore === humanScore) {
//     playGame();
//   } else if (computerScore > humanScore) {
//     console.log("Computer wins the game.");
//   } else if (humanScore > computerScore) {
//     console.log("You win the game.");
//   }
// }

// function playGame() {
// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();
// const rpsPlay = playRound(humanSelection, computerSelection);
//   if (computerScore === 3 || humanScore === 3) {
//     if (computerScore === 3) {
//       console.log("Computer wins.");
//     } else {
//       console.log("You win.");
//     }
//   }
// }
