
// randomly generatre rock paper or scissors
function getComputerChoice() {
    let randomNumber = Math.random();
    let choice;
    if (randomNumber < 0.33) 
    {
        choice = "rock";
    } 
    else if (randomNumber < 0.66) 
    {
        choice = "paper";
    } 
    else 
    {
        choice = "scissors";
    }
    return choice;
}

// plays a single round 
function singleRound(playerSelectionInput, computerSelectionInput) 
{ 
    let playerSelection = playerSelectionInput.toLowerCase();
    let computerSelection = computerSelectionInput.toLowerCase();

    if (playerSelection === "rock") 
    {
        if (computerSelection === "scissors") 
        {
            return "You Win! Rock beats Scissors";
        }
        else if (computerSelection === "paper") 
        {
            return "You Lose! Paper beats Rock";
        }
        return "Tie!";
        
    }
    else if (playerSelection === "scissors") 
    {
        if (computerSelection === "rock") 
        {
            return "You Lose! Rock beats Scissors";
        }
        else if (computerSelection === "paper") 
        {
            return "You Win! Scissors beats Paper";
        }
        return "Tie!";
    }
    else if (playerSelection === "paper") 
    {
        if (computerSelection === "rock") 
        {
            return "You Win! Paper beats Rock";
        }
        else if (computerSelection === "scissors") 
        {
            return "You Lose! Scissors beats Paper";
        }
        return "Tie!";
    }
}


function game() {
    let userScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i ++) 
    {
        let computerSelectionInput = getComputerChoice();
        let playerSelectionInput = prompt("Choose Rock, Paper, or Scissors?");
        let results = singleRound(playerSelectionInput, computerSelectionInput);
        if (results === "You Win! Paper beats Rock" || results === "You Win! Scissors beats Paper" || results === "You Win! Rock beats Scissors" ) 
        {
            userScore++
        }
        else if (results === "You Lose! Scissors beats Paper" || results === "You Lose! Rock beats Scissors" || results == "You Lose! Paper beats Rock" )
        {
            computerScore++
        }
        console.log(results);
    }
    if (computerScore > userScore) 
    {
        console.log("You Lost Against the Computer!");
    }
    else if (computerScore < userScore) 
    {
        console.log("You Won Against the Computer!");
    }
    else 
    {
        console.log("It's a tie!");
    }
}

game();
