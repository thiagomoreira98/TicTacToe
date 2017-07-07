var qntPlayers = 0;
var contPlayer = 0; //Contador de vez do player
var contMoves = 0; //Contador de jogadas
var player = 0;

//Função para verificar a quantidade de players
function quantifyPlayers(){
    do{
        qntPlayers = prompt("Informe a quantidade de Player:\n1 ou 2 players?");
    }while((qntPlayers != 1) && (qntPlayers != 2));
}

//Seleciona se quer ser X ou O
function whoStart(){
    contPlayer = prompt("Player 1 Escolha:\n1 - X\n2 - O");
    
    while((contPlayer != 1) && (contPlayer != 2)){
        alert("Opção Inválida!");
        whoStart();
    }
}

//Função que verifica quem é o proximo a jogar
function whoNext(){
    var proximo;
    if(contPlayer % 2 != 0){
            player = "x";
            proximo = "player O"
            contPlayer++;
            contMoves++;
        }
        else if(contPlayer % 2 == 0){
            player = "o";
            proximo = "player X"
            contPlayer++;
            contMoves++;
        }
        console.log("Vez do: "+proximo);
}

//Função para pegar o 'src' da imagem que ele clicar
function getSrcImg(id){
    var img = document.getElementById(id).src
    return img.substring(img.length - 10, img.length);
}

//Função chamada quando o usuário clica na tela
function inGame(id){
    var img = getSrcImg(id);
    if(img === "branco.png"){        
        whoNext();
        document.getElementById(id).src = "public/images/" +player +".png";
        document.getElementById(id).setAttribute("val", player);
        document.getElementById(id).removeAttribute("onclick");
    }
    //console.log("quem jogou: "+player);
    console.log("contPlayer: "+this.contPlayer);
    console.log("contMoves: "+contMoves);

    //Verifica o resultado
    chkResult();
}

quantifyPlayers();
whoStart();