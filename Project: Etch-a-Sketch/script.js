const container = document.querySelector("#container")
let a = 0;
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
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//rgba(2, 154, 1, 0.6)
function getRandomRGBColor() {
    let r = getRandomInt(0, 255);
    let g = getRandomInt(0, 255);
    let b = getRandomInt(0, 255);
    
    return `rgb(${r}, ${g}, ${b})`;
}


arrayOfBoxes.forEach((element)=>{
    element.classList.add("squares");
    element.style.height = `${(800/number)}px`;
    element.style.width = `${(800/number)}px`;
    element.style.background = getRandomRGBColor();
    element.addEventListener("mouseover", (e)=>{
       
        
        a+=.11;
        e.target.style.background = `rgba(0, 0, 0, ${a})`
    })
    container.appendChild(element);
})

