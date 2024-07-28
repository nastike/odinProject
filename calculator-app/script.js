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
let isOperatorClicked = false;
let value
let result
numbers.forEach(number=>{
    number.addEventListener("click", (e)=>{
        value = e.target.value;
        if(display.textContent.length > 8){
            
            return 0

        }else{
            if(isOperatorClicked){
                
                display.textContent = '';
                isOperatorClicked = false;
            }
            displayText = value;
            display.textContent +=displayText 
            console.log(secondOperand)
        }
        
    })

})

operators.forEach(operator=>{
    operator.addEventListener("click", (e)=>{
        if(!isOperatorClicked && firstOperand && currentOperator ){
            secondOperand = display.textContent;
            result = operate(currentOperator, parseFloat(firstOperand), parseFloat(secondOperand))
            display.textContent = result;
            isOperatorClicked = false;
        }else{
            firstOperand = display.textContent
        }
        if(e.target.value ==="%"){
            currentOperator = "%"
            result = operate(currentOperator, +firstOperand)
            display.textContent = result
        }
        currentOperator = e.target.value;
        isOperatorClicked = true;
        
        
       
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
    secondOperand = display.textContent;
    result = operate(currentOperator, +firstOperand, +secondOperand)
    display.textContent = result
    firstOperand = ""
    currentOperator = ''
    isOperatorClicked = false;
})

const add = (a,b) => {
    console.log("from add func", a, b)
    return a+b}; 
const subtract = (a,b) => a-b;
const product = (a,b) => a*b;
const quotient = (a,b) => a/b;
const percentage = (a) => a/100;

const operate = (str, firstValue, secondValue)=>{
    switch (str) {
        case "+":
            console.log(firstValue, secondValue, str)
            console.log("From +")
            return add(firstValue, secondValue);
            
        case "-":
            return subtract(firstValue, secondValue);
            
        case "*":
            return product(firstValue, secondValue);
            
        case "/":
            return quotient(firstValue, secondValue);
            
        case "%":
            return percentage(firstValue);
            
        default:
            0;
    }

}