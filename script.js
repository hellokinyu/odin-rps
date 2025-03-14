// Generates the computers choice
function getComputerChoice() {
    let x = Math.floor(Math.random() * 10);

    if (x === 1 || x === 2 || x === 3) {
        return "Rock";
    } else if (x === 4 || x === 5 || x === 6) {
        return "Paper";
    } else if (x === 7 || x === 8 || x === 9) {
        return "Scissors";
    } else {
        return "Rock";
    }
}

// Generates the human choice
function getHumanChoice() {
    let y = prompt("Let's play Rock, Paper, Scissors!").toLowerCase();
    if (y === "rock") {
        return "Rock"
    } else if (y === "paper") {
        return "Paper"
    } else if (y === "scissors") {
        return "Scissors"
    } else {
        return "Invalid. Please choose Rock, Paper or Scissors."
    }
}

let humanScore = 0;
let computerScore = 0;

// When called, starts the game
function playGame() {
    // while (computerScore < 5 || humanScore < 5) {
    let rounds = 0;

    //Select the buttons and store it under human choice
    const rockButton = document.querySelector("#rock");
    rockButton.addEventListener("click", function rockClick() {
        humanChoice = "Rock";
        computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        rounds += 1;
        roundsDiv.textContent = `Round: ${rounds}`
    })

    const paperButton = document.querySelector("#paper");
    paperButton.addEventListener("click", function paperClick() {
        humanChoice = "Paper";
        computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        rounds += 1;
        roundsDiv.textContent = `Round: ${rounds}`
    })

    const scissorsButton = document.querySelector("#scissors");
    scissorsButton.addEventListener("click", function scissorsClick() {
        humanChoice = "Scissors";
        computerChoice = getComputerChoice();
        playRound(humanChoice,computerChoice);
        rounds += 1;
        roundsDiv.textContent = `Round: ${rounds}`
    })

    const messageDiv = document.querySelector("#message");
    const roundsDiv = document.querySelector("#rounds"); 
    const scoreContainer = document.querySelector("#scoreContainer");
    const humanScoreDiv = document.querySelector("#humanScore");
    const computerScoreDiv = document.querySelector("#computerScore");

    // When playRound() is called, it takes the human and computer choice and decides who wins.
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "Rock" && computerChoice == "Rock") {
            console.log("It is a tie");
            messageDiv.textContent = "It is a tie";
            computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
            humanScoreDiv.textContent = `Your Score: ${humanScore}`;
        } else if (humanChoice == "Rock" && computerChoice == "Paper") {
            console.log("You lose! Paper beats rock!");
            messageDiv.textContent = "You chose Rock. Computer chose Paper. You lose!";
            computerScore += 1;
            computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
            humanScoreDiv.textContent = `Your Score: ${humanScore}`;
        } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
            console.log("You win! Rock beats scissors!");
            messageDiv.textContent = "You chose Rock. Computer chose Scissors. You win!";
            humanScore += 1;
            computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
            humanScoreDiv.textContent = `Your Score: ${humanScore}`;
        } else if (humanChoice == "Paper" && computerChoice == "Rock") {
            console.log("You win! Paper beats rock!");
            messageDiv.textContent = "You chose Paper. Computer chose Rock. You win!";
            humanScore += 1;
            computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
            humanScoreDiv.textContent = `Your Score: ${humanScore}`;
        } else if (humanChoice == "Paper" && computerChoice == "Paper") {
            console.log("It is a tie");
            messageDiv.textContent = "It is a tie";
            computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
            humanScoreDiv.textContent = `Your Score: ${humanScore}`;
        } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
            console.log("You lose! Scissors beats paper!");
            messageDiv.textContent = "You chose Paper. Computer chose Scissors. You lose!";
            computerScore += 1;
            computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
            humanScoreDiv.textContent = `Your Score: ${humanScore}`;
        } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
            console.log("You lose! Rock beats scissors!");
            messageDiv.textContent = "You chose Scissors. Computer chose Rock. You lose!";
            computerScore += 1;
            computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
            humanScoreDiv.textContent = `Your Score: ${humanScore}`;
        } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
            console.log("You win! Scissors beats paper!");
            messageDiv.textContent = "You chose Scissors. Computer chose Paper. You win!";
            humanScore += 1;
            computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
            humanScoreDiv.textContent = `Your Score: ${humanScore}`;
        } else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
            console.log("It is a tie");
            messageDiv.textContent = "It is a tie";
            computerScoreDiv.textContent = `Computer Score: ${computerScore}`;
            humanScoreDiv.textContent = `Your Score: ${humanScore}`;
        }

        if (computerScore >= 5 || humanScore >= 5) {
            if (computerScore > humanScore) {
                messageDiv.textContent = "Computer Wins!";
            } else if (computerScore < humanScore) {
                messageDiv.textContent = "You Win!";
            } else {
                messageDiv.textContent = "It is a Tie!";
            }
        }
    }
}
playGame()