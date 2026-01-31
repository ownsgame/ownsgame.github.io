let ultimaSala = false;

const SALA = getPlace("colinaDancante");

const NomeSala = SALA.nome;
const ArrayRecompensas = SALA.recompensas;

setBackground(SALA.background);
setTemaFase(SALA);

function getLevelName(){
    return NomeSala;
}

function mudarBotaoExplorar(restante, total){
    BOTAO_EX.innerHTML = `Avançar (${restante}/${total})`; 
}

const TOTAL_VIAGENS = 5;
let viagensRestantes = TOTAL_VIAGENS;
const BOTAO_EX = document.getElementById("botao-explorar");
mudarBotaoExplorar(viagensRestantes, TOTAL_VIAGENS);

function aumentarTotalViagens(){
    viagensRestantes ++;
    mudarBotaoExplorar(viagensRestantes, TOTAL_VIAGENS);

    if(ultimaSala){
        BOTAO_EX.onclick = resetar;
    }
}

function gerarDungeonPre(){
    desenharGrade("colina", false);
    const QUANT_BAU = randomInt(0, 3);
    Chest.gerarBaus(QUANT_BAU, ArrayRecompensas, SALA.baus);

    let flowsQ = randomInt(0, 5);
    Flows.gerarInimigos(flowsQ);

    let flowysQ = randomInt(0, 2);
    Flowys.gerarInimigos(flowysQ);
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
                mudarBotaoExplorar(viagensRestantes, TOTAL_VIAGENS);
            }
        }
    }
}

