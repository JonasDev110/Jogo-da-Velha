const board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

let currentPlayer = 'X';
let gameOver = false;

function makeMove(row, col) {
    if (!gameOver && board[row][col] === '') {
        board[row][col] = currentPlayer;
        document.getElementsByClassName('cell')[row * 3 + col].innerText = currentPlayer;
        if (checkWinner()) {
            document.getElementById('message').innerText = `${currentPlayer} venceu!`;
            gameOver = true;
        } else if (checkDraw()) {
            document.getElementById('message').innerText = 'Empate!';
            gameOver = true;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    // Verifica se há alguma sequência vencedora nas linhas, colunas ou diagonais
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
            return true;
        }
        if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
            return true;
        }
    }
    if (board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) {
        return true;
    }
    if (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer) {
        return true;
    }
    return false;
}

function checkDraw() {
    // Verifica se todas as células foram preenchidas (empate)
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}

function resetBoard() {
    board.forEach(row => row.fill(''));
    const cells = document.getElementsByClassName('cell');
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerText = '';
    }
    currentPlayer = 'X';
    gameOver = false;
    document.getElementById('message').innerText = '';
}
