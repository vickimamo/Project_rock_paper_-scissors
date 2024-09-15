

let rock = 'rock';
let paper = 'paper';
let scissors = 'scissors';
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let n = Math.random();
    // return n;

    if (n < 0.35){
        let rock = 'rock'; 
        return rock;
    }
    else if (n > 0.35 && n < 0.7) {
        let paper = 'paper';
        return paper;
    }
    else {
        let scissors = 'scissors';
        return scissors;
    }

}

function getHumanChoice() {
    let inpString = prompt('Choose between rock, paper, and scissors, and input it below:')

    if (inpString.toLowerCase() === rock) {return rock;}
    else if(inpString.toLowerCase() === paper) {return paper;}
    else if(inpString.toLowerCase() === scissors) {return scissors;}
    else { alert('dammit');

    }
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    
    function playRound(humanChoice, computerChoice) {
    if(humanChoice === rock && computerChoice === scissors || humanChoice === paper && computerChoice === rock || humanChoice === scissors && computerChoice === paper) {
        humanScore += 1;
        //return humanScore;
        alert('you win this round mortal');
    }
    else if (humanChoice === rock && computerChoice === paper || humanChoice === paper && computerChoice === scissors || humanChoice === scissors && computerChoice === rock) {
        computerScore += 1;
        //return computerScore;
        alert('oh well, you lose');
    }
    else if (humanChoice === rock && computerChoice === rock || humanChoice === paper && computerChoice === paper || humanChoice === scissors && computerChoice === scissors) {
        alert('it was a draw');
    }
    else {}
    console.log(`Human Score:  ${humanScore}`)
    console.log(`Computer Score:  ${computerScore}`)
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

for (let i = 1; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);

}

if (humanScore > computerScore) {
    alert('you won! congratulations');
}
else if(computerScore > humanScore) {
    alert('eiyah');
}
else {
    alert('it\s a tie!')
}



}

playGame();
