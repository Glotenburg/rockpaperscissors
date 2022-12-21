
function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.33) {return 'rock';
}   else if (randomNumber > 0.67) {return 'paper';
}   else {return 'scissors'
    }
}

console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    const computerSelection = getComputerChoice();
    const playerSelection = ('rock', 'paper', 'scissors');

    if (playerselection ='rock' && computerSelection='rock') {return 'tie'
    } else if (playerselection ='rock' && computerSelection='paper') {return 'you lose, paper beats rock'
    } else if (playerselection ='rock' && computerSelection='scissors') {return 'you win, rock beats paper'
}

}