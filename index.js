const playerScoreElement = document.querySelector('#player-score');
const computerScoreElement = document.querySelector('#computer-score');
const resultMessageElement = document.querySelector('#result-message');
const resultDetailsElement = document.querySelector('#result-details');
const choices = document.querySelectorAll('#choices button');

// Initialize scores
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let randomNumber = Math.random();
  if (randomNumber < 0.33) {
    return 'rock';
  } else if (randomNumber > 0.67) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

function playRound(playerSelection, computerSelection = getComputerChoice()) {
  playerSelection = playerSelection.toLowerCase();

  let result = {};

  if (playerSelection === computerSelection) {
    result.message = 'It is a tie!';
    result.details = `You both chose ${playerSelection}`;
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    result.message = 'You win!';
    result.details = `${playerSelection} beats ${computerSelection}`;
  } else {
    result.message = 'You lose!';
    result.details = `${computerSelection} beats ${playerSelection}`;
  }

  return result;
}

// Update the score display
function updateScore() {
  playerScoreElement.textContent = playerScore;
  computerScoreElement.textContent = computerScore;
}

// Display the result of the round
function displayResult(result) {
  resultMessageElement.textContent = result.message;
  resultDetailsElement.textContent = result.details;
}

// Play a round when a choice button is clicked
choices.forEach(button => {
  button.addEventListener('click', () => {
    // Play the round and get the result
    const playerChoice = button.id;
    const roundResult = playRound(playerChoice);

    // Update the scores and display the result
    if (roundResult.message.startsWith('You win')) {
      playerScore++;
    } else {
      computerScore++;
    }
    updateScore();
    displayResult(roundResult);
  });
});
