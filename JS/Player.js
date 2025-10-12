class Player{
    constructor(vida, elemento, sprite, defesa) {
        this.vida = vida;
        this.defesa = defesa
        this.elemento = elemento;
        this.sprite = sprite;
        this.ataque = 20;
        this.esperaAtaque = 4;
        this.podeAtaca = true;
        this.morto = false;

        this.inicializarElemento();
    }

    inicializarElemento() {
        this.elemento.src = this.sprite;
        this.elemento.classList.add("jogador", "tamPadrao");
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
    bloquearAtaque(){
        if(this.podeAtaca){
            this.podeAtaca = false;
        }
        
    }

    getPosicao() {
        return {
        x: parseInt(this.elemento.style.gridRow),
        y: parseInt(this.elemento.style.gridColumn)
        };
    }

    getMorto(){
        return this.morto;
    }

    mover(x, y){
        this.elemento.style.gridRow = x;
        this.elemento.style.gridColumn = y;
        if (typeof globalThis.atualizarCoordenadas === "function") {
            atualizarCoordenadas(parseInt(this.elemento.style.gridRow), parseInt(this.elemento.style.gridColumn));
        }
    }

    tomarDano(dano){
        if(!this.morto){
            this.vida -= (dano - this.defesa);
            picarRed();
            exibirDano((dano - this.defesa), 1);
            if(this.vida >= 0){
                atualizarVida(this.vida);
            }
            if(this.vida <= 0){
                this.morto = true;
                fimDeJogo();
            }
        }
    }
}




