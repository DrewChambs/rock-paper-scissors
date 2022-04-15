// Get player selection
// let userChoice = prompt("Pleae enter a selection");

// Create array for results of gampeplay
const outcomes = [
  "Paper beats Rock",
  "Rock beats Scissors",
  "Scissors beats Paper",
];

// Capture user selection
let playerSelection = prompt("Enter a selection");

// Write computerPlay() function. Randomly returns
// "Rock", "Paper", or "Scissors" for the computer
function computerPlay() {
  // Create array for selection display
  const selection = ["Rock", "Paper", "Scissors"];

  // Make random selection
  let choice = Math.floor(Math.random() * selection.length);

  return selection[choice];
}

// Write playRound() function that takes
// 2 parameters(playerSelection, computerSelection)
// And displays a winner or loser
function playRound(playerSelection, computerSelection) {
  // Make selection case-insensitive for user
  let playerUser = playerSelection.toLowerCase();
  let computerUser = computerSelection.toLowerCase();
  // console.log(playerUser);
  // Counters to add player/computer selections
  let playCount = 0;
  let computerCount = 0;

  // Gameplay to see who wins
  if (playerUser === computerUser) {
    console.log(
      `Player One you chose ${playerSelection} just like the computer. Try again!`
    );
    prompt("Enter another selection");
  } else if (playerUser === "rock" && computerUser === "scissors") {
    console.log(`${playerSelection} beats ${computerSelection}. You win!`);
  } else if (playerUser === "paper" && computerUser === "rock") {
    console.log(`${playerSelection} beats ${computerSelection}. You win!`);
  } else if (playerUser === "scissors" && computerUser === "paper") {
    console.log(`${playerSelection} beats ${computerSelection}. You win!`);
  }

  if (computerUser === "paper" && playerUser === "rock") {
    console.log(
      `${computerSelection} beats ${playerSelection}. Computer wins!`
    );
  } else if (computerUser === "rock" && playerUser === " scissors") {
    console.log(
      `${computerSelection} beats ${playerSelection}. Computer wins!`
    );
  } else if (computerUser === "scissors" && playerUser === "paper") {
    console.log(
      `${computerSelection} beats ${playerSelection}. Computer wins!`
    );
  }

  return playerUser, computerUser;
}

console.log(playRound(playerSelection, computerPlay()));

// Write game() function that calls the playRound() function
// and play a 5-round game and keeps score and declares a
// winner, or loser

// **************************************************
// Function test below
// const playerSelection = "ROCKU";
// const computerSelection = computerPlay();

// Counters for game
// Counters for each selection
// let rockCount = 0;
// let paperCount = 0;
// let scissorsCount = 0;
