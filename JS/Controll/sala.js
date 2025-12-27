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
    zerarInimigoAlvo();
    Chest.matarBaus();
    removerGrid();
    deletarInimigos();
    fecharAbaStatus();
}