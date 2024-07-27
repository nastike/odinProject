const display = document.querySelector("#display")
const numbers = document.querySelectorAll(".number")
const operators = document.querySelectorAll(".operator")
const equalBtn = document.querySelector(".equalsTo")
const acBtn = document.querySelector(".acBtn")
const delBtn = document.querySelector(".delBtn")
let currentOperator = "";
let firstOperand = "";
let secondOperand = "";
let displayText = '';
let value
numbers.forEach(number=>{
    number.addEventListener("click", (e)=>{
        value = e.target.value;
        if(display.textContent.length > 8){
            
            return 0

        }else{
            displayText = value;
            display.textContent +=displayText 
        }
        
    })

})

operators.forEach(operator=>{
    operator.addEventListener("click", (e)=>{
        value = e.target.value;
        currentOperator = value;
        if(firstOperand != ""){
            firstOperand = display.textContent;
        }
        displayText += value;
        display.textContent += displayText;
    })
})

acBtn.addEventListener("click", (e)=>{
    displayText = "";
    currentOperator = "";
    firstOperand = "";
    secondOperand = "";
    display.textContent = ""
})
delBtn.addEventListener("click", ()=>{
    let someArr = display.textContent.split("")
    someArr.pop()
    display.textContent = someArr.join("")
    
    
})

equalBtn.addEventListener("click", (e)=>{
    
})