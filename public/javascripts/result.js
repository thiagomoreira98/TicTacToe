var vetImg = [];

//Função para pegar o 'src' de todas as imagens do tabuleiro
function checkAllImg(){
    var vet = [];
    for(var i = 0; i < 9; i++){
        vet[i] = document.getElementById("home"+i).getAttribute("val");  
    }
    console.log(vet);
    return vet;
}

vetImg = checkAllImg();
console.log(vetImg);

//Verificando se o player X é o vencedor
function chkIfWinnerX(vetImg){
    //Linha 1
    if((this.vetImg[0] == "x") && (this.vetImg[1] == "x") && (this.vetImg[2] == "x")){
        winnerX();
    }
    //Linha 2
    else if((this.vetImg[3] == "x") && (this.vetImg[4] =="x") && (this.vetImg[5] == "x")){
        winnerX();
    }
    //Linha 3
    else if((this.vetImg[6] == "x") && (this.vetImg[7] == "x") && (this.vetImg[8] == "x")){
        winnerX();
    }
    //Diagonal primária
    else if((this.vetImg[0] == "x") && (this.vetImg[4] == "x") && (this.vetImg[8] == "x")){
        winnerX();
    }
    //Diagonal secundária
    else if((this.vetImg[2] == "x") && (this.vetImg[4] == "x") && (this.vetImg[6] == "x")){
        winnerX();
    }
    //Coluna 1
    else if((this.vetImg[0] == "x") && (this.vetImg[3] == "x") && (this.vetImg[6] == "x")){
        winnerX();
    }
    //Coluna 2
    else if((this.vetImg[1] == "x") && (this.vetImg[4] == "x") && (this.vetImg[7] == "x")){
        winnerX();
    }
    //Coluna 3
    else if((this.vetImg[2] == "x") && (this.vetImg[5] == "x") && (this.vetImg[8] == "x")){
        winnerX();
    }
    else{
        // console.log("erro X");
    }
}

//Verificando se o player O é o vencedor
function chkIfWinnerO(vetImg){
    //Linha 1
    if((this.vetImg[0] == "o") && (this.vetImg[1] == "o") && (this.vetImg[2] == "o")){
        winnerO();
    }
    //Linha 2
    else if((this.vetImg[3] == "o") && (this.vetImg[4] =="o") && (this.vetImg[5] == "o")){
        winnerO();
    }
    //Linha 3
    else if((this.vetImg[6] == "o") && (this.vetImg[7] == "o") && (this.vetImg[8] == "o")){
        winnerO();
    }
    //Diagonal primária
    else if((this.vetImg[0] == "o") && (this.vetImg[4] == "o") && (this.vetImg[8] == "o")){
        winnerO();
    }
    //Diagonal secundária
    else if((this.vetImg[2] == "o") && (this.vetImg[4] == "o") && (this.vetImg[6] == "o")){
        winnerO();
    }
    //Coluna 1
    else if((this.vetImg[0] == "o") && (this.vetImg[3] == "o") && (this.vetImg[6] == "o")){
        winnerO();
    }
    //Coluna 2
    else if((this.vetImg[1] == "o") && (this.vetImg[4] == "o") && (this.vetImg[7] == "o")){
        winnerO();
    }
    //Coluna 3
    else if((this.vetImg[2] == "o") && (this.vetImg[5] == "o") && (this.vetImg[8] == "o")){
        winnerO();
    }
    else{
        // console.log("erro O");
    }
}

function winnerX(){
    //console.log("Winner: Player X");
}

function winnerO(){
    //console.log("Winner: Player O");
}

//Função para verificar o resultado
function chkResult(contMoves, vetImg){
    checkAllImg();
    // console.log("vetImg: "+vetImg);
    chkIfWinnerO(this.vetImg);
    chkIfWinnerX(this.vetImg);
}
