// ******************************* //

// Write computerPlay() function. Randomly returns
// "Rock", "Paper", or "Scissors" for the computer
function computerPlay() {
  // Array for computer selections
  const selection = ["rock", "paper", "scissors"];
  // const selection = ["rock", "rock", "rock"];
  // const selection = ["paper", "paper", "paper"];
  // const selection = ["scissors", "scissors", "scissors"];
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
// const resultsDisplay = document.querySelector(".score-display");
const mainScore = document.querySelector(".main-score-display");
// Game Buttons
const gameBtns = document.querySelectorAll(".choiceBtn");
const refreshBtn = document.querySelector(".refreshBtn");
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");

// Event Capture

// Player Selection function
function playerPlay() {
  gameBtns.forEach(item => {
    item.addEventListener("click", e => {
      playerSelection = e.currentTarget.dataset.id;
      playRound(playerSelection, computerSelection);
    });
  });
  return playerSelection;
}
// playerPlay();
// Start new game
refreshBtn.addEventListener("click", () => {
  console.log("Refreshing...");
});

playerSelection = playerPlay();
// Decide Winner
function playRound(playerSelection, computerSelection) {
  // Check for same choice
  let playerChoice = playerSelection;
  let computerChoice = computerSelection;

  if (playerChoice === computerChoice) {
    gamesDrawnCounter++;
    console.log("Same choice. Try again!");
    mainScore.innerHTML = `<p class="same-choice-win">Same choice. Try again!</p>
                           <p>Games Played: ${gameCounter}</p>`;
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    playerCount++;
    console.log(`${playerChoice} beats ${computerChoice}`);
    console.log(`Games won: ${playerCount}`);
    console.log("Yu win this round!");
    playerScore.innerHTML = `${playerCount}`;
    mainScore.innerHTML = `<p class="same-choice-win">You win this round!</p>
    <p>${capitalizePlayer(playerChoice)} beats ${capitalizeComputer(
      computerChoice
    )}</p>`;
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    console.log(`${playerChoice} beats ${computerChoice}`);
    playerCount++;
    console.log(`Games won: ${playerCount}`);
    console.log("Yu win this round!");
    playerScore.innerHTML = `${playerCount}`;
    mainScore.innerHTML = `<p class="same-choice-win">You win this round!</p>
     <p>${capitalizePlayer(playerChoice)} beats ${capitalizeComputer(
      computerChoice
    )}</p>`;
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    console.log(`${playerChoice} beats ${capitalizeComputer(computerChoice)}`);
    playerCount++;
    console.log(`Games won: ${playerCount}`);
    console.log("Yu win this round!");
    playerScore.innerHTML = `${playerCount}`;
    mainScore.innerHTML = `<p class="same-choice-win">You win this round!</p>
    <p>${capitalizePlayer(playerChoice)} beats ${capitalizeComputer(
      computerChoice
    )}</p>`;
  }

  // Computer selection comparison
  if (computerChoice === "rock" && playerChoice === "scissors") {
    computerCount++;

    console.log(
      `${capitalizeComputer(computerChoice)} beats ${capitalizePlayer(
        playerChoice
      )}`
    );
    console.log(`Games won: ${computerCount}`);
    console.log("Computer wins this round!");
    computerScore.innerHTML = `${computerCount}`;
    mainScore.innerHTML = `<p class="same-choice-win">Computer wins this round!</p>
    <p>${capitalizeComputer(computerChoice)} beats ${capitalizePlayer(
      playerChoice
    )}</p>`;
  } else if (computerChoice === "scissors" && playerChoice === "paper") {
    computerCount++;
    console.log(
      `${capitalizeComputer(computerChoice)} beats ${capitalizePlayer(
        playerChoice
      )}`
    );
    console.log(`Games won: ${computerCount}`);
    console.log("Computer wins this round!");
    computerScore.innerHTML = `${computerCount}`;
    mainScore.innerHTML = `<p class="same-choice-win">Computer wins this round!</p>
       <p>${capitalizeComputer(computerChoice)} beats ${capitalizePlayer(
      playerChoice
    )}</p>`;
  } else if (computerChoice === "paper" && playerChoice === "rock") {
    computerCount++;

    console.log(
      `${capitalizeComputer(computerChoice)} beats ${capitalizePlayer(
        playerChoice
      )}`
    );
    console.log(`Games won: ${computerCount}`);
    console.log("Computer wins this round!");
    computerScore.innerHTML = `${computerCount}`;
    mainScore.innerHTML = `<p class="same-choice-win">Computer wins this round!</p>
          <p>${capitalizeComputer(computerChoice)} beats ${capitalizePlayer(
      playerChoice
    )}</p>`;
  }
  // Game counter
  gameCounter++;
}
// playRound(playerPlay(), computerPlay());

// Start game
// game(playerSelection, computerPlay());

// Write game() function that calls the playRound() function
// and play a 5-round game that keeps score and declares a
// winner, or loser
function game(playerSelection, computerSelection) {
  // Internal game counter to monitor games played
  let internalGameCounter = 7;
  for (i = 0; i < internalGameCounter; i++) {
    // playerSelection = prompt("Enter a selection");
    if (playRound(playerSelection, computerSelection) === 5) {
      break;
    } else {
      internalGameCounter++;
    }
  }
}

// Declare winners
function playerRoundWinner(
  playerChoice,
  computerChoice,
  playerCount,
  gamesDrawnCounter
) {
  mainScore.innerHTML = `<p>${capitalizePlayer(
    playerChoice
  )} beats ${capitalizeComputer(computerChoice)}</p>
                          <p>You win this round!</p>
                          <p>Player Wins: ${playerCount}</p>
                          <p>Games Tied: ${gamesDrawnCounter}</p>`;
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
