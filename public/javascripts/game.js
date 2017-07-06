// var qntPlayers = prompt("Quantos players ? 1 ou 2 ?");
// console.log("qntPlayers: "+qntPlayers);
var cont = 0;
var player = 0;

//Seleciona se quer ser X ou O
function whoStart(cont, player){
    this.player = prompt("Escolha:\n1 - X\n2 - O");
    if(this.player == 1){
        this.cont = 1; //player = "x"
    }
    else if(this.player == 2){
        this.cont = 2; //player = "o"
    }
    else{
        do{
            alert("Opção Inválida!");
            whoStart(cont, player);
        }while(this.player != 1 && this.player != 2);
    }
}

whoStart(cont, player);
console.log("quem jogou: "+player);
console.log("cont: "+cont);

//Função chamada quando o usuário clica na tela
function inGame(id, cont){
    var img = checkImg(id);
    if(img === "branco.png"){        
        if(this.cont % 2 != 0){
            player = "x";
        }
        else if(this.cont % 2 == 0){
            player = "o";
        }
        document.getElementById(id).src = "public/images/" +player +".png";     
    }
    this.cont++;
    console.log("quem jogou: "+player);
    console.log("cont: "+this.cont);
}

//Função para pegar o 'src' da imagem
function checkImg(id){
    var img = document.getElementById(id).src
    return img.substring(img.length - 10, img.length);
}