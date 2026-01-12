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
        setInterval(() => { this.mover() }, 300);
    }

    mover() {
        if (!this.estaEmCombate()) {
            let posicoes = this.getPosicao();
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

