
let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;
let roundResult;

console.log(playRound(playerSelection, computerSelection))

function computerPlay() {
    let choice = ["rock", "scissors", "paper"];
    return choice[Math.floor(Math.random() * choice.length)];
}

function noOneWonRocks() {
    alert("No one won, rocks are equal");
    return alert(`Your score: ${playerScore}, computer's score: ${computerScore}`);
}

function noOneWonScissors() {
    alert("No one won, scissors are equal");
    return alert(`Your score: ${playerScore}, computer's score: ${computerScore}`);
}

function noOneWonPaper() {
    alert("No one won, papers are equal");
    return alert(`Your score: ${playerScore}, computer's score: ${computerScore}`);
}

function playerWonRock() {
    playerScore = ++playerScore;
    alert("You won, rock beats scissors!");
    return alert(`Your score: ${playerScore}, computer's score: ${computerScore}`);
}

function computerWonPaper() {
    computerScore = ++computerScore;
    alert("You lose, paper beats rock!");
    return alert(`Your score: ${playerScore}, computer's score: ${computerScore}`);
}

function computerWonRock() {
    computerScore = ++computerScore;
    alert("You lose, rock beats scissors");
    return alert(`Your score: ${playerScore}, computer's score: ${computerScore}`);
}

function playerWonScissors() {
    playerScore = ++playerScore;
    alert("You won, scissors beats paper!");
    return alert(`Your score: ${playerScore}, computer's score: ${computerScore}`);
}

function playerWonPaper() {
    playerScore = ++playerScore;
    alert("You won, paper beats rock!");
    return alert(`Your score: ${playerScore}, computer's score: ${computerScore}`);
}

function computerWonScissors() {
    computerScore = ++computerScore;
    alert("You lose, scissors beats paper");
    return alert(`Your score: ${playerScore}, computer's score: ${computerScore}`);
}

for (let i = 0; i < 1000; i++) {
    playRound(playerSelection, computerSelection);
    console.log("Your score is: " + playerScore + ". Computer's score is: " + computerScore);
    declareRoundResult();
    if (playerScore === 5 || computerScore === 5) {
        break;
    }
}

function playRound(playerSelection, computerSelection) {

    playerSelection = prompt('Chose one of those options: "rock", "paper", "scissors": ', '');
    computerSelection = computerPlay();

    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerPlay();    
    if (playerScore < 5 || computerScore < 5) {
        if (playerSelection === "rock" & computerSelection === "rock") {
            roundResult = noOneWonRocks();
            return roundResult;
        } else if (playerSelection === "scissors" & computerSelection === "scissors") {
            roundResult = noOneWonScissors();
            return roundResult;
        } else if (playerSelection === "paper" & computerSelection === "paper") {
            roundResult = noOneWonPaper();
            return roundResult;
        } else if (playerSelection === "rock" & computerSelection === "scissors") {
            roundResult = playerWonRock();
            console.log(playerScore);
            return roundResult;
        } else if (playerSelection === "rock" & computerSelection === "paper") {
            roundResult = computerWonPaper();
            console.log(computerScore);
            return roundResult;
        } else if (playerSelection === "scissors" & computerSelection === "rock") {
            roundResult = computerWonRock();
            console.log(computerScore);
            return roundResult;
        } else if (playerSelection === "scissors" & computerSelection === "paper") {
            roundResult = playerWonScissors();
            console.log(playerScore);
            return roundResult;
        } else if (playerSelection === "paper" & computerSelection === "rock") {
            roundResult = playerWonPaper();
            console.log(playerScore);
            return roundResult;
        } else if (playerSelection === "paper" & computerSelection === "scissors") {
            roundResult = computerWonScissors();
            console.log(computerScore);
            return roundResult;
        } else {
            alert("Oh, you should've insert one of those: rock, scissors, paper.");   
        }
    }    
}

function declareRoundResult() {
    if (computerScore === 5) {
        alert("Computer won!");
        console.log("Computer won!");
    } else if (playerScore === 5) {
        alert("You won. congradulations!");
        console.log("You won. Congradulations!");
    }
}