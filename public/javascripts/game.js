// var qntPlayers = prompt("Quantos players ? 1 ou 2 ?");
// console.log("qntPlayers: "+qntPlayers);
var contPlayer = 0; //Contador de vez do player
var contMoves = 0; //Contador de jogadas
var player = 0;

//Função para pegar o 'src' da imagem
function checkImg(id){
    var img = document.getElementById(id).src
    return img.substring(img.length - 10, img.length);
}

//Seleciona se quer ser X ou O
function whoStart(contPlyr, plyr){
    this.plyr = prompt("Escolha:\n1 - X\n2 - O");
    if(this.plyr == 1){
        this.contPlyr = 1; //player = "x"
    }
    else if(this.plyr == 2){
        this.contPlyr = 2; //player = "o"
    }
    else{
        do{
            alert("Opção Inválida!");
            whoStart(contPlyr, plyr);
        }while(this.plyr != 1 && this.plyr != 2);
    }
}

whoStart(contPlayer, player);

//Função chamada quando o usuário clica na tela
function inGame(id, contPlyr, contMov){
    var img = checkImg(id);
    if(img === "branco.png"){        
        if(this.contPlyr % 2 != 0){
            player = "x";
            this.contPlyr++;
            this.contMov++;
        }
        else if(this.contPlyr % 2 == 0){
            player = "o";
            this.contPlyr++;
            this.contMov++;
        }
        document.getElementById(id).src = "public/images/" +player +".png";
        document.getElementById(id).setAttribute("val", player);
    }
    // console.log("quem jogou: "+player);
    // console.log("contPlayer: "+this.contPlayer);
    // console.log("contMoves: "+this.contMoves);

    chkResult(this.contMoves, vetImg);
}