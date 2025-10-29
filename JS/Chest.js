let rewards = {};
let baus = [];
let chestTarget = null;

class Chest{
    constructor(recompensa, quantidade, elemento){
        this.recompensa = recompensa;
        this.quantidade = quantidade;
        this.elemento = elemento;
        this.aberto = false;
    }

    abrir(){
        if(!this.aberto){
            addRewardsList(this.recompensa, this.quantidade);
            this.aberto = true;
            this.elemento.classList.add("bau-aberto");
            this.elemento.classList.remove("bau");
            mostrarRecompensas(this.recompensa, this.quantidade);
        }
    }

    getElemento(){
        return this.elemento;
    }

    getAberto(){
        return this.aberto;
    }
}

function setBau(elemento, ArrayRecompensas = {
    moeda: 54,
    frutaCoracao: 24,
    frutaEnergia: 22, 
}) {
    let recompensaEscolhida = sortearItem(ArrayRecompensas);
    let quantidade = getRewardValue(recompensaEscolhida);
    let novoBau = new Chest(recompensaEscolhida, quantidade, elemento);
    baus.push(novoBau);
}

function abrirBaus(){
    baus.forEach(bau => {
        let b = bau.getElemento();
        b.addEventListener("click", ()=>{
            chestTarget = bau;
        })
    });
}
setInterval(abrirBaus, 200);

function coletarRecompensa(){
    if(chestTarget != null){
        chestTarget.abrir();
    }
}

function mostrarRecompensas(tipo, quantidade){
    const TELA_REWARD = document.getElementById("tela_reward");
    TELA_REWARD.innerHTML = `
        <h3>Recompensa Concedida!</h3>
        <img src="${getRewardSprite(tipo)}" height="50px" width="50px">
        <p>${quantidade}x ${getRewardName(tipo)}</p>
        <button onclick="fecharMenuRewards()">Fechar</button>
    `;
    TELA_REWARD.style.display = "flex";
    verificaAcaoReward(tipo);
}

function zerarBauAlvo(){
    chestTarget = null;
}

function rewardsToHtml(){
    
    let string = `<h2>Recompensas Obtidas:</h2>`;
    let quantidadeTipos = Object.keys(rewards).length;

    if(quantidadeTipos === 0){
        string += `<h3>Você não coletou nenhuma recompensa ainda</h3>`;
    } else {
        
        string += `<div class="dequeRewards">`;
        for (let tipo in rewards) {
            string += `<div class="cardReward">
            <h3>${getRewardName(tipo)}</h3>
            <img width="80px" heigth="80px" src="${getRewardSprite(tipo)}"> 
            <h3>${rewards[tipo]}</h3>
            </div>`;
        }
        string += `</div>`;
    }
    return string;    
}

function addRewardsList(recompensa, quantidade){
    rewards[recompensa] = (rewards[recompensa] || 0) + quantidade;
}


