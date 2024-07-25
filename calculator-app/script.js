const bts = document.querySelectorAll(".number")
const display = document.querySelector("#display")
let displayText = ''; 


bts.forEach((element)=>{
    element.addEventListener("click", (e)=>{
        if(display.textContent.length > 7){
            displayText = displayText;
            
            
        }else{
            
            displayText = e.target.value;
            display.textContent += displayText;
            
            
        }
       
    })
})
const add = ()=>{

}

const substract = ()=>{
    
}
const multiply = ()=>{
    
}
const divide = ()=>{
    
}
const operate = ()=>{
    
}