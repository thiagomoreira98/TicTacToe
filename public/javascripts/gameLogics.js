var contPlayer = 0; //Contador de vez do player
var contMoves = 0; //Contador de jogadas
var player = 0;
var vetImg = []; //vetor que recebe todas as src das imagens

//Função que verifica quem é o proximo a jogar
function whoNext(){
    var proximo;
    if(contPlayer % 2 != 0){
        player = "x";
        if(qntPlayers == 1){
            //função que o CPU joga vem aqui
        }
        proximo = "player O"
        contPlayer++;
        contMoves++;
    }
    else{
        player = "o";
        if(qntPlayers == 1){
            //função que o CPU joga vem aqui
        }
        proximo = "player X"
        contPlayer++;
        contMoves++;
    }
    //console.log("Vez do: "+proximo);
}

//Função para pegar o 'src' da imagem que ele clicar
function getSrcImg(id){
    var img = document.getElementById(id).src
    return img.substring(img.length - 10, img.length);
}

function cpuPlays(id, vetImg){
    var home = getSrcImg(id);
    if(home == "branco.png"){
        vet
        // document.getElementById(id).setAttribute("src", "public\images\ " +player +".png");
    }
}