let baus = [];

class Chest extends FixedEntity{
    constructor(posicao, recompensa, quantidade, sprites){
        super(posicao, 2);
        this.recompensa = recompensa;
        this.quantidade = quantidade;
        this.aberto = false;
        this.sprites = sprites;
        this.setClasses();
        this.setSprite(sprites[0]);
        this.abrir();
    }

    setClasses(){
        this.elemento.classList.add("pointer");
    }

    abrir(){
        this.elemento.addEventListener("click", ()=>{
            if(!this.aberto){
                addReward(this.recompensa, this.quantidade);
                this.aberto = true;

                const row = parseInt(this.elemento.style.gridRow);
                const col = parseInt(this.elemento.style.gridColumn);

                this.setSprite(this.sprites[1]);
                this.elemento.classList.add("no-click");
                
                mostrarRecompensas(this.recompensa, this.quantidade);

            }
        });
    }

    setSprite(sprite){
        this.elemento.src = `../${sprite}`;
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
            const novoBau = new Chest(POSICOES, ITEM.id, QUANT, sprites);
            baus.push(novoBau);
        }
    }


    static matarBaus(){
        baus.forEach(bau => {
            bau.elemento.remove();
        });
    }
}






