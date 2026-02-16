function verificaAcaoReward(recompensa){
    if(recompensa == "frutaCoracao"){
        healthFruitAction();
    }
    else if(recompensa == "frutaEnergia"){
        energyFruitAction();
    }
    else if(recompensa == "amolador"){
        amoladorFunction();
    }
}

function healthFruitAction(){
    let jogador = getObjectPlayer();
    jogador.recuperarVida(15);
}

function energyFruitAction(){
    aumentarTotalViagens();
}

function amoladorFunction(){
    let jogador = getObjectPlayer();
    jogador.aumentarAtaque(10);
}
