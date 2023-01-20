var player = true

var turn = true

var board = [
    ["","",""],
    ["","",""],
    ["","",""]
]

function resetBoard(){
    board = [
    ["","",""],
    ["","",""],
    ["","",""]
    ];
    turn = true;
    updateGraphic();
}

function boardCheck(){
    //this is for some info validation across both clients
}

function setPlayer(input){
    player = input;
}

function updateGraphic(){
    document.getElementById("btn1").innerHTML = board[0][0];
    document.getElementById("btn2").innerHTML = board[0][1];
    document.getElementById("btn3").innerHTML = board[0][2];
    document.getElementById("btn4").innerHTML = board[1][0];
    document.getElementById("btn5").innerHTML = board[1][1];
    document.getElementById("btn6").innerHTML = board[1][2];
    document.getElementById("btn7").innerHTML = board[2][0];
    document.getElementById("btn8").innerHTML = board[2][1];
    document.getElementById("btn9").innerHTML = board[2][2];

    console.log(checkWin(board));
}

function btn1Pressed(){
    if(turn == player){
        board[0][0] = ((player) ? "X" : "O");
        updateGraphic();
        turn = !turn;
    }
}

function btn2Pressed(){
    if(turn == player){
        board[0][1] = ((player) ? "X" : "O");
        updateGraphic();
        turn = !turn;
    }
}

function btn3Pressed(){
    if(turn == player){
        board[0][2] = ((player) ? "X" : "O");
        updateGraphic();
        turn = !turn;
    }
}

function btn4Pressed(){
    if(turn == player){
        board[1][0] = ((player) ? "X" : "O");
        updateGraphic();
        turn = !turn;
    }
}

function btn5Pressed(){
    if(turn == player){
        board[1][1] = ((player) ? "X" : "O");
        updateGraphic();
        turn = !turn;
    }
}

function btn6Pressed(){
    if(turn == player){
        board[1][2] = ((player) ? "X" : "O");
        updateGraphic();
        turn = !turn;
    }
}

function btn7Pressed(){
    if(turn == player){
        board[2][0] = ((player) ? "X" : "O");
        updateGraphic();
        turn = !turn;
    }
}

function btn8Pressed(){
    if(turn == player){
        board[2][1] = ((player) ? "X" : "O");
        updateGraphic();
        turn = !turn;
    }
}

function btn9Pressed(){
    if(turn == player){
        board[2][2] = ((player) ? "X" : "O");
        updateGraphic();
        turn = !turn;
        
    }
}

function checkWin(board) {
    // Check rows
    for (let i = 0; i < 3; i++) {
        if(board[i][0] == "" || board[i][1] == "" || board[i][2] == ""){
            
        }
        else if(board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
            return true;
        }
    }

    // Check columns
    for (let i = 0; i < 3; i++) {
        if(board[0][i] == "" || board[1][i] == "" || board[2][i] == ""){
            
        }
        else if(board[0][i] === board[1][i] && board[1][i] === board[2][i]) {
            return true;
        }
    }

    // Check diagonals
    if(board[0][0] == "" || board[1][1] == "" || board[2][2] == ""){
            
    }
    else if (board[0][0] === board[1][1] && board[1][1] === board[2][2]){
        return true;
    }

    if(board[0][2] == "" || board[1][1] == "" || board[1][1] == "" || board[2][0] == ""){
            
    }
    else if (board[0][2] === board[1][1] && board[1][1] === board[2][0]) {
        return true;
    }

    // If no win is found
    return null;
}