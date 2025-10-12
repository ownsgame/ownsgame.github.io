let rewards = {};
let baus = [];
let chestTarget = null;

let possiveisRecompensas = {
    moeda: 54,
    frutaCoracao: 24,
    frutaEnergia: 22, 
}

class Chest{
    constructor(recompensa, quantidade, elemento){
        this.recompensa = recompensa;
        this.quantidade = quantidade;
        this.elemento = elemento;
        this.aberto = false;
    }

    abrir(){
        if(!this.aberto){
            rewards[this.recompensa] = (rewards[this.recompensa] || 0) + this.quantidade;
            this.aberto = true;
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

function setBau(elemento) {
    
    let sorteio = Math.random() * 100;

    let acumulado = 0;
    let recompensaEscolhida = null;

    for (let nome in possiveisRecompensas) {
        acumulado += possiveisRecompensas[nome];
        if (sorteio < acumulado) {
            recompensaEscolhida = nome;
            break;
        }
    }

    if (!recompensaEscolhida) {
        recompensaEscolhida = Object.keys(possiveisRecompensas)[0];
    }

    let quantidade = randomInt(2, 10);
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
        <p>${quantidade} ${getRewardName(tipo)}</p>
        <button onclick="fecharMenuRewards()">Fechar</button>
    `;
    TELA_REWARD.style.display = "flex";
}


