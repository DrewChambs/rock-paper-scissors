// ******************************* //

// Write computerPlay() function. Randomly returns
// "Rock", "Paper", or "Scissors" for the computer
function computerPlay() {
  // Array for computer selections
  // const selection = ["Rock", "Paper", "Scissors"];
  // const selection = ["Scissors", "Scissors", "Scissors"];
  const selection = ["RocK", "RocK", "RocK"];
  const len = selection.length;
  let choice = Math.floor(Math.random() * len);
  return selection[choice];
}

// Player selection
// let playerSelection = prompt("Enter a selection");
let playerSelection;
let computerSelection = computerPlay();

// Counters for game, player, and computer
let gameCounter = 0;
let playerCount = 0;
let computerCount = 0;
// Write playRound() function that takes
// 2 parameters(playerSelection, computerSelection)
// And displays a winner
function playRound(playerSelection, computerSelection) {
  // Convert selections to lowercase to allow comparison
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerPlay().toLowerCase();
  console.log(playerChoice, computerChoice);

  // Decide winner of each round
  // First see if choices are eual
  if (playerChoice === computerChoice) {
    // Condtional to reset counter if selections are equal
    gameCounter--;
    console.log("Same choice. Try again!");
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    playerCount++;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerCount++;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerCount++;
  }

  if (computerChoice === "rock" && playerChoice === "scissors") {
    computerCount++;
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    computerCount++;
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    computerCount++;
  }

  // Game counter increment and display
  gameCounter++;

  // Display game counter
  console.log(`Games played: ${gameCounter}`);

  // Declare winner after "3" wins
  if (playerCount === 3) {
    console.log(`Player wins!`);
  }
  if (computerCount === 3) {
    console.log(`Computer wins!`);
  }
  console.log(`Player games: ${playerCount}`);
  console.log(`Computer games: ${computerCount}`);
}

// Write game() function that calls the playRound() function
// and play a 5-round game and keeps score and declares a
// winner, or loser
function game(playerSelection, computerSelection) {
  for (i = 0; i < 5; i++) {
    let playerSelection = prompt("Enter a selection");
    playRound(playerSelection, computerPlay());
  }
}

game(playerSelection, computerPlay());
