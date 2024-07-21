const container = document.querySelector("#container")

let number = parseInt(prompt("What is the size of your grid? (for 100*100) Enter 100  "))

const arrayOfBoxes = []
container.setAttribute("id", "container")

if(number <100){
    for (let i = 0; i < number*number; i++) {
    
        arrayOfBoxes.push(document.createElement("div"))
    
    }
}else{
    number = parseInt(prompt("The limit of the size is 100, please try again "))
}



arrayOfBoxes.forEach((element)=>{
    element.classList.add("squares")
    container.appendChild(element)
})

