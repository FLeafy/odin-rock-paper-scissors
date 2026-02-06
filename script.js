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



// console.log(getComputerChoice());
// console.log(getHumanChoice());