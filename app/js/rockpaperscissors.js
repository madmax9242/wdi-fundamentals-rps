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
    return move || getInput();
}

function getComputerMove(move) {
    return move || randomPlay();
}



var winner = '';
function getWinner(playerMove,computerMove) {

    if (playerMove === computerMove) {
    	winner = "tie";
    }
    else if (playerMove == "rock"  && computerMove == "scissors")  {
    	winner = "player";
    }
    else if (playerMove == "rock" && computerMove == "paper")  {
    	winner = "computer";
    }
    else if (playerMove == "scissors" && computerMove == "rock")  {
    	winner = "computer";
    }
    else if (playerMove == "scissors" && computerMove == "paper")  {
    	winner = "player";
    }
    else if (playerMove == "paper" && computerMove == "rock")  {
    	winner = "player";
    }
    else if (playerMove == "paper" && computerMove == "scissors")  {
    	winner = "computer";
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    var move = '';
    
    while (playerWins < 5 && computerWins < 5)  {
		var playerMove = getPlayerMove(move);
		var computerMove = getComputerMove(move);
		var winner = getWinner(playerMove,computerMove);

		if (winner == "player")  {
			playerWins += 1;
		}
		else if (winner == "computer")  {
			computerWins +=1;
		}
		console.log('Player used ' + playerMove + ' and the Computer used ' + computerMove);
		if (playerWins == 5 || computerWins == 5)  {
			console.log('Game over.  The player won ' + playerWins + ' games, and the computer won ' + computerWins + ' games.');
			break;
		}
		console.log('The score is: Player- ' + playerWins + ' wins.  Computer- ' + computerWins + ' wins.');
    }
    
    return [playerWins, computerWins];
}


playToFive();

