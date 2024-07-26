const bts = document.querySelectorAll(".number")
const display = document.querySelector("#display")
let displayText = ''; 
let operationFirstValue = '';
let operationSecondValue ='';
let result;

bts.forEach((element)=>{
    element.addEventListener("click", (e)=>{
       
        if(["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "."].includes(e.target.value)){

                if(display.textContent.includes(".")){
                    displayText = displayText;
                }
              
                if(display.textContent.length > 8){
                    displayText = displayText;
                    
                    
                }else{
                    
                    displayText = e.target.value;
                    display.textContent += displayText;
                    
                    
                }
            }
        
        if(["+", "-", "*", "/", "%"].includes(e.target.value)){
                operationFirstValue = display.textContent;
                operate(e.target.value, operationFirstValue);
                


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
            console.log("from +")
            add()
            break;
        case "-":
            substract()
            console.log("from -")
            break;
        case "*":
            multiply()
            console.log("from *")
            break;
        case "/":
            divide()
            console.log("from /")
            break;
        case "%":
            console.log("from Percentage")
            displayText = percentage(+firstValue)
            display.textContent = displayText;
            break;
    }
}

