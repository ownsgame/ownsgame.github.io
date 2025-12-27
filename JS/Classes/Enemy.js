const INIMIGOS_ARRAY = [];

class Inimigo{
    constructor(id, elemento){
        this.elemento = elemento;
        this.emCombate = false;

        const DadosInimigo = getInimigoById(id);
        this.vida = randomInt(DadosInimigo.minVida, DadosInimigo.maxVida);
        this.defesa = randomInt(DadosInimigo.minDefesa, DadosInimigo.maxDefesa);
        this.ataque = randomInt(DadosInimigo.minAtaque, DadosInimigo.maxAtaque);
        this.time = DadosInimigo.intervalo;
        this.animacao = new AnimatedEntity(this.elemento, DadosInimigo.sprites, DadosInimigo.hover, 200);

        const possiveisRecompensas = DadosInimigo.recompensas;

        const ID_RECOMPENSA = sorteioComProbabilidade(possiveisRecompensas);
        const ITEM = getItem(ID_RECOMPENSA);

        let QUANT = 1;
        if (!ITEM.unico) {
            QUANT = randomInt(ITEM.minQuant, ITEM.maxQuant);
        }

        this.recompensa = {
            tipo: ITEM.id,
            quantidade: QUANT,
        }

        this.modoAlerta();
        this.setClasses();
    }


    setClasses(){
        this.elemento.classList.add("tamPadrao", "layerTres");
    }

    estaEmCombate(){
        return this.emCombate;
    }

    getVida(){
        return this.vida;
    }
    getAtaque(){
        return this.ataque;
    }
    getDefesa(){
        return this.defesa;
    }

    getTime(){
        return this.time;
    }
    getPosicao() {
        return {
        x: parseInt(this.elemento.style.gridRow),
        y: parseInt(this.elemento.style.gridColumn)
        };
    }
    getDano(){
        return this.ataque;
    }

    static setThisGrid(objeto, elementoEl, cordX, cordY){
        posicionarGrid(elementoEl, cordX, cordY);
        setTileEnemy(true, cordX, cordY, false);
        fixarAoConteiner(elementoEl);
        INIMIGOS_ARRAY.push(objeto);
    }

    modoAlerta(){
        let jogador = getObjectPlayer();

        setInterval(()=>{
            if(colisionGrid(jogador.getElemento(), this.elemento)){
                this.emCombate = true;
            }
            else{
                this.emCombate = false;
            }
        }, 500);
    }

    sofrerDano(dano){
        let danoTotal = dano - this.defesa >= 0 ? dano - this.defesa : randomInt(1, 4);
        this.vida -= danoTotal;
        exibirDano(danoTotal);
        if(this.vida <= 0){
            this.morrer();
        }  
    }

    morrer(){
        
        if(this.recompensa != null){
            let tipo = this.recompensa.tipo;
            let quantidade = this.recompensa.quantidade;
            addReward(tipo, quantidade);
            mostrarRecompensas(tipo, quantidade);
            
            ChamadorAcao.mudarEstado(0);
        }

        this.remover();
    }

    remover(){
        this.elemento.remove();
        const indice = INIMIGOS_ARRAY.indexOf(this);

        if(indice !== -1){
            INIMIGOS_ARRAY.splice(indice, 1);
        }
    }
}

function getAllEnemies(){
    return INIMIGOS_ARRAY;
}

function deletarInimigos(){
    const INIMIGOS = getAllEnemies();
    for (let i = INIMIGOS.length - 1; i >= 0; i--) {
        INIMIGOS[i].remover();
    }
    return true;
}

