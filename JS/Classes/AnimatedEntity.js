class AnimatedEntity {
    constructor(elemento, sprites, hover, intervalo){
        this.elemento = elemento;
        this.sprites = sprites;
        this.intervalo = intervalo;
        this.hover = hover;
        this.pause = false;
        this.indexAnimacao = 0;
        this.indexSprite = 0;

        this.loop();
        this.funcHover();
    }

    trocarSprite(sprite){
        if(this.pause){
            this.elemento.src = this.hover;
            return;
        }

        this.elemento.src = sprite;
    }

    loop(){
        setInterval(() => {
            if(!this.pause){
                let sprite = this.sprites[this.indexAnimacao][this.indexSprite];
                this.indexSprite = (this.indexSprite + 1) % this.sprites[this.indexAnimacao].length;
                this.trocarSprite(sprite);
            }
        }, this.intervalo);
    }

    trocarAnimacao(indice){
        if(indice > this.sprites.length - 1) return;

        this.indexAnimacao = indice;
        this.indexSprite = 0;
    }

    pausar(){
        this.pause = true;
    }

    despausar(){
        this.pause = false;
    }

    funcHover(){
        this.elemento.addEventListener("mousemove", ()=> {
            this.pausar();
        });

        this.elemento.addEventListener("mouseleave", ()=> {
            this.despausar();
        });
    }
}