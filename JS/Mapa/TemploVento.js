let ultimaSala = false;

const SALA = getPlace("temploVento");

const NomeSala = SALA.nome;
const ArrayRecompensas = SALA.recompensas;

setBackground(SALA.background);
setTemaFase(SALA);
addReward("medalhaoVento", 1);

function getLevelName(){
    return NomeSala;
}

function mudarBotaoExplorar(restante, total){
    BOTAO_EX.innerHTML = `Avançar (${restante}/${total})`; 
}

const TOTAL_VIAGENS = 4;
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
    desenharGrade("temploVento", false);
    const QUANT_BAU = randomInt(0, 2);
    Chest.gerarBaus(QUANT_BAU, ArrayRecompensas, SALA.baus);

    let tipoSala = randomInt(1, 4);

    if(tipoSala == 1){
        let quantNapolitanos = randomInt(1, 2);
        Napolitanos.gerarInimigos(quantNapolitanos);
    }
    else if(tipoSala == 2){
        let quantNapolitanos = randomInt(3, 4);
        Napolitanos.gerarInimigos(quantNapolitanos);
    }
    else if(tipoSala == 3){
        Ogros.gerarInimigos()
    }
    else if(tipoSala == 4){
        GuerreiroHellas.gerarInimigos();
    }

    const VIGIA_PS = [95, 5];
    let entPos = porcentagemTelaPixel(randomVec(VIGIA_PS), 30);
    let entidade = new FlyingEntity("vigilantes", [entPos.x, entPos.y]);
    entidade.perseguirJogador();

}

gerarDungeonPre();

function resetar(){
    if(thereAreEnemies()){
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
                    BOTAO_EX.innerHTML = `Fim de Fase`;
                    BOTAO_EX.onclick = sairSala;
                }
                else{
                    mudarBotaoExplorar(viagensRestantes, TOTAL_VIAGENS);
                }
            }
        }
    }
    else{
        emitirNotificacao(0, "Derrote todos os inimigos para Avançar")
    }
}

