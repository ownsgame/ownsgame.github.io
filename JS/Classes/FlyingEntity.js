class FlyingEntity {
    constructor(w, h, x, y, tempo, velocidade){
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        this.velocidade = velocidade;
        this.intervalo = null;
        this.tempo = tempo;
        const elemento = document.createElement("div");
        this.elemento = elemento;
        this.elemento.classList.add("voador");
        this.elemento.style.width = this.w + "px";
        this.elemento.style.height = this.h + "px";
        this.elemento.style.backgroundColor = "red";
        this.elemento.style.top = this.y + "px";
        this.elemento.style.left = this.x + "px";
        document.body.appendChild(this.elemento);
    }

    mover(x, y){
        this.x = x;
        this.y = y;
        this.elemento.style.top = this.y + "px";
        this.elemento.style.left = this.x + "px";
    }

    seguir(alvoX, alvoY){
        const dx = alvoX - this.x;
        const dy = alvoY - this.y;

        const dist = Math.sqrt(dx * dx + dy * dy);

        if(dist === 0) return;

        const velocidade = this.velocidade ?? 2;

        this.x += (dx / dist) * velocidade;
        this.y += (dy / dist) * velocidade;

        this.mover(this.x, this.y);
    }


    perseguirJogador(){
        const PLAYER = getObjectPlayer();

        this.intervalo = setInterval(()=>{
            const POS_PX_PLAYER = PLAYER.getPixelPosicao();
            this.seguir(POS_PX_PLAYER.px, POS_PX_PLAYER.py);
        }, this.tempo);
    }
}

let entidade = new FlyingEntity(100, 100, 1, 1, 200, 25);
entidade.perseguirJogador();