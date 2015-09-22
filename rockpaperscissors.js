////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if(playerMove === computerMove) {
         return "tie";
    }   
    else if (playerMove === "paper" && computerMove === "rock"){
            return "player";
    }  
    else if (playerMove === "paper" && computerMove === "scissors"){
            return "computer";
    }
    else if (playerMove === "rock" && computerMove === "scissors"){
            return "player";
    } 
    else if (playerMove === "rock" && computerMove === "paper"){
            return "computer";
    }
    else if (playerMove === "scissors" && computerMove === "paper"){
            return "player";
    }  
    else if (playerMove === "scissors" && computerMove === "rock"){
            return "computer";
    }
};

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while((playerWins < 5) && (computerWins < 5)){
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        console.log("Player chose:" + " " + playerMove);
        console.log("Computer chose:" + " " + computerMove);
        var winner = getWinner(playerMove,computerMove);
        if(winner === "player"){
            console.log("Player chose:" + " " + playerMove + "and Computer chose:" + " " + computerMove);
            console.log("Player won this round!");
            playerWins +=1;
            console.log(playerWins,computerWins);
        }
        else if(winner === "computer"){
            console.log("Player chose:" + " " + playerMove + "and Computer chose:" + " " + computerMove);
            console.log("Computer won this round!");
            computerWins +=1;
            console.log(playerWins,computerWins);    
        }
        else {
            console.log("It's a tie!.");
            winner = getWinner(playerMove,computerMove);

        }
    } 
    return [playerWins, computerWins];
}

