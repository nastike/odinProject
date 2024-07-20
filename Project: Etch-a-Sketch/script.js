const container = document.querySelector("#container")
const body = document.querySelector("body")

const square = document.createElement("div")

const arrayOfSquares = [];

for (let i = 0; i < 16; i++) {
    arrayOfSquares.push(document.createElement("div"))


}

arrayOfSquares.forEach(square => {
    container.appendChild(square)
    square.classList.add("squares")
})


