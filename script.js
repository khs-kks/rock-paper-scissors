function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let stringChoice = "";

    switch(choice) {
        case 0:
            stringChoice = "rock";
            break;
        case 1:
            stringChoice = "paper";
            break;
        default:
            stringChoice = "scissors";
            
    }
    return stringChoice;
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let winner = "";

    if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            winner = "It's a draw!";
        } else if (computerSelection === "rock") {
            winner = "You Lose! Rock beats scissors!";
        } else {
            winner = "You win! Scissors beat paper!";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            winner = "You lose! Scissors beat paper!";
        } else if (computerSelection === "rock") {
            winner = "You Win! Paper beats rock!";
        } else {
            winner = "It's a draw! Paper-Paper";
        }
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            winner = "You win! rock beats scissors!";
        } else if (computerSelection === "rock") {
            winner = "It's a draw! Rock-Rock";
        } else {
            winner = "You lose! Paper beats rock!";
        }
    }

    return winner;
}


// function game() {
//     let playerScore = 0;
//     let computerScore = 0;

//     for (let i = 0; i < 5; i++) {
//         let playerChoice = prompt("Rock, Paper, Scissors");
//         let computerChoice = getComputerChoice();

//         let winner = playRound(playerChoice, computerChoice);
//         winner = winner.toLowerCase();

//         if (winner.includes("lose")) {
//             computerScore += 1;
//             console.log("Lose");
//         } else if (winner.includes("win")) {
//             playerScore += 1;
//             console.log("Win");
//         } else {
//             console.log("Draw");
//         }
//     }

//     if (playerScore > computerScore) {
//         console.log("You win!");

//     } else if (playerScore === computerScore) {
//         console.log("It's a draw!");
        
//     } else {
//         console.log("PC wins!");
//     }
// }



// game();
function game(){

    const buttons = document.querySelectorAll("button");
    const div = document.querySelector('.score');
    
    let playerScore = 0;
    let computerScore = 0;

    buttons.forEach( (button) => {
        button.addEventListener('click', () => {
            // console.log(button.getAttribute('class'));
            let computerChoice = getComputerChoice();
            let playerChoice = button.getAttribute('class');
            let winner = playRound(playerChoice, computerChoice);
            // console.log(winner);



            if (playerScore < 5 && computerScore < 5) {
                let temp_winner = winner.toLowerCase();

                if (temp_winner.includes("lose")) {
                    computerScore += 1;
                    div.textContent = `You lose! ${playerScore} : ${computerScore}`;
                } else if (temp_winner.includes("win")) {
                    playerScore += 1;
                    div.textContent = `You win! ${playerScore} : ${computerScore}`;

                } else {
                    div.textContent = `It's a draw! ${playerScore} : ${computerScore}`;
                }   
            };

            if (playerScore >= 5) {
                div.textContent = `Congratulations! You win! ${playerScore} : ${computerScore}`;
                playerScore = 0;
                computerScore = 0;
            } else if (computerScore >=5 ) {
                div.textContent = `Game over! PC wins! ${playerScore} : ${computerScore}` ;
                playerScore = 0;
                computerScore = 0;
            }
            // div.textContent = winner;
            
    
        });
    });
}

game();