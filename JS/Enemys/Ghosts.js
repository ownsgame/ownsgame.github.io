
class Ghosts extends Inimigo {
    constructor(elemento, sprite, vida, defesa, ataque, recompensa) {
        super(elemento, sprite, vida, defesa, ataque, recompensa);
        this.movimento();
    }

    atualizarPos(x, y) {
        this.elemento.style.gridRow = x;
        this.elemento.style.gridColumn = y;
    }

    movimento() {
        setInterval(() => { this.mover() }, 500);
    }

    mover() {
        if (!this.estaEmCombate()) {
            let posicoes = this.getPosicao();
            let cordX = posicoes.x;
            let cordY = posicoes.y;

            const dir = randomBool();

            if (dir) {
                if (cordY + 1 < 6) {
                    if (!getTileEnemy(cordX, cordY + 1, false)) {
                        cordY += 1;
                    }
                    else if (cordY - 1 > 0) {
                        if (!getTileEnemy(cordX, cordY - 1, false)) {
                            cordY -= 1;
                        }
                    }
                }
            }
            else {
                if (cordY - 1 > 0) {
                    if (!getTileEnemy(cordX, cordY - 1, false)) {
                        cordY -= 1;
                    }
                    else if (cordY + 1 < 6) {
                        if (!getTileEnemy(cordX, cordY + 1, false)) {
                            cordY += 1;
                        }
                    }
                }
            }

            this.atualizarPos(cordX, cordY);
            setTileEnemyToogle(posicoes.x, posicoes.y, cordX, cordY, false);
        }
    }

    static gerarInimigos() {
        for (let i = 0; i < 5; i++) {
            let rd = randomBool();

            if(rd){
                let novoInimigoEl = document.createElement("img");
                novoInimigoEl.classList.add("inimigo", "tamPadrao");

                let cordX = i + 1;
                let cordY = randomInt(1, 5);

                posicionarGrid(novoInimigoEl, cordX, cordY);
                setTileEnemy(true, cordX, cordY, false);
                
                let vidaEnemy = randomInt(40, 50);
                let defesaEnemy = randomInt(5, 15);
                let ataqueEnemy = randomInt(10, 30);

                const GHOST_REWARDS = {
                    moeda: 50,
                    frutaCoracao: 25,
                    frutaEnergia: 23,
                    espadaFantasma: 2, 
                }

                let recompensaEscolhida = sortearItem(GHOST_REWARDS);
                let quant = getRewardValue(recompensaEscolhida);

                let recompensa = {
                    tipo: recompensaEscolhida,
                    quantidade: quant,
                }

                let novoInimigo = new Ghosts(novoInimigoEl, "Sprites/Enemys/ghost.svg", vidaEnemy, defesaEnemy, ataqueEnemy, recompensa);
                fixarAoConteiner(novoInimigoEl);
                INIMIGOS_ARRAY.push(novoInimigo);
            }   
        }
    }
}

