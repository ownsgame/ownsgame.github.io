const Recompensas_String = {
    moeda: "Moeda(s)",
    frutaCoracao: "Fruto do Coração",
    frutaEnergia: "Cacho de Energia", 
}

const Recompensas_Img = {
    moeda: "Sprites/Itens/coin.svg",
    frutaCoracao: "Sprites/Itens/health_fruit.svg",
    frutaEnergia: "Sprites/Itens/energy_berry.svg", 
}

function getRewardValue(recompensa){
    const Recompensas_Valores = {
        moeda: randomInt(1, 20),
        frutaCoracao: 1,
        frutaEnergia: 1, 
    }
    return Recompensas_Valores[recompensa];
}

function getRewardName(recompensa){
    return Recompensas_String[recompensa];
}

function getRewardSprite(recompensa){
    return Recompensas_Img[recompensa];
}