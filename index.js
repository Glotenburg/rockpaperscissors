
function getComputerChoice() {
    let randomNumber = Math.random();
    if (randomNumber < 0.33) {return 'rock';
}   else if (randomNumber > 0.67) {return 'paper';
}   else {return 'scissors'
    }
}

console.log(getComputerChoice());

function playRound() {
    const computerSelection = getComputerChoice();
    const playerSelection = ('rock', 'paper', 'scissors');
    return {playerSelection, computerSelection} 

           if (playerSelection ='rock' && computerSelection='rock') {return 'tie'
    } else if (playerSelection ='rock' && computerSelection='paper') {return 'you lose, paper beats rock'
    } else if (playerSelection ='rock' && computerSelection='scissors') {return 'you win, rock beats paper'

    } else if (playerSelection ='paper' && computerSelection='rock') {return 'You win, paper beats rock'
    } else if (playerSelection ='paper' && computerSelection='paper') {return 'tie'
    } else if (playerSelection ='paper' && computerSelection='scissors') {return 'you lose, scissors beats paper'

    } else if (playerSelection ='scissors' && computerSelection='rock') {return 'You lose, rock beats scissors'
    } else if (playerSelection ='scissors' && computerSelection='paper') {return 'You win, scissors beat paper'
    } else if (playerSelection ='scissors' && computerSelection='scissors') {return 'tie'

}
console.log(playRound());
}