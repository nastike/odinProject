const bts = document.querySelectorAll(".number")
const display = document.querySelector("#display")
let displayText = ''; 


bts.forEach((element)=>{
    element.addEventListener("click", (e)=>{
        if(e.target.value === "1" || e.target.value === "2" ||e.target.value === "3" || e.target.value === "4"||
            e.target.value === "5" || e.target.value === "6" ||e.target.value === "7" || e.target.value === "8"||
            e.target.value === "9" || e.target.value === "0" ){
                if(display.textContent.length > 7){
                    displayText = displayText;
                    
                    
                }else{
                    
                    displayText = e.target.value;
                    display.textContent += displayText;
                    
                    
                }
            }
      
        if(e.target.value === "+" || e.target.value === "-" ||e.target.value === "*" || e.target.value === "/"){
                


        }
        if(e.target.value ==="DEL"){
            const someArr = display.textContent.split("")
            someArr.pop()
            displayText = someArr.join('')
            display.textContent = displayText;
            
        }
        if(e.target.value ==="AC"){
            displayText = ''
            display.textContent = displayText;
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

