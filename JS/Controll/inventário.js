
const PLAYER_DADOS = getSession();

let indexInventario = 0;
let vetorSecoes = ["Status", "Itens", "Gear", "Missão", "Quests"];

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
    else if(aba == "Itens"){
        loadItens();
    }
    else if(aba == "Gear"){
        loadGear();
    }
    else if(aba == "Missão"){
        loadMissao();
    }
    else if(aba == "Quests"){
        loadQuests();
    }
}

function trocaDeItens(classe, novoItemId){
    if(classe == "arma"){
        setArmaAtual(novoItemId);
        loadGear();
    }
    else if(classe == "escudo"){
        setEscudoAtual(novoItemId);
        loadGear();
    }
}

function sair(){
    window.location(PLAYER_DADOS.ultimaSala);
}

document.addEventListener("keyup", (evento) => {
    if (evento.key === "ArrowLeft" || evento.key === "a") {
        retrocederSecao();
    }
    else if(evento.key === "ArrowRight" || evento.key === "d") {
        avancarSecao();
    }
});

