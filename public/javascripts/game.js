var player;

function whoStart(player){
    player = prompt("Qual jogador começa ?\n1 - jogador 1 (x) \n2 - Jogador 2 (o)");
    console.log(player);
}

function start(player){
   whoStart(player);
    if(player === 1){
        player = 'x';
    }
    else if (player === 2){
        player = 'o';
    }
    else{
        do{
            alert("opção inválida!!\nSelecione novamente!");
            whoStart(player);
        }while(player !== 1 && player !== 2);
    }
}

function inGame(id, player){
    var img = checkImg(id);
    if(img === "branco.png"){
        document.getElementById(id).src = "public/images/" + player +".png";
        start(player);
        if(player === 'x'){
            player = 'o';
        }
        else{
            player = 'x';
        }
    }
    
}

function checkImg(id){
    var img = document.getElementById(id).src
    return img.substring(img.length - 10, img.length);
}

playerStart(player);