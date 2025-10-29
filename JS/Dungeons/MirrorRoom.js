
let ArrayRecompensas = {
    moeda: 54,
    frutaCoracao: 24,
    frutaEnergia: 22, 
}

const FASE = "Reino dos Espelhos";
function getLevelName(){
    return FASE;
}

const TOTAL_VIAGENS = 3;
let viagensRestantes = TOTAL_VIAGENS;
const BOTAO_EX = document.getElementById("botao-explorar");
BOTAO_EX.innerHTML = `Explorar (${viagensRestantes}/${TOTAL_VIAGENS})`; 

function aumentarTotalViagens(){
    viagensRestantes ++;
    BOTAO_EX.innerHTML = `Explorar (${viagensRestantes}/${TOTAL_VIAGENS})`; 
}

function gerarDungeonPre(){
    const rd = randomInt(1, 4);
    desenharGrade(5, "espelho", true, ArrayRecompensas);
    Ghosts.gerarInimigos();
}

gerarDungeonPre();

function resetar(){
    viagensRestantes --;
    zerarInimigoAlvo();
    zerarBauAlvo();
    
    if(viagensRestantes > 0){
        let removido1 = removerGrid();
        let removido2 = deletarInimigos();

        if(removido1 && removido2){
            gerarDungeonPre();
            atualizarPos();
            BOTAO_EX.innerHTML = `Explorar (${viagensRestantes}/${TOTAL_VIAGENS})`; 
        }
    }
    else{
        BOTAO_EX.classList.add("botao-inativo");
        BOTAO_EX.classList.remove("botao-status");
        BOTAO_EX.innerHTML = `Sair`;
    }  
}