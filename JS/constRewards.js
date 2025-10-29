const Recompensas_String = {
    moeda: "Moeda(s)",
    frutaCoracao: "Fruto do Coração",
    frutaEnergia: "Cacho de Energia", 
    espadaFantasma: "Espada Fantasma"
}

const Recompensas_Img = {
    moeda: "Sprites/Itens/coin.svg",
    frutaCoracao: "Sprites/Itens/health_fruit.svg",
    frutaEnergia: "Sprites/Itens/energy_berry.svg", 
    espadaFantasma: "Sprites/Itens/espada_fantasma.svg",
}


function sortearItem(objProbabilidades) {
    let sorteio = Math.random() * 100;
    let acumulado = 0;

    for (let item in objProbabilidades) {
        acumulado += objProbabilidades[item];
        if (sorteio < acumulado) {
            return item;
        }
    }
    return Object.keys(objProbabilidades)[0];
}

function getRewardValue(recompensa){
    const Recompensas_Valores = {
        moeda: randomInt(1, 20),
        frutaCoracao: 1,
        frutaEnergia: 1, 
        espadaFantasma: 1,
    }
    return Recompensas_Valores[recompensa];
}

function getRewardName(recompensa){
    return Recompensas_String[recompensa];
}

function getRewardSprite(recompensa){
    return Recompensas_Img[recompensa];
}