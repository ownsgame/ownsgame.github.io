class GuerreiroHellas extends Inimigo {
    constructor(id, elemento) {
        super(id, elemento);     
        this.movimento();
        
        this.direcaoX = 1;   
    }

    movimento() {
        this.ultimoTempo = 0;
        this.acumulador = 0;
        this.loopMovimento = this.loopMovimento.bind(this);
        requestAnimationFrame(this.loopMovimento);
    }

    loopMovimento(tempoAtual) {
        if (!this.ultimoTempo) {
            this.ultimoTempo = tempoAtual;
        }

        const delta = tempoAtual - this.ultimoTempo;
        this.ultimoTempo = tempoAtual;
        this.acumulador += delta;

        if (this.acumulador >= 500) {
            this.mover();
            this.acumulador = 0;
        }

        requestAnimationFrame(this.loopMovimento);
    }

    mover() {
        if (!this.estaEmCombate()) {
            const posicoes = this.getPosicao();
            let cordX = posicoes.x;
            let cordY = posicoes.y;

            if (cordX + this.direcaoX > 5) {
                this.direcaoX = -1;
            }

            if (cordX + this.direcaoX < 1) {
                this.direcaoX = 1;
            }

            cordX += this.direcaoX;
            
            this.elemento.style.transform = `scaleX(${this.direcaoX})`;
            this.atualizarPos(cordX, cordY);
            setTileEnemyToogle(posicoes.x, posicoes.y, cordX, cordY, false);
        }
    }

    static gerarInimigos() {
        for (let i = 0; i < 5; i++) {
            let rd = randomBool();

            if(rd){
                let novoInimigoEl = document.createElement("img");

                let cordX = randomInt(1, 5);
                let cordY = i + 1;

                let novoInimigo = new GuerreiroHellas("guerreiroHellas", novoInimigoEl);
                Inimigo.setThisGrid(novoInimigo, novoInimigoEl, cordX, cordY);
            }   
        }
    }
}

