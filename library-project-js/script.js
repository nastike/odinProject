const myLibrary = [];
const containerDiv = document.getElementById("container");
const tableElement = document.createElement("table")
const buttonElement = document.createElement("button")
const dialogForm = document.getElementById("dialogForm")
buttonElement.innerText = "New Book"


function Book(author, title, numberOfPages, hasRead){
    this.author = author;
    this.title = title;
    this.numberOfPages = numberOfPages;
    this.hasRead = hasRead;
}

function addBookToLibrary(obj){
    const book1 = new Book(obj.author, obj.title, obj.numberOfPages, obj.hasRead);
    myLibrary.push(book1);
}



const addBook = (book)=>{
    const tbody = document.createElement("tbody");
    
    for (key in book) {
        const row = document.createElement("tr");

        const cellKey = document.createElement("td");
        cellKey.textContent = key;
        row.appendChild(cellKey);

        const cellValue = document.createElement("td");
        cellValue.textContent = book[key];
        row.appendChild(cellValue);

        tbody.appendChild(row);
    }

    // Add the tbody to the table
    tableElement.appendChild(tbody);

    // Create an empty row to add as a gap
    const emptyRow = document.createElement("tr");
    const emptyCell = document.createElement("td");
    emptyCell.setAttribute("colspan", "2");  // Span across two columns
    emptyCell.textContent = " "; // Optional: You can add a non-breaking space (`&nbsp;`) here if needed
    emptyRow.appendChild(emptyCell);

    // Append the empty row to the table
    tableElement.appendChild(emptyRow);

    // Append the table to the container div
    containerDiv.appendChild(tableElement);
}

tableElement.classList.add('tableDesign')
const dialogElement = document.getElementById("addBook")
const closeBtn = document.getElementById("cancel")
const confirmBtn = document.getElementById("confirm")
containerDiv.appendChild(buttonElement)


buttonElement.addEventListener("click", (e)=>{
    dialogElement.showModal();
})

closeBtn.addEventListener("click", ()=>{
    dialogElement.close();
})

confirmBtn.addEventListener("click", () => {
    const addedBook = {}
    const author = document.getElementById("author")
    const title = document.getElementById("title")
    const noOfPage = document.getElementById("noOfPages")
    const hasRead = document.getElementById("hasRead")
    
    addedBook.author = author.value;
    addedBook.title = title.value;
    addedBook.numberOfPages = noOfPage.value;
    addedBook.hasRead = hasRead.value === "Yes";
    
    addBookToLibrary(addedBook);

    // Clear the table before re-rendering
    tableElement.innerHTML = "";

    // Re-render the table with the updated library
    myLibrary.forEach((book) => {
        addBook(book);
    });

    dialogForm.reset();
    dialogElement.close();
});
