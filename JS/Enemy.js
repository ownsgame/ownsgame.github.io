const INIMIGOS_ARRAY = [];

class Inimigo{
    constructor(elemento, sprite, vida, defesa, ataque){
        this.vida = vida;
        this.defesa = defesa;
        this.ataque = ataque;
        this.elemento = elemento;
        this.emCombate = false;
        this.time = 5;
        this.setSprite(sprite);
        this.modoAlerta();
    }

    setSprite(sprite){
        this.elemento.src = sprite;
    }
    estaEmCombate(){
        return this.emCombate;
    }

    getVida(){
        return this.vida;
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
        this.elemento.remove();
        const indice = INIMIGOS_ARRAY.indexOf(this);
        ChamadorAcao.mudarEstado(0);
        if(indice !== -1){
            INIMIGOS_ARRAY.splice(indice, 1);
        }
    }

    remover(){
        this.elemento.remove();
        const indice = INIMIGOS_ARRAY.indexOf(this);

        if(indice !== -1){
            INIMIGOS_ARRAY.splice(indice, 1);
        }
    }
}


function gerarInimigos(qntd, sprite) {
    const maxInimigos = 10;
    const quantidade = Math.min(qntd, maxInimigos);

    const posicoesOcupadas = [];

    for (let i = 0; i < quantidade; i++) {
        let novoInimigoEl = document.createElement("img");
        novoInimigoEl.classList.add("inimigo", "tamPadrao");

        let cordX, cordY;
        let posValida = false;

        while (!posValida) {
            cordX = randomInt(1, 5);
            cordY = randomInt(1, 5);
            posValida = !posicoesOcupadas.some(pos => pos.x === cordX && pos.y === cordY);
        }

        posicoesOcupadas.push({ x: cordX, y: cordY });

        posicionarGrid(novoInimigoEl, cordX, cordY);
        let novoInimigo = new Inimigo(novoInimigoEl, sprite, 100, 10, 10);
        fixarAoConteiner(novoInimigoEl);
        INIMIGOS_ARRAY.push(novoInimigo);
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

