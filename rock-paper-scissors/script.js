
console.log("Hello from console")

function rockPaperScissors (){
    const computerChoice = Math.floor(Math.random()*3);
    const playerChoice = parseInt(prompt("Please enter 0, 1, 2: 0= Rock, 1= Paper, 2= Scissors "));
   
    if(playerChoice>2 || playerChoice <0){
        console.log("Enter numbers between 0,1,2 and try again")
       
    }
    if (computerChoice === 0 && playerChoice === 1){
        console.log("Winner Player")
        
    }
    else if(computerChoice === 0 && playerChoice === 2){
        console.log("Winner Computer")
    }
    else if(computerChoice === 1 && playerChoice === 0){
        console.log("Winner Computer")
    }
    else if(computerChoice === 1 && playerChoice === 2){
        console.log("Winner Player")
    }
    else if (computerChoice ===2 && playerChoice === 1){
        console.log("winner Computer")
    }
    else if(computerChoice ===2 && playerChoice===0){
        console.log("winner player")
    }
    else if( computerChoice === playerChoice)
        console.log("draw")
}

rockPaperScissors()