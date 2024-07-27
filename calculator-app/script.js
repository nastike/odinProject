const bts = document.querySelectorAll(".number")
const display = document.querySelector("#display")
let displayText = ''; 
let operationFirstValue = '';
let operationSecondValue ='';
let currentOperator = ''
let result;
let isOperatorClicked = false;

bts.forEach((element)=>{
    element.addEventListener("click", (e)=>{
       const value = e.target.value
        if(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(value)){

                
                if(display.textContent.length > 8){
                    displayText = displayText;
                    
                    
                }else{
                    if(isOperatorClicked){
                        display.textContent = '';
                        isOperatorClicked = false
                    }
                    
                    displayText = value;
                    display.textContent += displayText;
                    
                    
                }
            }
            if (value === ".") {
                
                if (!display.textContent.includes(".")) {
                    if (display.textContent === '' || isOperatorClicked) {
                        display.textContent = '0.'; 
                    } else {
                        display.textContent += value; 
                    }
                    isOperatorClicked = false; 
                }
            }
        if(["+", "-", "*", "/", "%"].includes(value)){
            if(operationFirstValue === ''){
                operationFirstValue = display.textContent;
            } else if(operationSecondValue ===''){
                operationSecondValue = display.textContent;
                result = operate(value, +operationFirstValue, +operationSecondValue);
                display.textContent = result;
                operationFirstValue = result;
                operationSecondValue = '';
            }
            currentOperator = value;
            isOperatorClicked = true;
                
                
                

                


        }
        if(value ==='eql'){
            if(operationFirstValue !== '' && currentOperator !==''){
                operationSecondValue = display.textContent;
                result = operate(currentOperator, +operationFirstValue, +operationSecondValue)
                display.textContent = result
                operationFirstValue = ''
                operationSecondValue = ''
                currentOperator = ''
            }
        }
        if(value ==="DEL"){
            const someArr = display.textContent.split("")
            someArr.pop()
            displayText = someArr.join('')
            display.textContent = displayText;
            
        }
        if(value ==="AC"){
            displayText = ''
            display.textContent = displayText;
            operationFirstValue =''
            operationSecondValue = ''
            currentOperator = ''
        }
       
    })
})
const add = (a, b)=>{
    return a+b;
}

const substract = (a, b)=>{
    return a-b;
}
const multiply = (a, b)=>{
    return a*b;
}
const divide = (a, b)=>{
    return a/b;
}
const percentage = (num)=>{
    console.log(num/100)
    return (num/100);

}
const operate = (str, firstValue, secondValue)=>{
    switch(str){
        case "+": 
          return add(firstValue, secondValue)
            
        case "-":
            return(substract(firstValue, secondValue))
            console.log("from -")
            
        case "*":
           
            console.log("from *")
            return(multiply(firstValue, secondValue))
            
        case "/":
           
            console.log("from /")
            return(divide(firstValue, secondValue))
            
            
        case "%":
            console.log("from Percentage")
            
            return(percentage(firstValue))
        default:
            return 0    
    }
}

