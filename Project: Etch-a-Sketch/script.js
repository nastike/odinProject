const container = document.querySelector("#container")
const button = document.querySelector("button")
let number;

const arrayOfBoxes = []


function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function getNumberOfGrid(){
    number = parseInt(prompt("What is the size of your grid? (for 100*100) Enter 100  "))
    
    if(number <100){
        for (let i = 0; i < number*number; i++) {
            const individualSquares = document.createElement("div");
            arrayOfBoxes.push(individualSquares)
            
        }
    }else{
        number = parseInt(prompt("The limit of the size is 100, please try again "))
    }
   return arrayOfBoxes;
}


getNumberOfGrid();
//rgba(2, 154, 1, 0.6)

function getRandomRGBAColor() {
    let r = getRandomInt(0, 255);
    let g = getRandomInt(0, 255);
    let b = getRandomInt(0, 255);
    let alpha = Math.random();
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}


arrayOfBoxes.forEach((element)=>{
    let a = 0.5;
    element.classList.add("squares");
    element.style.height = `${(800/number)}px`;
    element.style.width = `${(800/number)}px`;
    element.style.background = getRandomRGBAColor();
    element.addEventListener("mouseover", (e)=>{
       
        
        a+=.1;
        e.target.style.background = `rgba(0,0, 0, ${a})`
    })
    container.appendChild(element);
})

button.addEventListener("click",()=>{
    window.location.reload()
})