function getComputerChoice(number) {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  number = randomNumber;
  if (randomNumber === 1) {
    return "rock";
  } else if (randomNumber === 2) {
    return "paper";
  } else if (randomNumber === 3) {
    return "scissors";
  }
}

function getPlayerChoice(choice) {
  let playerChoice = prompt("Pick something, Rock/Paper/Scissors");
  choice = playerChoice;
  return playerChoice;
}
