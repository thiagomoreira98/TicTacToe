var contPlayer = 0; //Contador de vez do player
var contMoves = 0; //Contador de jogadas
var player = 0; //player atual
var vetImg = []; //vetor que recebe todas as src das imagens
var proximo = 0;; //proximo player
var getVal; //pegar o atributo "val" da tag img
var homeId = 0; //cpu escolhe uma lugar para jogar

//Função para pegar o atributo "val" da imagem que ele clicar
function getAttVal(id){
    getVal = document.getElementById(id).getAttribute("val");
}

//Função para mudar o atributo "val" da img quando for a vez da CPU
function setSrcAndValCpu(homeId){
    document.getElementById(homeId).src = "public/images/" +cpu +".png";
    document.getElementById(homeId).setAttribute("val", cpu);
}

//Função para mudar o atributo "val" da img quando for a vez do player
function setSrcAndValPlayer(id){
    document.getElementById(id).src = "public/images/" +player +".png";
    document.getElementById(id).setAttribute("val", player);
}

//Função nivel de dificuldade fácil da CPU
function cpuLevelEasy(){
    var numRandom = Math.floor(Math.random() * 9);
    homeId = "home" + numRandom;
    getAttVal(homeId);
    if(getVal == "branco"){
        vetImg[numRandom] = cpu;
        setSrcAndValCpu(homeId)
    }
    else if((getVal != "branco") && (getVal != "") && (contMoves != 5)){
        cpuLevelEasy();
    }
}

//Função nivel de dificuldade normal da CPU
function cpuLevelNormal(){
    if(contMoves > 1){
        chkIfPlayerWinInNextMove(vetImg);
    }
    if(playerWinInNextMove == false){
        getAttVal("home4");
        if(getVal == "branco"){
            vetImg[4] = cpu;
            setSrcAndValCpu("home4");
        }
        else{
            getAttVal("home3");
            if(getVal == "branco"){
                vetImg[3] = cpu;
                setSrcAndValCpu("home3");
            }
        }
    }
    else if(cpuPlays == false){
        getAttVal("home3");
        if(getVal == "branco"){
            vetImg[3] = cpu;
            setSrcAndValCpu("home3");
        }
        else{
            do{
                var numRandom = Math.floor(Math.random() * 9);
                homeId = "home" + numRandom;
                getAttVal(homeId);
                if(getVal == "branco"){
                    vetImg[numRandom] = cpu;
                    setSrcAndValCpu(homeId);
                }
            }while(getVal != "branco");
        }  
    }
}

//Função que chama a CPU conforme o level escolhido
function cpuLevel(){
    if(level == 1){
        cpuLevelEasy();
    }
    else{
        cpuLevelNormal();
    }
}