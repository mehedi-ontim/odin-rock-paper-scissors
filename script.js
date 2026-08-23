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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();

    if (humanChoice === computerChoice) {
      console.log(`It's a tie! You both chose ${humanChoice}.`);
      return;
    }

    const humanWins =
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper");

    if (humanWins) {
      humanScore++;
      console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else {
      computerScore++;
      console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }
  }

  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());
  playRound(getHumanChoice(), getComputerChoice());

  console.log(`Final score: You ${humanScore} - ${computerScore} Computer`);

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (computerScore > humanScore) {
    console.log("You lost the game!");
  } else {
    console.log("The game ended in a tie!");
  }
}

playGame();