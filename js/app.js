// Get player selection
// let playerSelection = prompt("Pleae enter a selection");
// console.log(playerSelection);

// Create array for results of gampeplay
const outcomes = [
  "Paper beats Rock",
  "Rock beats Scissors",
  "Scissors beats Paper",
];

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
  let computerUser = playerSelection.toLowerCase();

  // Counters for each selection
  let rockCount = 0;
  let paperCount = 0;
  let scissorsCount = 0;

  // Counters to add player/computer selections
  let playCount = 0;
  let computerCount = 0;

  return playerUser, computerUser;

  // If count === 3, player wins
  // if (playCount === 3) {
  //   console.log(`You won! Player One beats selection`);
  // } else {
  //   console.log(`You lose! selection beats selection`);
  // }
  // if (computerCount === 3) {
  //   console.log(`You won! Computer beats selection`);
  // } else {
  //   console.log(`You lose! selection beats selection`);
  // }
}
// playRound("Rock", "BOOGER");

const playerSelection = "Rock";
const computerSelection = computerPlay();

console.log(playRound(playerSelection, computerSelection));
// Write game() function that calls the playRound() function
// and play a 5-round game and keeps score and declares a
// winner, or loser
