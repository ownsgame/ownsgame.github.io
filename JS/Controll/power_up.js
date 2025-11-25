function verificaAcaoReward(recompensa){
    if(recompensa == "frutaCoracao"){
        healthFruitAction();
    }
    else if(recompensa == "frutaEnergia"){
        energyFruitAction();
    }
}

function healthFruitAction(){
    let jogador = getObjectPlayer();
    jogador.recuperarVida(15);
}

function energyFruitAction(){
    aumentarTotalViagens();
}