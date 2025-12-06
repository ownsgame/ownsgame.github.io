const rewards = {};

function addReward(recompensa, quantidade){
    rewards[recompensa] = (rewards[recompensa] || 0) + quantidade;
}

function getRewardsObtained(){
    return rewards;
}

function rewardsToHtml(){
    let string = `<h2>Recompensas Obtidas:</h2>`;
    let quantidadeTipos = Object.keys(rewards).length;

    if(quantidadeTipos === 0){
        string += `<h3>Você não coletou nenhuma recompensa ainda</h3>`;
    } else {
        
        string += `<div class="dequeRewards">`;
        for (let tipo in rewards) {

            const RECOMPENSA = getItem(tipo);
            string += `<div class="cardReward">
            <h3>${RECOMPENSA.nome}</h3>
            <img width="80px" heigth="80px" src="${RECOMPENSA.sprite}"> 
            <h3>${rewards[tipo]}</h3>
            </div>`;
        }
        string += `</div>`;
    }
    return string;    
}