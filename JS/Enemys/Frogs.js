class Frogs extends Inimigo {
    constructor(id, elemento, direcao) {
        super(id, elemento);
        this.movimento();
        
        this.direcao = direcao;
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

        if (this.acumulador >= 280) {
            this.mover();
            this.acumulador = 0;
        }

        requestAnimationFrame(this.loopMovimento);
    }

    mover() {
        if (!this.estaEmCombate()) {
            let posicoes = this.getPosicao();
            let cordX = posicoes.x;
            let cordY = posicoes.y;

            let novaPos;

            if (this.direcao == 0) {
                do {
                    novaPos = randomInt(1, 5);
                } while (novaPos === cordX);

                cordX = novaPos;
            } else {
                do {
                    novaPos = randomInt(1, 5);
                } while (novaPos === cordY);

                cordY = novaPos;
            }

            this.atualizarPos(cordX, cordY);
            setTileEnemyToogle(posicoes.x, posicoes.y, cordX, cordY, false);
        }
    }

    static gerarInimigos() {
        let direcao = randomInt(0, 1);

        for (let i = 0; i < 5; i++) {
            let rd = randomBool();

            if(rd){
                let novoInimigoEl = document.createElement("img");
                let cordX = i + 1;
                let cordY = randomInt(1, 5);

                if(direcao == 0){
                    cordX = randomInt(1, 5);
                    cordY = i + 1;
                }
                
                let novoInimigo = new Frogs("frogs", novoInimigoEl, direcao);
                Inimigo.setThisGrid(novoInimigo, novoInimigoEl, cordX, cordY);
            }   
        }
    }
}

