const CHOICES = ["rock", "paper", "scissor"];
const restartButton = document.querySelector("#reset")
const makeComputerChoice = ()=>{
    return CHOICES[Math.floor(Math.random()*3)]
}

let result = '';
let userWins = 0;
let cpuWins = 0;

// Getting User and Computer Choices
const userChoices = document.querySelectorAll(".choice")
userChoices.forEach((choice)=>{
    
   choice.addEventListener("click", (e)=>{
    if(userWins<5 && cpuWins<5){
        const displayPlayerChoice = document.getElementById("playerChoice")
        const displayComputerChoice = document.getElementById("computerChoice")
        const computerChoice = makeComputerChoice();
        const userChoice = e.target.id;
        result =  calculateWinner(computerChoice, userChoice);
       const displayScore = document.querySelector('#score')
       displayScore.textContent = `Player: ${userWins} - ${cpuWins} Computer`;
       displayComputerChoice.textContent = computerChoice;
       displayPlayerChoice.textContent = userChoice;
    }else{
        const resultDisplay = document.querySelector("#results")
        if(userWins>cpuWins){
            resultDisplay.textContent = `Winner is User because they reached 5 wins first.`
        }else{
            resultDisplay.textContent = `Winner is Computer because they reached 5 wins first.`
        }
    }
   
   })

   
})


// Game Logic

const calculateWinner = (cpu, user)=>{
    if(cpu===user){
        return  'draw'
    }
    if(cpu === 'rock' && user ==='paper'){
        userWins +=1;
        return  'user wins'
    }
    if(cpu === 'rock' && user ==='scissor'){
        cpuWins +=1;
        return  'cpu wins'
    }
    if(cpu === 'paper' && user ==='rock'){
        cpuWins +=1;
        return  'cpu wins'
    }
    if(cpu === 'paper' && user ==='scissor'){
        userWins +=1;
        return  'user wins'
    } 
    if(cpu === 'scissor' && user ==='paper'){
        userWins +=1;
        return  'user wins'
    }
    if(cpu === 'scissor' && user ==='paper'){
        cpuWins +=1;
        return  'cpu wins'
    }

  
}
//restart button

restartButton.addEventListener("click", ()=>{
    result = '';
    userWins = 0;
    cpuWins = 0;
    const resultDisplay = document.querySelector("#results")
    resultDisplay.textContent = ''
    const displayScore = document.querySelector('#score')
    displayScore.textContent = ''
})