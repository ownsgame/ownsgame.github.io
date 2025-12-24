
const PLAYER_DADOS = getSession();
console.log(PLAYER_DADOS);

let indexInventario = 0;
let vetorSecoes = ["Status", "Gear", "Missão"];

function avancarSecao(){
    indexInventario = (indexInventario + 1) % vetorSecoes.length;
    const ABA = vetorSecoes[indexInventario];
    toogleSecaoInventario(ABA);
}

function retrocederSecao(){
    indexInventario = (indexInventario - 1 + vetorSecoes.length) % vetorSecoes.length;
    const ABA = vetorSecoes[indexInventario];
    toogleSecaoInventario(ABA);
}


function toogleSecaoInventario(aba){
    if(aba == "Status"){
        loadStatus();
    }
    else if(aba == "Gear"){
        loadGear();
    }
    else if(aba == "Missão"){
        loadMissao();
    }
}

function sair(){
    window.location(PLAYER_DADOS.ultimaSala);
}
