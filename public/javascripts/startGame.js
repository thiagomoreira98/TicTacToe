var qntPlayers = 0; //quantidade de players
var level = 0; //nivel de dificuldade

//Função para verificar a quantidade de players
function quantifyPlayers(){
    qntPlayers = prompt("Informe a quantidade de Player:\n1 ou 2 players?");
    
    if((qntPlayers != 1) && (qntPlayers != 2)){
        do{
            alert("Opção Inválida!\nSelecine novamente!");
            quantifyPlayers();
        }while((qntPlayers != 1) && (qntPlayers != 2));
    }
}

//Seleciona se o player 1 quer ser X ou O
function whoStart(){
    contPlayer = prompt("Player 1 Escolha:\n1 - X\n2 - O");
    
    while((contPlayer != 1) && (contPlayer != 2)){
        alert("Opção Inválida!");
        whoStart();
    }
}

//Função que seleciona o nivel de dificuldade da CPU
function whatCpuLevel(){
    level = prompt("Nivel de Dificuldade:\n1 - Easy\n2 - Normal");

    while((level != 1) && (level != 2)){
        alert("Opção Inválida!\nSelecione Novamente!");
        whatCpuLevel();
    }
}

//Função para iniciar o jogo
function startGame(){
    drawO = 0;
    drawX = 0;
    contMoves = 0;
    for(var i = 0; i < 9; i++){
        imgsId = "home"+i
        document.getElementById(imgsId).src = "../public/images/branco.png";
        document.getElementById(imgsId).setAttribute("val", "branco");
        document.getElementById(imgsId).setAttribute("onclick", "inGame(this.id)");
    }
    
    //Iniciando o jogo
    quantifyPlayers();
    if(qntPlayers == 1){
        whatCpuLevel();
    }
    whoStart();
}