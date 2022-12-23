
function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.33) {return 'rock';
}   else if (randomNumber > 0.67) {return 'paper';
}   else {return 'scissors'
    }
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    let result;
    if (playerSelection === computerSelection) {
        result = 'It is a tie!';

    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') || 
               (playerSelection === 'paper' && computerSelection === 'rock') || 
               (playerSelection === 'scissors' && computerSelection === 'paper'))
{
               result = 'You win! ${playerSelection} beats ${computerSelection}';
    } else     {
    result = 'You lose! ${computerSelection} beats ${computerSelection}';
    }

    return result;
}
        
        


console.log(playRound());