const cells = document.querySelectorAll(".tris")
const statusText = document.querySelector("#turnText")
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
    turnText.textContent = `E' il turno di ${currentPlayer}`;
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
    turnText.textContent = `E' il turno di ${currentPlayer}`;
}
function checkWinner(){
//     let roundWon = false

//     for(let i = 0; i < winCon.length; i++) {

//         const condition = winCon[i];

//         let cellA = options[winCon[0]];
//         let cellB = options[winCon[1]];
//         let cellC = options[winCon[2]];

//         if (cellA == '' || cellB == '' || cellC == '') {
//             continue;
//     }
//     if(cellA == cellB && cellB == cellC){
//         roundWon = true;
//         break;
// }
//     }
//     if(roundWon){
//         turnText.textContent = `${currentPlayer} Ha vinto`
//         running = false;
//     }
}
function restartGame() {}