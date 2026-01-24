let ultimaSala = false;

const SALA = getPlace("mirrorroom");

const NomeSala = SALA.nome;
const ArrayRecompensas = SALA.recompensas;

setBackground(SALA.background);

function getLevelName(){
    return NomeSala;
}

function mudarBotaoExplorar(restante, total){
    BOTAO_EX.innerHTML = `Avançar (${restante}/${total})`; 
}

const BIRD_PS = [70, 30];
let entPos = porcentagemTelaPixel(randomVec(BIRD_PS), 40);
let entidade = new FlyingEntity("blue_ghost", [entPos.x, entPos.y]);
entidade.perseguirJogador();

setInterval(()=>{
    let newBirdPos = porcentagemTelaPixel(randomVec(BIRD_PS), 40);
    let novaEntidade = new FlyingEntity("blue_ghost", [newBirdPos.x, newBirdPos.y]);
    novaEntidade.perseguirJogador();
}, 10000);

const TOTAL_VIAGENS = 3;
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
                BOTAO_EX.innerHTML = `Fim de Fase`;
                BOTAO_EX.onclick = sairSala;
            }
            else{
                mudarBotaoExplorar(viagensRestantes, TOTAL_VIAGENS);
            }
        }
    }
}

