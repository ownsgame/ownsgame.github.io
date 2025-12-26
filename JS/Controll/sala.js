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