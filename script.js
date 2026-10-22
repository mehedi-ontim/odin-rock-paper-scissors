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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase();
  let roundMessage;

  if (humanChoice === computerChoice) {
    roundMessage = `It's a tie! You both chose ${humanChoice}.`;
  } else {
    const humanWins =
      (humanChoice === "rock" && computerChoice === "scissors") ||
      (humanChoice === "paper" && computerChoice === "rock") ||
      (humanChoice === "scissors" && computerChoice === "paper");

    if (humanWins) {
      humanScore++;
      roundMessage = `You win! ${humanChoice} beats ${computerChoice}.`;
    } else {
      computerScore++;
      roundMessage = `You lose! ${computerChoice} beats ${humanChoice}.`;
    }
  }

  roundResult.textContent = roundMessage;

  scoreDisplay.textContent = `You: ${humanScore} | Computer: ${computerScore}`;

  if (humanScore === 5 || computerScore === 5) {
    if (humanScore === 5) {
      gameResult.textContent = "You won the game!";
    } else {
      gameResult.textContent = "Computer won the game!";
    }

    buttons.forEach((button) => {
      button.disabled = true;
    });
  }
}

const buttons = document.querySelectorAll("#choices button");
const roundResult = document.querySelector("#round-result");
const scoreDisplay = document.querySelector("#score");
const gameResult = document.querySelector("#game-result");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const humanChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);
  });
});
