// Random Computer Selection
function computerPlay() {
  // const selection = ["rock", "paper", "scissors"];
  const selection = ["rock", "rock", "rock"];
  // const selection = ["scissors", "scissors", "scissors"];
  const len = selection.length;
  let choice = Math.floor(Math.random() * len);
  // console.log(`Random num: ${choice}`);
  // console.log(`Selection: ${selection[choice]}`);
  return selection[choice];
}

// ****** UI ******* //
// Buttons ******** //
const chooseBtn = document.querySelectorAll(".choiceBtn");
const resetBtn = document.querySelector(".resetBtn");
// Scores ******** //
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");
// Main Score Display ******* //
const mainScoreDisplay = document.querySelector(
  ".main-score-display-container"
);

// Start Game
chooseBtn.forEach(item => {
  item.addEventListener("click", e => {
    // Get player selection
    let playerSelection = e.currentTarget.dataset.id;
    // Start game
    playRound(playerSelection, computerPlay());
  });
});

// Reset
resetBtn.addEventListener("click", () => {
  console.log("Stop the game!");
  resetGame();
});

// Counters
let playerCount = 0;
let computerCount = 0;
let gameCount = 0;
let gamesTied = 0;

function playRound(playerSelection, computerSelection) {
  // Player Selection
  if (playerSelection === computerSelection) {
    gamesTied++;
    gameCount++;
    sameChoiceDisplay(gameCount, gamesTied);
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    gameCount++;
    playerCount++;
    playerDisplay(playerSelection, computerSelection, gameCount, gamesTied);
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    gameCount++;
    playerCount++;
    playerDisplay(playerSelection, computerSelection, gameCount, gamesTied);
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    gameCount++;
    playerCount++;
    playerDisplay(playerSelection, computerSelection, gameCount, gamesTied);
  }

  // Computer selection
  if (computerSelection === "rock" && playerSelection === "scissors") {
    gameCount++;
    computerCount++;
    computerDisplay(playerSelection, computerSelection, gameCount, gamesTied);
    // computerConsoleDisplay(playerSelection, computerSelection);
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    gameCount++;
    computerCount++;
    computerDisplay(playerSelection, computerSelection, gameCount, gamesTied);
    // computerConsoleDisplay(playerSelection, computerSelection);
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    gameCount++;
    computerCount++;
    computerDisplay(playerSelection, computerSelection, gameCount, gamesTied);
    // computerConsoleDisplay(playerSelection, computerSelection);
    //
  }
  // gameCount++;
  // Console Game Display
  // console.log(`Games played: ${gameCount}`);
  // console.log(`Games tied: ${gamesTied}`);
  // console.log(`Player games won: ${playerCount}`);
  // console.log(`Computer games won: ${computerCount}`);
  // console.log(`Games tied: ${gamesTied}`);
  playerScore.innerHTML = `${playerCount}`;
  computerScore.innerHTML = `${computerCount}`;

  if (playerCount === 5) {
    // resetGame();
    console.log("Game Over! You Win!");
    mainScoreDisplay.innerHTML = `<p class="main-score-round-winner">Game Over! You Win!</p>`;
    gameCount = 0;
    return 5;
  } else if (computerCount === 5) {
    // resetGame();
    console.log("Game Over! Computer Wins!");
    mainScoreDisplay.innerHTML = `<p class="main-score-round-winner">Game Over! Computer Wins!</p>`;
    gameCount = 0;
    return 5;
  }
  // resetGame();
}

// Game Reset Function
function resetGame() {
  playerCount = 0;
  computerCount = 0;
  gameCount = 0;
  gamesTied = 0;
  playerScore.innerHTML = `${playerCount}`;
  computerScore.innerHTML = `${computerCount}`;
  mainScoreDisplay.innerHTML = `  <p class="main-score-round-winner">
          Game Time! <br />
          Make a Selection
        </p>
        <p class="main-score-display">Games Played: 0</p>
        <p class="main-score-display">Games tied: 0</p>`;
}

// Player Display
function playerDisplay(
  playerSelection,
  computerSelection,
  gameCount,
  gamesTied
) {
  mainScoreDisplay.innerHTML = `   <p class="main-score-round-winner">
          You win this round! <br />
          ${playerSelection} beats ${computerSelection}
        </p>
        <p class="main-score-display">Games played: ${gameCount}</p>
        <p class="main-score-display">Games tied: ${gamesTied}</p>`;
}

// Game Display
function computerDisplay(
  playerSelection,
  computerSelection,
  gameCount,
  gamesTied
) {
  mainScoreDisplay.innerHTML = `<p class="main-score-round-winner">
          Computer wins this round! <br />
          ${computerSelection} beats ${playerSelection}
        </p>
        <p class="main-score-display">Games played: ${gameCount}</p>
        <p class="main-score-display">Games tied: ${gamesTied}</p>`;
}

// Same Choice Display
function sameChoiceDisplay(gameCount, gamesTied) {
  mainScoreDisplay.innerHTML = `   <p class="main-score-round-winner">
          You chose the same<br />
          Try again!
        </p>
        <p class="main-score-display">Games Played: ${gameCount}</p>
        <p class="main-score-display">Games tied: ${gamesTied}</p>`;
}

// Computer Console Display
function computerConsoleDisplay(playerSelection, computerSelection) {
  console.log(
    `Player says: ${playerSelection}. Computer says: ${computerSelection}`
  );
  console.log(
    `Computer wins this round ${computerSelection} beats ${playerSelection}`
  );
}
