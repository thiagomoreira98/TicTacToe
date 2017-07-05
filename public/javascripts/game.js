// var qntPlayers = prompt("Quantos players ? 1 ou 2 ?");
// console.log("qntPlayers: "+qntPlayers);

var startPlayer = prompt("Qual player começa ?\n 1 ou 2 ?");
console.log("start player: "+startPlayer);

var player, cont = 0;

function setPlayer(startplayer){
    if(startPlayer == 1){
        player = 'x';
        cont = 1;
    }
    else if(startPlayer == 2){
        player = 'o';
        cont = 2;
    }
    else{
        alert("Opção Inválida!");
    }
}

function inGame(id){
    setPlayer(player);
    var img = checkImg(id);
    if(img === "branco.png"){
        document.getElementById(id).src = "public/images/" + player +".png";
        if(cont % 2 != 0){
            player = 'x';
            cont++;
        }
        else{
            player = 'o';
            cont++;
        }
        
    }
    console.log("cont: "+cont);
    console.log("quem jogou: "+player);
}

function checkImg(id){
    var img = document.getElementById(id).src
    return img.substring(img.length - 10, img.length);
}