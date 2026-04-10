// Rock Paper Scissor Plan

// Score
// CREATE humanScore variable
// CREATE computerScore variable
// SET humanScore and computerScore to 0
let humanScore = 0;
let computerScore = 0;

// Computer Choice logic
// CREATE getComputerChoice function
function getComputerChoice() {
  // CREATE computerChoice variable
  let computerChoice;
  
  // CREATE randomChoice variable
  // CALCULATE computer choice using Math.random() when function are called
  // INPUT Math.random() result in randomChoice Variable();
  let randomChoice = Math.floor(Math.random() * 100);

  // IF randomChoice is less equal then 33
  //  RETURN computerChoice are Rock
  if (randomChoice <= 33) {
    return computerChoice = "rock";
  }

  // ELSE IF randomChoice is more equal than 34 and less equal than 63
  //  RETURN computerChoice Paper
  else if (randomChoice >= 34 && randomChoice <= 63) {
    return computerChoice = "paper";
  }

  // Else
  //  Return computerChoice Scissor
  else {
    return computerChoice = "scissor";
  }

  // ENDIF
};

// Human Choice Logic
// CREATE getHumanChoice function
function getHumanChoice() {
// CREATE humanChoice variable
// GET human choice using prompt
// INPUT human choice to humanChoice
// INITIALIZE human choice to lowercase
  let humanChoice = prompt("What will you pick?").toLowerCase();

// WHILE humanChoice is not rock, paper, scissor or empty
//  OUTPUT "Doesn't recognize these choice!"
//  GET human choice again using prompt
  while ((humanChoice != "rock" 
  && humanChoice != "paper" 
  && humanChoice != "scissor" )
  || (humanChoice == "")
  ){
    humanChoice = prompt("Doesn't recognize these choice!").toLowerCase();
  }

// ENDWHILE

// return humanChoice
  return humanChoice;
}

// Single Round Logic
// CREATE function playRound with humanChoice and computerChoice as parameter
function playRound(humanChoice, computerChoice) {
// IF humanChoice is the same as computerChoice
//  OUTPUT "TIE! Try again."
  if (humanChoice === computerChoice) {
    displayResult("tie", humanChoice, computerChoice);
  }

// ELSEIF (humanChoice is rock and computerChoice is paper
// humanChoice is paper and computerChoice is scissor
// humanChoice is scissor and computerChoice is rock
//  INCREMENT computerScore
//  OUTPUT "You Lose, computerChoice beat humanChoice"
//  OUTPUT score
  else if ((humanChoice === "rock" && computerChoice === "paper") 
    || (humanChoice === "paper" && computerChoice === "scissor")
    || (humanChoice === "scissor" && computerChoice === "rock")
  ) {
    computerScore++;
    displayResult("lose", humanChoice, computerChoice);
  }

// ELSE 
//  INCREMENT humanScore
//  OUTPUT "You Win, humanChoice beat computerChoice"
//  OUTPUT score
  else {
    humanScore++;
    displayResult("win", humanChoice, computerChoice);
  }
}

const playerBtns = document.querySelectorAll("button");

playerBtns.forEach((button) => {
  button.addEventListener("click", (e) => {
    const humanChoice = e.target.id;
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice)
  });
});

function displayResult(status, humanChoice, computerChoice) {
  const resultText = document.querySelector("div");
  const currentScore = document.createElement("p");

  if (humanScore === 5) {
    resultText.textContent = "You have won the game!";
    currentScore.textContent = `Current Score, Human Score: ${humanScore}, Computer Score: ${computerScore}`;
    resultText.append(currentScore)

    humanScore = 0;
    computerScore = 0;
  }
  else if (computerScore === 5) {
    resultText.textContent = "You have lose the game!";
    currentScore.textContent = `Current Score, Human Score: ${humanScore}, Computer Score: ${computerScore}`;
    resultText.append(currentScore)

    humanScore = 0;
    computerScore = 0;
  }
  else {
    if (status === "tie") {
      resultText.textContent = `TIE! ${humanChoice} is the same as ${computerChoice}`;
    } else if (status === "lose") {
      resultText.textContent = `You Lose! ${computerChoice} beat ${humanChoice}.`;
      currentScore.textContent = `Current Score, Human Score: ${humanScore}, Computer Score: ${computerScore}`;
      resultText.append(currentScore)
    } else {
      resultText.textContent =  `You Win! ${humanChoice} beat ${computerChoice}`;
      currentScore.textContent =`Current Score, Human Score: ${humanScore}, Computer Score: ${computerScore}`;
      resultText.append(currentScore)
    }
  }
}
