function computerPlay() {
  const selection = ["rock", "paper", "scissors"];
  // const selection = ["rock", "rock", "rock"];
  const len = selection.length;
  let choice = Math.floor(Math.random() * len);
  // console.log(`Random num: ${choice}`);
  // console.log(`Selection: ${selection[choice]}`);
  return selection[choice];
}
// computerPlay();
// let playerSelection = prompt("Enter a selection");
let playerSelection;
// let computerSelection = computerPlay();

// ****** UI ******* //
// Buttons ******** //
const chooseBtn = document.querySelectorAll(".choiceBtn");
const refreshBtn = document.querySelector(".refreshBtn");

// Scores ******** //
const playerScore = document.querySelector(".player-score");
const computerScore = document.querySelector(".computer-score");

// Main Score Display ******* //
const mainScoreDisplay = document.querySelector(
  ".main-score-display-container"
);

chooseBtn.forEach(item => {
  item.addEventListener("click", e => {
    let playerSelection = e.currentTarget.dataset.id;
    // console.log(playerSelection);
    game(playerSelection, computerPlay());
    // displayGame(playerSelection, computerPlay(), gameCount, gamesTied);
  });
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
    console.log("You chose the same. Try again!");
    console.log(
      `Player says: ${playerSelection}. Computer says: ${computerSelection}`
    );
    console.log(`Games tied: ${gamesTied}`);
    mainScoreDisplay.innerHTML = `   <p class="main-score-round-winner">
            You chose the same<br />
            Try again!
          </p>
          <p class="main-score-display">Games Played: ${gameCount}</p>
          <p class="main-score-display">Games tied: ${gamesTied}</p>`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    console.log(
      `Player says: ${playerSelection}. Computer says: ${computerSelection}`
    );
    console.log(
      `You win this round. ${playerSelection} beats ${computerSelection}`
    );
    gameCount++;
    playerCount++;

    mainScoreDisplay.innerHTML = `   <p class="main-score-round-winner">
          You win this round! <br />
          ${playerSelection} beats ${computerSelection}
        </p>
        <p class="main-score-display">Games played: ${gameCount}</p>
        <p class="main-score-display">Games tied: ${gamesTied}</p>`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log(
      `Player says: ${playerSelection}. Computer says: ${computerSelection}`
    );
    console.log(
      `You win this round. ${playerSelection} beats ${computerSelection}`
    );
    gameCount++;
    playerCount++;
    mainScoreDisplay.innerHTML = `   <p class="main-score-round-winner">
          You win this round! <br />
          ${playerSelection} beats ${computerSelection}
        </p>
        <p class="main-score-display">Games played: ${gameCount}</p>
        <p class="main-score-display">Games tied: ${gamesTied}</p>`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    console.log(
      `Player says: ${playerSelection}. Computer says: ${computerSelection}`
    );
    console.log(
      `You win this round. ${playerSelection} beats ${computerSelection}`
    );
    gameCount++;
    playerCount++;
    mainScoreDisplay.innerHTML = `   <p class="main-score-round-winner">
          You win this round! <br />
          ${playerSelection} beats ${computerSelection}
        </p>
        <p class="main-score-display">Games played: ${gameCount}</p>
        <p class="main-score-display">Games tied: ${gamesTied}</p>`;
  }

  // Computer selection
  if (computerSelection === "rock" && playerSelection === "scissors") {
    console.log(
      `Player says: ${playerSelection}. Computer says: ${computerSelection}`
    );
    console.log(
      `Computer wins this round ${computerSelection} beats ${playerSelection}`
    );
    gameCount++;
    computerCount++;
    mainScoreDisplay.innerHTML = `   <p class="main-score-round-winner">
          Computer wins this round! <br />
          ${computerSelection} beats ${playerSelection}
        </p>
        <p class="main-score-display">Games played: ${gameCount}</p>
        <p class="main-score-display">Games tied: ${gamesTied}</p>`;
  } else if (computerSelection === "paper" && playerSelection === "rock") {
    console.log(
      `Player says: ${playerSelection}. Computer says: ${computerSelection}`
    );
    console.log(
      `Computer wins this round ${computerSelection} beats ${playerSelection}`
    );
    gameCount++;
    computerCount++;
    mainScoreDisplay.innerHTML = `   <p class="main-score-round-winner">
          Computer wins this round! <br />
          ${computerSelection} beats ${playerSelection}
        </p>
        <p class="main-score-display">Games played: ${gameCount}</p>
        <p class="main-score-display">Games tied: ${gamesTied}</p>`;
  } else if (computerSelection === "scissors" && playerSelection === "paper") {
    console.log(
      `Player says: ${playerSelection}. Computer says: ${computerSelection}`
    );
    console.log(
      `Computer wins this round ${computerSelection} beats ${playerSelection}`
    );
    gameCount++;
    computerCount++;
    mainScoreDisplay.innerHTML = `   <p class="main-score-round-winner">
          Computer wins this round! <br />
          ${computerSelection} beats ${playerSelection}
        </p>
        <p class="main-score-display">Games played: ${gameCount}</p>
        <p class="main-score-display">Games tied: ${gamesTied}</p>`;
  }
  // gameCount++;
  console.log(`Games played: ${gameCount}`);
  console.log(`Games tied: ${gamesTied}`);
  console.log(`Player games won: ${playerCount}`);
  console.log(`Computer games won: ${computerCount}`);
  // console.log(`Games tied: ${gamesTied}`);
  playerScore.innerHTML = `${playerCount}`;
  computerScore.innerHTML = `${computerCount}`;

  if (playerCount === 5) {
    return 5;
  } else if (computerCount === 5) {
    return 5;
  }
}

// game(playerSelection, computerPlay());
// playRound(playerSelection, computerPlay());

function game(playerSelection, computerSelection) {
  // for (let i = 0; i < 17; i++) {
  // playerSelection = prompt("Emter a choice...");
  playRound(playerSelection, computerPlay());
  // }
}

function displayGame(playerSelection, computerSelection, gameCount, gamesTied) {
  mainScoreDisplay.innerHTML = `   <p class="main-score-round-winner">
          You win this round! <br />
          ${playerSelection} beats ${computerSelection}
        </p>
        <p class="main-score-display">Games played: ${gameCount}</p>
        <p class="main-score-display">Games tied: ${gamesTied}</p>`;
}

function sameChoice(gameCount, gamesTied) {
  mainScoreDisplay.innerHTML = `   <p class="main-score-round-winner">
          You chose the same<br />
          Try again!
        </p>
        <p class="main-score-display">Games Played: ${gameCount}</p>
        <p class="main-score-display">Games tied: ${gamesTied}</p>`;
}
