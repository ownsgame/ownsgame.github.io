let baus = [];

class Chest extends FixedEntity{
    constructor(posicao, recompensa, quantidade, elemento, sprites){
        super(elemento, posicao, 2);
        this.recompensa = recompensa;
        this.quantidade = quantidade;
        this.elemento = elemento;
        this.aberto = false;
        this.sprites = sprites;
        this.setSprite(sprites[0]);
        this.abrir();
    }

    abrir(){
        this.elemento.addEventListener("click", ()=>{
            if(!this.aberto){
                addReward(this.recompensa, this.quantidade);
                this.aberto = true;

                const row = parseInt(this.elemento.style.gridRow);
                const col = parseInt(this.elemento.style.gridColumn);
                setTileValue("g", row, col, false);

                this.setSprite(this.sprites[1]);
                mostrarRecompensas(this.recompensa, this.quantidade);
                
                ChamadorAcao.mudarEstado(0);
            }
        });
    }

    setSprite(sprite){
        this.elemento.src = sprite;
    }

    static gerarBaus(quantidade, recompensas, sprites) {
        const posicoesOcupadas = new Set();

        if (quantidade > 25) {
            quantidade = 25;
        }
    
        for (let i = 0; i < quantidade; i++) {

            const ID = sorteioComProbabilidade(recompensas);
            const ITEM = getItem(ID);

            let QUANT = 1;
            if (!ITEM.unico) {
                QUANT = randomInt(ITEM.minQuant, ITEM.maxQuant);
            }

            let posX, posY, chavePosicao;

            do {
                posX = randomInt(1, 5);
                posY = randomInt(1, 5);
                chavePosicao = `${posX},${posY}`;
            } while (posicoesOcupadas.has(chavePosicao));

            posicoesOcupadas.add(chavePosicao);
            const POSICOES = [posX, posY];
            const novoBauEl = document.createElement("img");
            novoBauEl.classList.add("pointer");
            const novoBau = new Chest(POSICOES, ITEM.id, QUANT, novoBauEl, sprites);
            baus.push(novoBau);
        }
    }


    static matarBaus(){
        baus.forEach(bau => {
            bau.elemento.remove();
        });
    }
}

function mostrarRecompensas(id, quantidade){
    const TELA_REWARD = document.getElementById("tela_reward");
    const RECOMPENSA = getItem(id);
    TELA_REWARD.innerHTML = `
        <h3>Recompensa Concedida!</h3>
        <img src="${RECOMPENSA.sprite}" height="50px" width="50px">
        <h3>${quantidade}x ${RECOMPENSA.nome}</h3>
        <p><i>"${RECOMPENSA.descricao}"</i></p>
        <button class="botao-ativo" onclick="fecharMenuRewards()">Fechar</button>
    `;
    TELA_REWARD.style.display = "flex";
    verificaAcaoReward(id);
}







