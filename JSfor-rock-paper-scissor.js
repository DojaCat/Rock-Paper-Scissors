

let computerScore = 0
let playerScore = 0


function computerPlay (){
    const choices = ["Rock", "Paper", "Scissor"];
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    
    return(randomChoice);
    }

function playRound(playerSelection, computerPlay) { //This is the actual round, increments "playerScore" and "computerScore" based on who wins round
if (playerSelection == computerPlay) {
        result = `Computer also choose ${computerPlay}! It's a Draw!`;
    } else if ((playerSelection == "Paper" && computerPlay == "Rock") ||
               (playerSelection == "Rock" && computerPlay == "Scissor") ||
               (playerSelection == "Scissor" && computerPlay == "Paper")) {
                   playerScore = playerScore + 1;
                   result = `Computer choose: ${computerPlay}! ${playerSelection} beats ${computerPlay}. You get one point! Your score is: ${playerScore} and Computer score is: ${computerScore}.`;
               } else {
                computerScore = computerScore + 1;
                   result = `Computer choose: ${computerPlay}! ${computerPlay} beats ${playerSelection}. Computer gets one point! Your score is: ${playerScore} Computer score is: ${computerScore}`;
               } 
               
            return (result);
        }    

       // console.log(playRound(playerSelection, computerPlay())) // to test if function "playRound works"

        for (let i = 0; i < 5; i++){
            result = window.prompt('Rock, Paper or Scissor?', 'What do you choose?') //prompt user to input choice
            let playerSelection = result
            console.log(playRound(playerSelection, computerPlay())) // to see that loop for "playRound works"
        }

        function winLose () { //to give output based on who wins or loses (or if draw)
            if (playerScore > computerScore){
                console.log(`You won with ${playerScore} points while the computer only got ${computerScore} points. Yay! You sure showed that computer who's boss!`) 
            } else if (computerScore > playerScore) {
                console.log(`The computer won with ${computerScore} points while you only got ${playerScore} points. Oh no! You are inferior to the computer!`)
            } else if (playerScore == computerScore){
                console.log(`You had ${playerScore} points and the computer had ${computerScore} points. No one wins! Boring...`)
            } else {
                console.log("You and the computer where both unlucky and had too many draws to decide who's the superior life form")
            }
        }
        winLose()