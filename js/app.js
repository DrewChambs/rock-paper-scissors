// ******************************* //

// Write computerPlay() function. Randomly returns
// "Rock", "Paper", or "Scissors" for the computer
function computerPlay() {
  // Array for computer selections
  // const selection = ["Rock", "Paper", "Scissors"];
  const selection = ["Rock", "Rock", "Rock"];
  const len = selection.length;
  let choice = Math.floor(Math.random() * len);
  return selection[choice];
}

// Player selection
let playerSelection;
let computerSelection = computerPlay();

// Counters
let gameCounter = 0;
let playerCount = 0;
let computerCount = 0;
let gamesDrawnCounter = 0;

////////////////////////////////////////
//Rock, Paper, Scissors 23 de abril, 2022 //
////////////////////////////////////////
//  ********* UI ***************
// Display Container
const resultsDisplay = document.querySelector(".score-display");
// Game Buttons
const gameBtns = document.querySelectorAll(".choiceBtn");
const refreshBtn = document.querySelector(".refreshBtn");
gameBtns.forEach(item => {
  item.addEventListener("click", e => {
    playerSelection = e.currentTarget.dataset.id;
    console.log(playerSelection);
    game(playerSelection, computerPlay());
  });
});
// Start new game
refreshBtn.addEventListener("click", () => {
  console.log("Refreshing...");
  game(playerSelection, computerPlay());
});
// Write playRound() function that takes
// 2 parameters(playerSelection, computerSelection)
// And displays a winner
function playRound(playerSelection, computerSelection) {
  // Convert to lowercase for comparison
  const playerChoice = playerSelection.toLowerCase();
  const computerChoice = computerPlay().toLowerCase();

  // Check for same choice
  if (playerChoice === computerChoice) {
    gamesDrawnCounter++;
    console.log("Same choice. Try again!");
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    playerRoundWinner(playerChoice, computerChoice);
    playerCount++;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    playerRoundWinner(playerChoice, computerChoice);
    playerCount++;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    playerRoundWinner(playerChoice, computerChoice);
    playerCount++;
  }
  // Computer selection comparison
  if (computerChoice === "rock" && playerChoice === "scissors") {
    computerRoundWinner(playerChoice, computerChoice);
    computerCount++;
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    computerRoundWinner(playerChoice, computerChoice);
    computerCount++;
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    computerRoundWinner(playerChoice, computerChoice);
    computerCount++;
  }
  // Game counter
  gameCounter++;

  // Console Display
  displayResults(
    playerCount,
    computerCount,
    gamesDrawnCounter,
    gameCounter,
    playerChoice,
    computerChoice
  );
  // Return winner
  if (playerCount === 3) {
    console.log(`Player Wins!`);
    return 3;
  } else if (computerCount === 3) {
    console.log(`Computer Wins!`);
    return 3;
  }
}

// Start game
// game(playerSelection, computerPlay());

// Write game() function that calls the playRound() function
// and play a 5-round game that keeps score and declares a
// winner, or loser
function game(playerSelection, computerSelection) {
  // Internal game counter to monitor games played
  let internalGameCounter = 7;
  for (i = 0; i < internalGameCounter; i++) {
    playerSelection = prompt("Enter a selection");
    if (playRound(playerSelection, computerSelection) === 3) {
      break;
    } else {
      internalGameCounter++;
    }
  }
}

// Display results
function displayResults(
  playerCount,
  computerCount,
  gamesDrawnCounter,
  gameCounter,
  playerChoice,
  computerChoice
) {
  console.log(
    `Player plays "${playerChoice.toUpperCase()}", Computer plays "${computerChoice.toUpperCase()}"`
  );

  console.log(
    `Games played: ${gameCounter} | Games tied: ${gamesDrawnCounter}`
  );
  console.log("Games Won:");
  console.log(`Player: ${playerCount}`);
  console.log(`Computer: ${computerCount}`);
  console.log(`----------------------------------------------`);
  console.log(`----------------------------------------------`);
}

// Declare winners
function playerRoundWinner(playerChoice, computerChoice, gameDisplay) {
  resultsDisplay.textContent = `You Win! ${capitalizePlayer(
    playerChoice
  )} beats ${capitalizeComputer(computerChoice)}`;
  return console.log(
    `You Win! ${capitalizePlayer(playerChoice)} beats ${capitalizeComputer(
      computerChoice
    )}`
  );
}

function computerRoundWinner(playerChoice, computerChoice) {
  resultsDisplay.textContent = `Computer wins this round! ${capitalizeComputer(
    computerChoice
  )} beats ${capitalizePlayer(playerChoice)}`;
  console.log(
    `Computer wins this round! ${capitalizeComputer(
      computerChoice
    )} beats ${capitalizePlayer(playerChoice)}`
  );
}

// Capitalize first letter for display
function capitalizePlayer(playerChoice) {
  firstLetter = playerChoice.charAt(0).toUpperCase();
  let result = playerChoice.replace(playerChoice.charAt(0), firstLetter);
  return result;
}
function capitalizeComputer(computerChoice) {
  firstLetter = computerChoice.charAt(0).toUpperCase();
  let result = computerChoice.replace(computerChoice.charAt(0), firstLetter);
  return result;
}
