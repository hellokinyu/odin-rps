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

// When called, starts the game
function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // When playRound() is called, it takes the human and computer choice and decides who wins.
    function playRound(humanChoice, computerChoice) {
        if (humanChoice == "Rock" && computerChoice == "Rock") {
            console.log("It is a tie");
        } else if (humanChoice == "Rock" && computerChoice == "Paper") {
            console.log("You lose! Paper beats rock!");
            computerScore += 1;
        } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
            console.log("You win! Rock beats scissors!");
            humanScore += 1;
        } else if (humanChoice == "Paper" && computerChoice == "Rock") {
            console.log("You win! Paper beats rock!");
            humanScore += 1;
        } else if (humanChoice == "Paper" && computerChoice == "Paper") {
            console.log("It is a tie");
        } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
            console.log("You lose! Scissors beats paper!");
            computerScore += 1;
        } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
            console.log("You lose! Rock beats scissors!");
            computerScore += 1;
        } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
            console.log("You win! Scissors beats paper!");
            humanScore += 1;
        } else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
            console.log("It is a tie");
        }
    }

    let rounds = 0;
    while (rounds < 5) {
        // 1 round plays
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
        console.log(`You currently have ${humanScore} points. Computer has ${computerScore} points.`);
        rounds += 1;
    }
}

playGame()