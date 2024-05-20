let userScore = 0;
let computerScore = 0;
let userTurn = true; // true means user is batting, false means user is bowling
let gamePhase = "batting"; // "batting" or "bowling"

function showHand(userChoice) {
    const computerChoice = Math.floor(Math.random() * 6) + 1;
    const userHand = document.getElementById("userHand");
    const computerHand = document.getElementById("computerHand");
    const messageDiv = document.getElementById("message");

    userHand.src = `images/${userChoice}.png`;
    computerHand.src = `images/${computerChoice}.png`;

    if (gamePhase === "batting") {
        if (userChoice === computerChoice) {
            messageDiv.innerText = "You're out! Now it's your turn to bowl.";
            gamePhase = "bowling";
            userTurn = false;
        } else {
            userScore += userChoice;
            document.getElementById("userScore").innerText = `Score: ${userScore}`;
        }
    } else if (gamePhase === "bowling") {
        if (userChoice === computerChoice) {
            messageDiv.innerText = "Computer is out! The game is over.";
            gamePhase = "finished";
            checkWinner();
        } else {
            computerScore += computerChoice;
            document.getElementById("computerScore").innerText = `Score: ${computerScore}`;
        }
    }
}

function resetGame() {
    userScore = 0;
    computerScore = 0;
    gamePhase = "batting";
    userTurn = true;
    document.getElementById("userScore").innerText = `Score: ${userScore}`;
    document.getElementById("computerScore").innerText = `Score: ${computerScore}`;
    document.getElementById("message").innerText = "";
}

function checkWinner() {
    const messageDiv = document.getElementById("message");
    if (userScore > computerScore) {
        messageDiv.innerText = "You win!";
    } else if (userScore < computerScore) {
        messageDiv.innerText = "Computer wins!";
    } else {
        messageDiv.innerText = "It's a tie!";
    }
    setTimeout(resetGame, 3000); // Reset the game after 3 seconds
}
