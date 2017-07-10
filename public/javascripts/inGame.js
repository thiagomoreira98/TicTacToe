//Função chamada quando o usuário clica na div
function inGame(id){
    getAttVal(id);
    if(getVal == "branco"){
        if(qntPlayers == 1){
            whoNextOnePlayer(id);
            chkResult();
            setTimeout(cpuLevel(), 4000);
            chkResult();
        }
        else{
            whoNextTwoPlayers(id);
            chkResult();
        }  
    }
    setVetImg();
}