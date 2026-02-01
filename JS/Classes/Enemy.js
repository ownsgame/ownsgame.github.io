const INIMIGOS_ARRAY = [];

class Inimigo{
    constructor(id, elemento){
        this.elemento = elemento;
        this.emCombate = false;

        this.id = id;
        const DadosInimigo = getInimigoById(id);
        this.vidaInicial = randomInt(DadosInimigo.minVida, DadosInimigo.maxVida);
        this.vida = this.vidaInicial;
        this.defesa = randomInt(DadosInimigo.minDefesa, DadosInimigo.maxDefesa);
        this.ataque = randomInt(DadosInimigo.minAtaque, DadosInimigo.maxAtaque);
        this.intervalo = DadosInimigo.intervalo;
        this.animacao = new AnimatedEntity(this.elemento, DadosInimigo.sprites, DadosInimigo.hover, 150);

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

        this.setClasses();
        this.modoAlerta();
        this.elemento.onclick = () => this.clique();
    }

    setClasses(){
        this.elemento.classList.add("inimigo", "tamPadrao", "layerTres");
    }

    estaEmCombate(){
        return this.emCombate;
    }
    getVida(){
        return this.vida;
    }
    getVidaInicial(){
        return this.vidaInicial;
    }
    getAtaque(){
        return this.ataque;
    }
    getDefesa(){
        return this.defesa;
    }

    getIntervalo(){
        return this.intervalo;
    }

    getPosicao() {
        return {
        x: parseInt(this.elemento.style.gridRow),
        y: parseInt(this.elemento.style.gridColumn)
        };
    }

    static setThisGrid(objeto, elementoEl, cordX, cordY){
        posicionarGrid(elementoEl, cordX, cordY);
        setTileEnemy(true, cordX, cordY, false);
        fixarAoConteiner(elementoEl);
        INIMIGOS_ARRAY.push(objeto);
    }

    atualizarPos(x, y) {
        this.elemento.style.gridRow = x;
        this.elemento.style.gridColumn = y;
    }
    
    modoAlerta(){
        const PLAYER = getObjectPlayer();

        setInterval(()=>{
            if(colisionGrid(PLAYER.getElemento(), this.elemento)){
                this.emCombate = true;
            }
            else {
                this.emCombate = false;
            }
        }, 100);
    }

    clique(){
        const PLAYER = getObjectPlayer();

        if(PLAYER.podeAtacar()){
            const DANO = PLAYER.getAtaque();
            PLAYER.bloquearAtaque();
            this.sofrerDano(DANO);
        }
    }

    sofrerDano(dano){
        let danoTotal = dano - this.defesa >= 0 ? dano - this.defesa : randomInt(1, 4);
        this.vida -= danoTotal;
        
        if(this.vida <= 0){
            this.morrer();
            return;
        }
        else{
            exibirDano(danoTotal);
        }
          
        iniciarContador(this.intervalo, this.ataque);
    }

    morrer(){
        if(this.recompensa != null){
            let tipo = this.recompensa.tipo;
            let quantidade = this.recompensa.quantidade;
            addReward(tipo, quantidade);
            mostrarRecompensas(tipo, quantidade);
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

function thereAreEnemies(){
    return INIMIGOS_ARRAY.length == 0;
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

