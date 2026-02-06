let ultimaSala = false;

const SALA = getPlace("temploFogo");

const NomeSala = SALA.nome;
const ArrayRecompensas = SALA.recompensas;

setBackground(SALA.background);
setTemaFase(SALA);
addReward("medalhaoFogo", 1);

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

const FOGO_PS = [95, 5];
let entPos = porcentagemTelaPixel(randomVec(FOGO_PS), 40);
let entidade = new FlyingEntity("fogoGrego", [entPos.x, entPos.y]);
entidade.perseguirJogador();

setInterval(()=>{
    let player = getObjectPlayer();
    if(!player.getVenceu()){
        let newFogoPos = porcentagemTelaPixel(randomVec(FOGO_PS), 40);
        let novaEntidade = new FlyingEntity("fogoGrego", [newFogoPos.x, newFogoPos.y]);
        novaEntidade.perseguirJogador();
    }
    
}, 15000);

function aumentarTotalViagens(){
    viagensRestantes ++;
    mudarBotaoExplorar(viagensRestantes, TOTAL_VIAGENS);

    if(ultimaSala){
        BOTAO_EX.onclick = resetar;
    }
}

function gerarDungeonPre(){
    desenharGrade("temploFogo", false);
    const QUANT_BAU = randomInt(0, 2);
    Chest.gerarBaus(QUANT_BAU, ArrayRecompensas, SALA.baus);
    Vassalos.gerarInimigos();

    const quantEscudeiros = randomInt(0, 2);
    Escudeiros.gerarInimigos(quantEscudeiros);
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

