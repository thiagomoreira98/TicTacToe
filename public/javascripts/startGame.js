var qntPlayers = 0; //quantidade de players

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

//Seleciona se quer ser X ou O
function whoStart(){
    contPlayer = prompt("Player 1 Escolha:\n1 - X\n2 - O");
    
    while((contPlayer != 1) && (contPlayer != 2)){
        alert("Opção Inválida!");
        whoStart();
    }
}

quantifyPlayers();
whoStart();