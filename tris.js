const cells = document.querySelectorAll(".tris")
const statusText = document.querySelector("#statusText")
const restartBtn = document.querySelector("#restartBtn")

const winCon = [

[0, 1, 2],
[3, 4, 5],
[6, 7, 8],
[0, 3, 6],
[1, 4, 7],
[2, 5, 8],
[0, 4, 8],
[2, 4, 6]
]

let options = ["", "", "", "", "", "", "", "", "",]
let currentPlayer = "X";
let running = false;

initializeGame()

function initializeGame (){

    cells.forEach(cell => cell.addEventListener('click', cellClicked))
    restartBtn.addEventListener('click', restartGame);
    statusText.textContent = `E' il turno di ${currentPlayer}`;
    running = true;
}
function cellClicked(){
    const dataCell = this.getAttribute('dataCell');

    if(options[dataCell] != "" || !running) {
        return;
    }

    updateCell(this, dataCell);
    changePlayer()
    checkWinner();
}

function updateCell(cell, index) {
    options[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function changePlayer() {

    currentPlayer = (currentPlayer == 'X') ? 'O' : 'X'
    statusText.textContent = `E' il turno di ${currentPlayer}`;
}
function checkWinner(){
}

function restartGame(){
    
}