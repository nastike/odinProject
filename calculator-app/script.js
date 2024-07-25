const bts = document.querySelectorAll(".number")
const display = document.querySelector("#display")
let displayText = ''; 


bts.forEach((element)=>{
    element.addEventListener("click", (e)=>{
        displayText = e.target.value;
        display.textContent += displayText;
    })
})
    
