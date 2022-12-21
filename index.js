
function getComputerChoice() {
    let randomNumber = Math.random();
console.log(randomNumber)
    if (randomNumber < 0.33) {return 'rock';
}   else if (randomNumber > 0.67) {return 'paper';
}   else {return 'scissors'
    }
}

console.log(getComputerChoice());