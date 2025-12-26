const rewards = {};

function addReward(recompensa, quantidade){
    rewards[recompensa] = (rewards[recompensa] || 0) + quantidade;
}

function getRewardsObtained(){
    return rewards;
}

function addRewardsToInventory(){
    const RECURSOS = getSessionRecursos();
    const INVENTARIO = getSessionInventario();

    
    for(let id in rewards){
        const RECOMPENSA = getItem(id);
        
        if(!RECOMPENSA.consumivel){
            if(RECOMPENSA.destino == "inventário"){
                INVENTARIO[id] = (INVENTARIO[id] || 0) + rewards[id];
            }
            else if(RECOMPENSA.destino == "recursos"){
                RECURSOS[id] = (RECURSOS[id] || 0) + rewards[id];
            }
        }
    }

    setSessionInventario(INVENTARIO);
    setSessionRecursos(RECURSOS);
}
