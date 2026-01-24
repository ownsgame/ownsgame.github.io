class AnimatedEntity {
    constructor(elemento, sprites, hover, intervalo){
        this.elemento = elemento;
        this.sprites = sprites;
        this.hover = hover;
        this.intervalo = intervalo;

        this.pause = false;
        this.indexAnimacao = 0;
        this.indexSprite = 0;

        this.ultimoTempo = 0;
        this.acumulador = 0;
        this.rafId = null;

        this.loop = this.loop.bind(this);
        requestAnimationFrame(this.loop);
        this.funcHover();
    }

    trocarSprite(sprite){
        if(this.pause){
            this.elemento.src = `../${this.hover}`;
            return;
        }

        this.elemento.src = `../${sprite}`;
    }

    loop(tempoAtual){
        if(!this.ultimoTempo){
            this.ultimoTempo = tempoAtual;
        }

        const delta = tempoAtual - this.ultimoTempo;
        this.ultimoTempo = tempoAtual;

        if(!this.pause){
            this.acumulador += delta;

            if(this.acumulador >= this.intervalo){
                const sprite = this.sprites[this.indexAnimacao][this.indexSprite];
                this.indexSprite =
                    (this.indexSprite + 1) % this.sprites[this.indexAnimacao].length;

                this.trocarSprite(sprite);
                this.acumulador = 0;
            }
        }

        this.rafId = requestAnimationFrame(this.loop);
    }

    trocarAnimacao(indice){
        if(indice > this.sprites.length - 1) return;

        this.indexAnimacao = indice;
        this.indexSprite = 0;
        this.acumulador = 0;
    }

    pausar(){
        this.pause = true;
    }

    despausar(){
        this.pause = false;
    }

    funcHover(){
        this.elemento.addEventListener("mousemove", () => {
            this.pausar();
        });

        this.elemento.addEventListener("mouseleave", () => {
            this.despausar();
        });
    }

    destruir(){
        cancelAnimationFrame(this.rafId);
    }
}
