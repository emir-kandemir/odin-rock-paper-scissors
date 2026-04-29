function getComputerChoice(number) {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  number = randomNumber;
  if (randomNumber === 1) {
    console.log("rock");
  } else if (randomNumber === 2) {
    console.log("paper");
  } else if (randomNumber === 3) {
    console.log("scissors");
  }
}
