const SPRITES_ANIM_GHOST = [
    [
        "Sprites/Enemys/ghost[0][0].svg",
        "Sprites/Enemys/ghost[0][1].svg",
        "Sprites/Enemys/ghost[0][2].svg",
    ],
];

class Ghosts extends Inimigo {
    constructor(elemento, sprite, vida, defesa, ataque, recompensa) {
        super(elemento, sprite, vida, defesa, ataque, recompensa);
        this.movimento();
        this.animar(SPRITES_ANIM_GHOST[0]);
        this.direcaoY = 1;
    }

    atualizarPos(x, y) {
        this.elemento.style.gridRow = x;
        this.elemento.style.gridColumn = y;
    }


    animar(vetor) {
        if (this.intervaloAnimacao) clearInterval(this.intervaloAnimacao);

        let index = 0;
        this.intervaloAnimacao = setInterval(() => {
            this.setSprite(vetor[index]);
            index = (index + 1) % vetor.length;
        }, 250);
    }

    mudarAnimacao(vetorNovo) {
        if (this.intervaloAnimacao) {
            clearInterval(this.intervaloAnimacao);
            this.intervaloAnimacao = null;
        }

        this.animar(vetorNovo);
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
                
                let vidaEnemy = randomInt(15, 30);
                let defesaEnemy = randomInt(0, 5);
                let ataqueEnemy = randomInt(10, 25);

                const GHOST_REWARDS = {
                    moeda: 15,
                    frutaCoracao: 22,
                    frutaEnergia: 13,
                    espadaFantasma: 50, 
                }

                let recompensaEscolhida = sortearItem(GHOST_REWARDS);
                let quant = getRewardValue(recompensaEscolhida);

                let recompensa = {
                    tipo: recompensaEscolhida,
                    quantidade: quant,
                }

                let novoInimigo = new Ghosts(novoInimigoEl, "Sprites/Enemys/ghost.svg", vidaEnemy, defesaEnemy, ataqueEnemy, recompensa);
                Inimigo.setThisGrid(novoInimigo, novoInimigoEl, cordX, cordY);
                
            }   
        }
    }
}

