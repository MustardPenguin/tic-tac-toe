// Variables
let tiles = document.querySelectorAll('.tile');
let playerButton = document.querySelectorAll('.player');
let playButton = document.querySelector('.play');

const gameBoard = (function() {
    let _board = [
        ['', '', ''],
        ['', '', ''],
        ['', '', '']
    ];
    let _playing = false;
    let _player1;
    let _player2;
    let _currentTurn;

    function clearBoard() {
        _board.forEach( (element) => { 
            element.forEach( (e, index, array) => { array[index] = ''; } )
         })
    }
    function checkWinner() {
        // Horizontal check
        for(let i = 0; i < 3; i++) {
            let check = _board[i][0];
            let won = true;
            if(check === '') { continue; }
            for(let j = 0; j < 3; j++) {
                if(_board[i][j] !== check) { won = false; break; }
            }
            if(won) { console.log("winner found"); return; }
        }

        // Vertical check

        // Diagonal check
    }
    function startGame(player1, player2) {
        _playing = true;
        _player1 = player1 + "1";
        _player2 = player2 + "2";
        _currentTurn = _player1;
        clearBoard();
        console.log("Starting tic tac toe with " + player1 + " vs " + player2);

    }
    function markTile(r, c) {
        if(_board[r][c] === '') {
            let mark = _currentTurn === _player1 ? "X" : "O";
            _board[r][c] = mark;
            _currentTurn = mark === "X" ? _player2 : _player1;

            let tile = document.querySelector('div.game button[value="' + r + c + '"]');
            tile.textContent = mark;

            checkWinner();
        }
        
    }
    function minimax() {

    }
    const getBoard = () => _board;
    const isPlaying = () => _playing;

    return {clearBoard, checkWinner, getBoard, isPlaying, startGame, markTile};
})();

// Functions
function capitalizeFirstLetter(word) {
    return word.slice(0, 1).toUpperCase() + word.slice(1);
}

// Events
playerButton.forEach(function(button) {
    button.addEventListener('click', function() {
        if(gameBoard.isPlaying()) {return;}
        button.value = button.value === "player" ? "bot" : "player";
        button.textContent = capitalizeFirstLetter(button.value);
    })
})

tiles.forEach(function(tile) {
    tile.addEventListener('click', function() {
        if(!gameBoard.isPlaying()) { return; }
        //console.log(tile.value);
        let value = tile.value
        let r = value[0];
        let c = value[1];
        gameBoard.markTile(r, c);
    })
})

playButton.addEventListener('click', function() {
    if(gameBoard.isPlaying()) {return;}
    playing = true;
    playButton.style.backgroundColor = 'red';

    player1 = document.querySelector('.player1').value;
    player2 = document.querySelector('.player2').value;
    
    gameBoard.startGame(player1, player2);
})

