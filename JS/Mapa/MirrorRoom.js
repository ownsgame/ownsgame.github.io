let ultimaSala = false;

setBackground("Sprites/Ground/mirrorroom_background.svg");
const SALA = getPlace("mirrorroom");

const NomeSala = SALA.nome;
const ArrayRecompensas = SALA.recompensas;

function getLevelName(){
    return NomeSala;
}

const TOTAL_VIAGENS = 3;
let viagensRestantes = TOTAL_VIAGENS;
const BOTAO_EX = document.getElementById("botao-explorar");
BOTAO_EX.innerHTML = `Explorar (${viagensRestantes}/${TOTAL_VIAGENS})`; 

function aumentarTotalViagens(){
    viagensRestantes ++;
    BOTAO_EX.innerHTML = `Explorar (${viagensRestantes}/${TOTAL_VIAGENS})`; 

    if(ultimaSala){
        BOTAO_EX.onclick = resetar;
    }
}

function gerarDungeonPre(){
    desenharGrade("mirror", false);
    const QUANT_BAU = randomInt(0, 3);
    Chest.gerarBaus(QUANT_BAU, ArrayRecompensas, SALA.baus);
    Ghosts.gerarInimigos();
}

gerarDungeonPre();


function resetar(){
    viagensRestantes --;
    zerarInimigoAlvo();
    Chest.matarBaus();
    
    if(viagensRestantes >= 0){
        let removido1 = removerGrid();
        let removido2 = deletarInimigos();

        if(removido1 && removido2){
            gerarDungeonPre();
            atualizarPos();
            if(viagensRestantes == 0){
                ultimaSala = true;
                BOTAO_EX.innerHTML = `Sair`;
                BOTAO_EX.onclick = sairSala;
            }
            else{
                BOTAO_EX.innerHTML = `Explorar (${viagensRestantes}/${TOTAL_VIAGENS})`; 
            }
        }
    }
}

function sairSala(){
    addRewardsToInventory();
}