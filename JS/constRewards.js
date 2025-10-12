const Recompensas_String = {
    moeda: "Moeda(s)",
    frutaCoracao: "Fruto do Coroção",
    frutaEnergia: "Cacho de Energia", 
}

const Recompensas_Img = {
    moeda: "Sprites/Itens/coin.svg",
    frutaCoracao: "Sprites/Itens/health_fruit.svg",
    frutaEnergia: "Sprites/Itens/energy_berry.svg", 
}


function getRewardName(recompensa){
    return Recompensas_String[recompensa];
}

function getRewardSprite(recompensa){
    return Recompensas_Img[recompensa];
}