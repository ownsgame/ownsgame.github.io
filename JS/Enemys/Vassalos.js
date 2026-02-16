class Vassalos extends Inimigo {
    constructor(id, elemento) {
        super(id, elemento);     
        this.movimento();
        
        this.direcaoY = 1;   
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

            if (cordY + this.direcaoY > 5) {
                this.direcaoY = -1;
            }

            if (cordY + this.direcaoY < 1) {
                this.direcaoY = 1;
            }

            cordY += this.direcaoY;
            
            this.elemento.style.transform = `scaleX(${this.direcaoY})`;
            this.atualizarPos(cordX, cordY);
            setTileEnemyToogle(posicoes.x, posicoes.y, cordX, cordY, false);
        }
    }

    static gerarInimigos() {
        let totalGerados = 0;

        for (let i = 0; i < 5; i++) {
            if (totalGerados >= 3) break;

            let rd = randomBool();

            if (rd) {
                let novoInimigoEl = document.createElement("img");

                let cordX = i + 1;
                let cordY = randomInt(1, 5);

                let novoInimigo = new Vassalos("vassalos", novoInimigoEl);
                Inimigo.setThisGrid(novoInimigo, novoInimigoEl, cordX, cordY);

                totalGerados++;
            }
        }
    }
}

