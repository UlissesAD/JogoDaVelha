var player = null;
var gameOver = false;
var rounds = 0;
var PlayerSelected = document.getElementById('PlayerSelected')
var winner = document.getElementById('winner')
// mapeamento do jogo simplificado
var map = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

changePlayer('O')

function select(id) {
    let square = document.getElementById(id)
    if (square.innerHTML == '-' && gameOver == false) {
        square.innerHTML = player;
        square.style.color = '#eeeeee';
        map[id - 1] = player;
        searchWinner();
        changePlayer(player);
    }
}

function changePlayer(P) {
    
    if (P == 'X')
        player = 'O';
    else
        if (P == 'O')
            player = 'X';
    if(gameOver==true)
        player = ' ';
    PlayerSelected.innerHTML = player

}

function win(W, idL) {
    gameOver = true
    winnerColor(idL)
    winner.innerHTML = W
}

function winnerColor(idL) {
    for(i=0;i<3;i++)
    {
        document.getElementById(idL[i] + 1).style.background = '#bb86fc'
        document.getElementById(idL[i] + 1).style.color = '#111111'
    }
}

function isDraw() {
    if (rounds == 9) {
        console.log("DRAW")
        gameOver = true;
        winner.innerHTML = 'Empate'
    }
}

function searchWinner() {
    rounds++;
    for (let i = 0; i < 3; i++) {
        //Verifica as colunas
        if (map[i] == map[i + 3] && map[i] == map[i + 6]) {
            win(player, [i, i + 3, i + 6])
            return;
        }
        //Verifica as linhas
        if (map[i * 3] == map[1 + i * 3] && map[i * 3] == map[2 + i * 3]) {
            win(player, [i * 3, 1 + i * 3, 2 + i * 3])
            return;
        }
    }
    //verifica a diagonal 1
    if (map[0] == map[4] && map[0] == map[8]) {
        win(player, [0, 4, 8])
        return;
    }
    //verifica a diagonal 2
    if (map[2] == map[4] && map[2] == map[6]) {
        win(player, [2, 4, 6])
        return;
    }
    console.log(rounds)
    isDraw();
}

function restart() {
    gameOver = false;
    winner.innerHTML = '';
    rounds = 0;
    changePlayer('O')
    for (i = 0; i < 9; i++) {
        map[i] = i + 1;
        let square = document.getElementById(i + 1)
        square.style.background = '#111111'
        square.style.color = '#111111'
        square.innerHTML = '-'
    }
}
