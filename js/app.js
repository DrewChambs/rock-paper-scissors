// ******************************* //

// Write computerPlay() function. Randomly returns
// "Rock", "Paper", or "Scissors" for the computer
function computerPlay() {
  // Test Arrays...
  // const selection = ["Scissors", "Scissors", "Scissors"];
  // const selection = ["RocK", "RocK", "RocK"];
  
  // Array for computer selections
  const selection = ["Rock", "Paper", "Scissors"];
  const len = selection.length;
  let choice = Math.floor(Math.random() * len);
  return selection[choice];
}

// Player selection
// let playerSelection = prompt("Enter a selection");
let playerSelection;
let computerSelection = computerPlay();

// Counters for game, player, computer, and games tied
let gameCounter = 0;
let playerCount = 0;
let computerCount = 0;
let gamesDrawnCounter = 0;

// Write playRound() function that takes
// 2 parameters(playerSelection, computerSelection)
// And displays a winner
function playRound(playerSelection, computerSelection) {
  // Convert selections to lowercase to allow comparison
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerPlay().toLowerCase();

  // Decide winner of each round
  // First see if choices are eual
  if (playerChoice === computerChoice) {
    gamesDrawnCounter++;
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

  // Game Display Function ////////////////////////
  displayResults(
    playerCount,
    computerCount,
    gamesDrawnCounter,
    gameCounter,
    playerChoice,
    computerChoice
  );

  if (playerCount === 3) {
    console.log(`Player Wins! Computer Loses!`);
    return 3;
  } else if (computerCount === 3) {
    console.log(`Computer Wins! Player Loses!`);
    return 3;
  }
}

// Call game to play a session
game(playerSelection, computerPlay());

// Write game() function that calls the playRound() function
// and play a 5-round game and keeps score and declares a
// winner, or loser
function game(playerSelection, computerSelection) {
  // Internal game counter to monitor games played
  let internalGameCounter = 5;
  for (i = 0; i < internalGameCounter; i++) {
    let playerSelection = prompt("Enter a selection");

    if (playRound(playerSelection, computerSelection) === 3) {
      break;
    } else {
      internalGameCounter++;
    }
  }
}

// Display results function
function displayResults(
  playerCount,
  computerCount,
  gamesDrawnCounter,
  gameCounter,
  playerChoice,
  computerChoice
) {
  // Game Display ////////////////////////
  console.log(
    `Player plays "${playerChoice.toUpperCase()}", Computer plays "${computerChoice.toUpperCase()}"`
  );

  console.log(
    `Games played: ${gameCounter} | Games tied: ${gamesDrawnCounter}`
  );
  console.log("Games Won:");
  console.log(`Player: ${playerCount}`);
  console.log(`Computer: ${computerCount}`);
  // console.log(`Games tied: ${gamesDrawnCounter}`);
  console.log(`----------------------------------------------`);
  console.log(`----------------------------------------------`);
}
