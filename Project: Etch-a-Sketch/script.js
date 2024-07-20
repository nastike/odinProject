const container = document.querySelector("#container")
const body = document.querySelector("body")
const button = document.createElement("button")

const square = document.createElement("div")

const arrayOfColumns = [];
const arrayOfSquares = [];

for (let i = 0; i < 4; i++) {
    arrayOfColumns.push(document.createElement("div"))
}

arrayOfColumns.forEach((column)=>{
    for (let i = 0; i < 4; i++) {
        arrayOfSquares.push(document.createElement("div"))

    }
})
arrayOfColumns.forEach(column => {
    container.appendChild(column)
    column.classList.add("column")
})


// body.appendChild(button)


