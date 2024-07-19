// 0 = ROCK
// 1 = PAPER
// 2 = SCISSORS

let userWin = 0;
let cpuWins = 0;
let draw = 0;
let result
const computerChoices = ["rock", "paper", "scissor"]
const computerChoiceDisplay = document.querySelector("#computer-choice")
const userChoiceDisplay = document.querySelector("#user-choice")
let resultDisplay = document.querySelector("#results")
const buttons = document.querySelectorAll(".choices")
let userChoice;
let computerChoice;
const scoreDisplayUser = document.querySelector("#playerScore")
const scoreDisplayComputer = document.querySelector("#computerScore")
const resetButton = document.querySelector("#reset")
const calculateWinner = (choiceCPU, choiceUser)=>{
    // console.log(choiceCPU, choiceUser)
    
   
        if (choiceCPU === choiceUser) {
            draw++
            result = "draw"
             
        }
        // Rock vs Paper = Paper Wins
        if( choiceCPU == 'rock' && choiceUser == 'paper'){
            userWin++
            result = "User Wins"
             
        }
        if (choiceCPU === "paper" && choiceUser === "rock"){
            cpuWins++
            result = "Cpu wins"
             
        }
    
        // Rock vs Scissors == Rock Wins
        if( choiceCPU == "scissor" && choiceUser == "rock"){
            userWin++
            result = "user wins"
             
        }
        if (choiceCPU === "rock" && choiceUser === "scissor"){
            cpuWins++
            result = "Cpu wins"
            
        }
        // Paper vs Scissors = Scissors win
        if( choiceCPU == "paper" && choiceUser == "scissor"){
            userWin++
            result = "user wins"
             
        }
        if (choiceCPU === "scissor" && choiceUser === "paper"){
            cpuWins++
            result = "Cpu wins"
             
        }
        resultDisplay.innerHTML = result
        scoreDisplayComputer.textContent = cpuWins;
        scoreDisplayUser.textContent = userWin;
    
    
   
}


resetButton.addEventListener("click", ()=>{
    userWin = 0;
    cpuWins = 0;
    scoreDisplayComputer.textContent = cpuWins;
    scoreDisplayUser.textContent = userWin;
    result = '';
    userChoice = '';
    computerChoice = '';
    userChoiceDisplay.innerHTML = userChoice;
    computerChoiceDisplay.innerHTML = computerChoice;
    resultDisplay.innerHTML = result;

})

buttons.forEach(possibleChoice => possibleChoice.addEventListener('click', (e)=>{
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    computerChoice = computerChoices[Math.floor(Math.random()*3)];
    computerChoiceDisplay.innerHTML = computerChoice;
    if(cpuWins <5 && userWin<5){
        calculateWinner(computerChoice, userChoice);
        console.log("From IF")
    }else{
        if(cpuWins>userWin){
            result = `Game over, the winner is CPU`
            resultDisplay.textContent = result;
            console.log("From Else")
        }else{
            result = `Game over, the winner is User`;
            resultDisplay.textContent = result;
        }
        
    }
    
   
    console.log(userWin, cpuWins)

}))
// Function to make selection of Rock Paper and Scissors for Computer using random number generator





// Calculating the winner to display it in the end





