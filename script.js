function getComputerChoice() {
  const randomNumber = Math.random();

  if (randomNumber < 1 / 3) {
    return "rock";
  }

  if (randomNumber < 2 / 3) {
    return "paper";
  }

  return "scissors";
}

function getHumanChoice() {
  return prompt("Choose rock, paper, or scissors:");
}