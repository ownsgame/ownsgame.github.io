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
            addReward(this.recompensa, this.quantidade);
            this.aberto = true;

            const row = parseInt(this.elemento.style.gridRow);
            const col = parseInt(this.elemento.style.gridColumn);
            setTileValue("g", row, col, false);

            this.elemento.classList.add("bau-aberto");
            this.elemento.classList.remove("bau");
            mostrarRecompensas(this.recompensa, this.quantidade);
            
            ChamadorAcao.mudarEstado(0);
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
        <h3>${quantidade}x ${getRewardName(tipo)}</h3>
        <p><i>"${getRewardDescricao(tipo)}"</i></p>
        <button class="botao-ativo" onclick="fecharMenuRewards()">Fechar</button>
    `;
    TELA_REWARD.style.display = "flex";
    verificaAcaoReward(tipo);
}

function zerarBauAlvo(){
    chestTarget = null;
}





