const cells = document.querySelectorAll(".cell")
const screen = document.getElementById("screen-container") // get elements

cells.forEach(cell => cell.addEventListener("click", cellClicked)) // for each cell, add click event

function cellClicked() { // run function when cell is clicked
    const index = this.getAttribute("index")
    if(index == "ce"){ // if ce, clear screen
        screen.innerHTML = ""
    } else if(index == "="){ // if equal, calculate answer
        const expression = screen.innerHTML.replace("x", "*") // x's aren't readable
        screen.innerHTML = eval(expression) // evaluate expression
    } else{
        screen.innerHTML += index // else, add numbers and symbols to screen
    }
}