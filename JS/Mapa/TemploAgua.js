let ultimaSala = false;

const SALA = getPlace("temploAgua");

const NomeSala = SALA.nome;
const ArrayRecompensas = SALA.recompensas;

setBackground(SALA.background);
setTemaFase(SALA);
addReward("medalhaoAgua", 1);

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
    desenharGrade("temploAgua", false);
    const QUANT_BAU = randomInt(0, 2);
    Chest.gerarBaus(QUANT_BAU, ArrayRecompensas, SALA.baus);
    
    let tipoSala = randomInt(1, 2);

    if(tipoSala == 1){
        Ogros.gerarInimigos();
    }
    else if(tipoSala == 2){
        GuerreiroHellas.gerarInimigos();
    }

    const PEIXE_PS = [95, 5];

    for(let i = 0; i< 2; i++){
        let entPos = porcentagemTelaPixel(PEIXE_PS[i], 30);
        let entidade = new FlyingEntity("lambisgoias", [entPos.x, entPos.y]);
        entidade.perseguirJogador();
    }
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

