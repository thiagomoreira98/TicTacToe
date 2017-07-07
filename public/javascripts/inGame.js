//Função chamada quando o usuário clica na tela
function inGame(id){
    var img = getSrcImg(id);
    if(img === "branco.png"){        
        whoNext();
        document.getElementById(id).src = "public/images/" +player +".png";
        document.getElementById(id).setAttribute("val", player);
    }
    //console.log("quem jogou: "+player);
    //console.log("contPlayer: "+this.contPlayer);
    //console.log("contMoves: "+contMoves);

    //Verifica o resultado
    chkResult();
}