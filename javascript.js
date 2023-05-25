
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

function removeAllChildNodes(parent)
{
    while (parent.firstChild) 
    {
        parent.removeChild(parent.firstChild);
    }
}


const results_display = document.querySelector('.results_display');
const rock_results = document.createElement('div');
const paper_results = document.createElement('div');
const scissors_results = document.createElement('div');
const score_display = document.querySelector('.score_display');
const score_count = document.querySelector('.score_count');
const computer_score_count = document.querySelector('.computer_score_count');
const computer_score_display = document.querySelector('.computer_score');

let player_score = 0;
let computer_score = 0;


// rock results 
const rock = document.querySelector('#rock');

rock.addEventListener('click', () => {
    if (player_score === 5 || computer_score === 5)
    {
        return 0;
    }
    removeAllChildNodes(results_display);
    let results = singleRound("rock", getComputerChoice());
    if (results === "You Win! Rock beats Scissors")
    {
        rock_results.textContent = "You Win! Rock beats Scissors";
        player_score++;
        score_count.textContent = player_score;
        score_display.appendChild(score_count);
    }
    else if (results === "You Lose! Paper beats Rock")
    {
        rock_results.textContent = "You Lose! Paper beats Rock";
        computer_score++;
        computer_score_count.textContent = computer_score;
        computer_score_display.appendChild(computer_score_count);
    }
    else 
    {
        rock_results.textContent = "Tie!";
    }
    results_display.appendChild(rock_results);
});

// paper results
const paper = document.querySelector('#paper');

paper.addEventListener('click', () => {
    if (player_score === 5 || computer_score === 5)
    {
        return 0;
    }
    removeAllChildNodes(results_display);
    let results = singleRound("paper", getComputerChoice());
    if (results === "You Win! Paper beats Rock")
    {
        paper_results.textContent = "You Win! Paper beats Rock";
        player_score++;
        score_count.textContent = player_score;
        score_display.appendChild(score_count);
    }
    else if (results === "You Lose! Scissors beats Paper")
    {
        paper_results.textContent = "You Lose! Scissors beats Paper";
        computer_score++;
        computer_score_count.textContent = computer_score;
        computer_score_display.appendChild(computer_score_count);
    }
    else 
    {
        paper_results.textContent = "Tie!";
    }
    results_display.appendChild(paper_results);
});


// scissors results
const scissors = document.querySelector('#scissors');

scissors.addEventListener('click', () => {
    if (player_score === 5 || computer_score === 5)
    {
        return 0;
    }
    removeAllChildNodes(results_display);
    let results = singleRound("scissors", getComputerChoice());
    if (results === "You Win! Scissors beats Paper")
    {
        scissors_results.textContent = "You Win! Scissors beats Paper";
        player_score++;
        score_count.textContent = player_score;
        score_display.appendChild(score_count);
    }
    else if (results === "You Lose! Rock beats Scissors")
    {
        scissors_results.textContent = "You Lose! Rock beats Scissors";
        computer_score++;
        computer_score_count.textContent = computer_score;
        computer_score_display.appendChild(computer_score_count);
    }
    else 
    {
        scissors_results.textContent = "Tie!";
    }
    results_display.appendChild(scissors_results);
});


const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
    if (player_score === 5 || computer_score === 5) {
        player_score = 0;
        score_count.textContent = player_score;
        score_display.appendChild(score_count);

        computer_score = 0;
        computer_score_count.textContent = computer_score;
        computer_score_display.appendChild(computer_score_count);
    }
});