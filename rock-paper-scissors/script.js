// 0 = ROCK
// 1 = PAPER
// 2 = SCISSORS

let userWin = 0;
let cpuWins = 0;
let draw = 0;

 //  prompt to ask the user how many rounds they want to play the game

const numberOfTimesYouWantToPlay = ()=>{
    return parseInt(prompt("How Many Times do you want to play the game "))
}

// Function to make selection of Rock Paper and Scissors for Computer using random number generator
const computerSelection = ()=>{
    return Math.floor(Math.random()*3)
}

// Function to make a selection of Rock Paper or Scissors
const userSelection = ()=>{
    const choice = parseInt(prompt("Enter 0 for Rock, 1 for Paper and 2 for Scissors "))
    return choice
    if(choice> 2 && choice < 0){
        // Edge case need to do it later, can't think of it right now
    }
}


// Calculating the winner to display it in the end
const calculateWinner = (choiceCPU, choiceUser)=>{
    // console.log(choiceCPU, choiceUser)
    if (choiceCPU === choiceUser) {
        draw++
        return `gameIsDraw ${draw} times`
    }
    // Rock vs Paper = Paper Wins
    else if( choiceCPU == 0 && choiceUser == 1){
        userWin++
        return `user wins ${userWin} times`
    }
    else if (choiceCPU === 1 && choiceUser === 0){
        cpuWins++
        return `Cpu wins ${cpuWins} times`
    }

    // Rock vs Scissors == Rock Wins
    else if( choiceCPU == 2 && choiceUser == 0){
        userWin++
        return `user wins ${userWin} times`
    }
    else if (choiceCPU === 0 && choiceUser === 2){
        cpuWins++
       return `Cpu wins ${cpuWins} times`
    }
    // Paper vs Scissors = Scissors win
    else if( choiceCPU == 1 && choiceUser == 2){
        userWin++
        return `user wins ${userWin} times`
    }
    else if (choiceCPU === 2 && choiceUser === 1){
        cpuWins++
        return `Cpu wins ${cpuWins} times`
    }
    else 
    return "Invalid Choice"
   
    
}

// Play game

const playGame = ()=>{
    let winner;
   
    const numberOfTime = numberOfTimesYouWantToPlay();
    for (let i = 0; i < numberOfTime; i++) {
        const choiceUser = userSelection();
        const choiceCPU = computerSelection();
        winner = calculateWinner(choiceUser, choiceCPU);
        console.log(winner)
    }
   
}

// Execution and displaying the winner
playGame();
if(cpuWins>userWin) {
    console.log(`Aggregate Winner is cpu with ${cpuWins}`)

}
else if(userWin>cpuWins){
    console.log(`Aggregate Winner is User with ${userWin}`)
}
else
{
    console.log("No clear winner for today")
}

