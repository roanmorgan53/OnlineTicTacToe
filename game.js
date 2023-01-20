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