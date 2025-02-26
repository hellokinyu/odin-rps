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


console.log(getHumanChoice())
/* 
*/


