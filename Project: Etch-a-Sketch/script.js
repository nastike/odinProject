const container = document.querySelector("#container")

let number = parseInt(prompt("What is the size of your grid? (for 100*100) Enter 100  "))

const arrayOfBoxes = []
container.setAttribute("id", "container")

if(number <100){
    for (let i = 0; i < number*number; i++) {
        const individualSquares = document.createElement("div");
        arrayOfBoxes.push(individualSquares)
        
    }
}else{
    number = parseInt(prompt("The limit of the size is 100, please try again "))
}



arrayOfBoxes.forEach((element)=>{
    element.classList.add("squares");
    element.style.height = `${800/number}px`;
    element.style.width = `${800/number}px`;
    container.appendChild(element);
})

