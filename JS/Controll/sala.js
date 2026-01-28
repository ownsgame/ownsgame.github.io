function marcarSala(link){
    setSessionUltimaSala(link);
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