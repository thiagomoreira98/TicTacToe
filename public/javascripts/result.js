var drawX = 0;
var drawO = 0;

//Função para pegar o 'src' de todas as imagens do tabuleiro
function getSrcAllImg(){
    for(var i = 0; i < 9; i++){
        vetImg[i] = document.getElementById("home"+i).getAttribute("val");  
    }
}

//Função para verificar se o player X é o vencedor
function chkIfWinnerX(vet){
    //Linha 1
    if((vet[0] == "x") && (vet[1] == "x") && (vet[2] == "x")){
        winnerX();
    }
    //Linha 2
    else if((vet[3] == "x") && (vet[4] =="x") && (vet[5] == "x")){
        winnerX();
    }
    //Linha 3
    else if((vet[6] == "x") && (vet[7] == "x") && (vet[8] == "x")){
        winnerX();
    }
    //Diagonal primária
    else if((vet[0] == "x") && (vet[4] == "x") && (vet[8] == "x")){
        winnerX();
    }
    //Diagonal secundária
    else if((vet[2] == "x") && (vet[4] == "x") && (vet[6] == "x")){
        winnerX();
    }
    //Coluna 1
    else if((vet[0] == "x") && (vet[3] == "x") && (vet[6] == "x")){
        winnerX();
    }
    //Coluna 2
    else if((vet[1] == "x") && (vet[4] == "x") && (vet[7] == "x")){
        winnerX();
    }
    //Coluna 3
    else if((vet[2] == "x") && (vet[5] == "x") && (vet[8] == "x")){
        winnerX();
    }
    else{
        drawX++;
        return drawX;
    }
}

//Função para verificar se o player O é o vencedor
function chkIfWinnerO(vet){
    //Linha 1
    if((vet[0] == "o") && (vet[1] == "o") && (vet[2] == "o")){
        winnerO();
    }
    //Linha 2
    else if((vet[3] == "o") && (vet[4] =="o") && (vet[5] == "o")){
        winnerO();
    }
    //Linha 3
    else if((vet[6] == "o") && (vet[7] == "o") && (vet[8] == "o")){
        winnerO();
    }
    //Diagonal primária
    else if((vet[0] == "o") && (vet[4] == "o") && (vet[8] == "o")){
        winnerO();
    }
    //Diagonal secundária
    else if((vet[2] == "o") && (vet[4] == "o") && (vet[6] == "o")){
        winnerO();
    }
    //Coluna 1
    else if((vet[0] == "o") && (vet[3] == "o") && (vet[6] == "o")){
        winnerO();
    }
    //Coluna 2
    else if((vet[1] == "o") && (vet[4] == "o") && (vet[7] == "o")){
        winnerO();
    }
    //Coluna 3
    else if((vet[2] == "o") && (vet[5] == "o") && (vet[8] == "o")){
        winnerO();
    }
    else{
        drawO++;
        return drawO;
    }
}

//Função para verificar se deu empate
function chkIfDraw(){
    if((contMoves == 9) && (drawX == 9) && (drawO == 9)){
        draw();
    }
}

//Função para remover onclick de todas as img
function rmOnclick(){
    for(var i = 0; i < 9; i++){
        document.getElementsByClassName("home")[i].removeAttribute("onclick");
    }
}

//Função para exibir se o ganhador for o "X"
function winnerX(){
    rmOnclick()
    console.log("Winner: Player X");
}

//Função para exibir se o ganhador for o "O"
function winnerO(){
    rmOnclick()
    console.log("Winner: Player O");
}

//Função para exibir se deu Empate
function draw(){
    rmOnclick()
    console.log("Draw");
}

//Função para verificar o resultado
function chkResult(){
    getSrcAllImg();
    chkIfWinnerO(vetImg);
    chkIfWinnerX(vetImg);
    chkIfDraw();
}
