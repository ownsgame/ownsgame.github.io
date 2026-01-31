function marcarSala(link){
    setSessionUltimaSala(link);
}

let TEMA_DA_FASE = null;

function getTemaFase(){
    return TEMA_DA_FASE;
}

function setTemaFase(fase){
    if(fase.trilha){
        TEMA_DA_FASE = fase.trilha;
    }
}

function tocarTemaFase(){
    if(TEMA_DA_FASE != null){
        tocarAudio(TEMA_DA_FASE);
    }

    const botao = document.getElementById("botao-trilha");
    botao.innerHTML = "<i class='fa-solid fa-volume-xmark'></i>";
    botao.onclick = pararTemaFase;
}

function pararTemaFase(){
    pararAudio();
    const botao = document.getElementById("botao-trilha");
    botao.innerHTML = "<i class='fa-solid fa-music'></i>";
    botao.onclick = tocarTemaFase;
}

function redirecionarUltimaSala(){
    const LINK_SALA = getSessionUltimaSala();
    location.replace(LINK_SALA);
}

function sairSala(){
    apagarSala();
    addRewardsToInventory();
    showEndRewards();
}

function apagarSala(){
    deletarFlyingEntitys();
    zerarInimigoAlvo();
    Chest.matarBaus();
    removerGrid();
    deletarInimigos();
    fecharAbaStatus();
}

function apagarSalaBoss(){
    fecharAbaStatus();
    removerGrid();
    deletarFlyingEntitys();
}