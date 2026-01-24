class Player{
    constructor(elemento, sprite, Dados) {
        this.elemento = elemento;
        this.sprite = sprite;

        this.vida = (Dados.vida + Dados.vidaSum) * Dados.vidaMult;
        this.vidaInicial = this.vida;
        this.defesa = (Dados.defesa + Dados.defesaSum) * Dados.defesaMult;
        this.ataque = (Dados.ataque + Dados.ataqueSum) * Dados.ataqueMult;

        this.tempoEspera = Dados.tempoEspera;
        this.podeAtaca = true;
        this.morto = false;

        this.inicializarElemento();
    }

    inicializarElemento() {
        this.elemento.src = `../${this.sprite}`;
        this.elemento.classList.add("player", "tamPadrao", "layerTres");
        this.elemento.id = "jogador"; 
        posicionarGrid(this.elemento, 1, 1);
        fixarAoConteiner(this.elemento);
    }

    getElemento(){
        return this.elemento;
    }
    getAtaque(){
        return this.ataque;
    }
    podeAtacar(){
        return this.podeAtaca;
    }

    bloquearAtaque(mult = 1){
        if(this.podeAtaca){
            this.podeAtaca = false;
        }

        animarBarraTempo(this.tempoEspera * 1000 * mult);

        setTimeout(()=>{
            this.podeAtaca = true;
        }, this.tempoEspera * 1000 * mult);
    }

    getPosicao() {
        return {
        x: parseInt(this.elemento.style.gridRow),
        y: parseInt(this.elemento.style.gridColumn)
        };
    }

    getPixelPosicao(){
        const tamanhos = getTamanhosGrid();

        const xGrid = parseInt(this.elemento.style.gridRow);
        const yGrid = parseInt(this.elemento.style.gridColumn);

        const px = tamanhos.gridOffsetX + (yGrid - 1) * tamanhos.tileLarg + tamanhos.tileLarg / 2;
        const py = tamanhos.gridOffsetY + (xGrid - 1) * tamanhos.tileAlt + tamanhos.tileAlt / 2;

        return { px, py };
    }

    getPixelLimites(){
        const tamanhos = getTamanhosGrid();

        const xGrid = parseInt(this.elemento.style.gridRow);
        const yGrid = parseInt(this.elemento.style.gridColumn);

        const centroX = tamanhos.gridOffsetX + (yGrid - 1) * tamanhos.tileLarg + tamanhos.tileLarg / 2;
        const centroY = tamanhos.gridOffsetY + (xGrid - 1) * tamanhos.tileAlt + tamanhos.tileAlt / 2;

        const meiaLarg = tamanhos.tileLarg / 2;
        const meiaAlt = tamanhos.tileAlt / 2;

        return {
            left: centroX - meiaLarg,
            right: centroX + meiaLarg,
            top: centroY - meiaAlt,
            bottom: centroY + meiaAlt
        };
    }

    getMorto(){
        return this.morto;
    }

    mover(x, y){
        this.elemento.style.gridRow = x;
        this.elemento.style.gridColumn = y;
    }

    tomarDano(dano){
        if(this.morto) return;

        let danoReal = dano - this.defesa;

        if(danoReal < 1){
            danoReal = randomInt(1, 3);
        }

        this.vida -= danoReal;

        if(this.vida > 0){
            picarRed();
            exibirDano(danoReal, 1);
            atualizarVida(this.vida, this.vidaInicial);
        } else {
            this.vida = 0;
            this.morto = true;
            atualizarVida(this.vida, this.vidaInicial);
            fimDeJogo();
        }
    }

    recuperarVida(quantidade){
        if(this.vida == this.vidaInicial){
            console.log("Faz nada");
        }
        else if(this.vida + quantidade > this.vidaInicial){
            this.vida = this.vidaInicial;
        }
        else{
            this.vida += quantidade;
        }
        atualizarVida(this.vida, this.vidaInicial);
    }
}




