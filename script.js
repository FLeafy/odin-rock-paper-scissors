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
    alert(`TIE! ${humanChoice} is the same as ${computerChoice}`);
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
    alert(`You Lose! ${computerChoice} beat ${humanChoice}.`);
    alert(`Current Score, Human Score: ${humanScore}, Computer Score: ${computerScore}`);
  }

// ELSE 
//  INCREMENT humanScore
//  OUTPUT "You Win, humanChoice beat computerChoice"
//  OUTPUT score
  else {
    humanScore++;
    alert(`You Win! ${humanChoice} beat ${computerChoice}`);
    alert(`Current Score, Human Score: ${humanScore}, Computer Score: ${computerScore}`);
  }
}

// Full Game Logic
// CREATE playGame function
function playGame() {
// CREATE humanChoice variable
// CREATE computerChoice Variable
  let humanChoice,
    computerChoice;

// WHILE humanScore or computerScore are not 5
  while (humanScore != 5 && computerScore != 5){
  
//  INPUT humanChoice CALL getHumanChoice()
    humanChoice = getHumanChoice();

//  INPUT computerChoice CALL getComputerChoice()
    computerChoice = getComputerChoice();

//  CALL playRound with humanChoice and computerChoice
    playRound(humanChoice, computerChoice)
  }

// IF humanScore is equal to 5
//  OUTPUT "You have won the game"
  if (humanScore === 5) {
    alert("You have won the game!");
  }

// ELSE
//  OUTPUT "Computer have won the game"
  else {
    alert("You have lose the game");
  }
}

playGame();