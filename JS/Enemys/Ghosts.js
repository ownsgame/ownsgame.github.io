class Ghosts extends Inimigo {
    constructor(id, elemento) {
        super(id, elemento);
        this.movimento();
        
        this.direcaoY = 1;
    }

    atualizarPos(x, y) {
    this.elemento.style.gridRow = x;
    this.elemento.style.gridColumn = y;
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

        if (this.acumulador >= 400) {
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

            if (cordY + this.direcaoY > 5) {
                this.direcaoY = -1;
            }

            if (cordY + this.direcaoY < 1) {
                this.direcaoY = 1;
            }

            cordY += this.direcaoY;

            this.atualizarPos(cordX, cordY);
            setTileEnemyToogle(posicoes.x, posicoes.y, cordX, cordY, false);
        }
    }

    static gerarInimigos() {
        for (let i = 0; i < 5; i++) {
            let rd = randomBool();

            if(rd){
                let novoInimigoEl = document.createElement("img");

                let cordX = i + 1;
                let cordY = randomInt(1, 5);

                let novoInimigo = new Ghosts("ghost", novoInimigoEl);
                Inimigo.setThisGrid(novoInimigo, novoInimigoEl, cordX, cordY);
            }   
        }
    }
}

