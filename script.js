let tiles = document.querySelectorAll('.tile');
let playerButton = document.querySelectorAll('.player');

let playing = false;
let player1;
let player2;

let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

playerButton.forEach(function(button) {
    button.addEventListener('click', function() {
        button.value = button.value === "player" ? "bot" : "player";
        button.textContent = button.value.slice(0, 1).toUpperCase() + button.value.slice(1);
    })
})

tiles.forEach(function(tile) {
    tile.addEventListener('click', function() {
        if(!playing) { return; }
        console.log(tile.value);
    })
})

function clearBoard() {
    tiles.forEach((tile) => { tile.textContent = ""; } )
    board.forEach( (element) => { ''; } )
}

clearBoard();