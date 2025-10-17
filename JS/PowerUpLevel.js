function verificaAcaoReward(recompensa){
    if(recompensa == "frutaCoracao"){
        healthFruitAction();
    }
}

function healthFruitAction(){
    let jogador = getObjectPlayer();
    jogador.recuperarVida(15);
}