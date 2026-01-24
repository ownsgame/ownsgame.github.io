class FlyingEntity {
    constructor(id, pos){
        const dados = getVoador(id);

        this.x = pos[0];
        this.y = pos[1];
        this.velocidade = dados.velocidade;

        this.intervalo = null;
        this.tempo = dados.tempo;
        this.tempoVida = dados.tempoVida;
        this.tamanho = dados.tamanho;
        this.sprite = dados.sprite;
        this.dano = dados.dano;
        this.podeAtacar = true;
        this.intervaloAtaque = null;
        this.elemento = null;
        this.direcaoX = -1;
        this.setElemento();
        this.verificarTempoVida();
    }

    setElemento(){
        const elemento = document.createElement("img");
        this.elemento = elemento;
        this.elemento.classList.add("voador", `voador${this.tamanho}`);
        this.elemento.src = `../${this.sprite}`;
        
        this.elemento.style.transform = `scaleX(${this.direcaoX})`;
        this.elemento.style.top = this.y + "px";
        this.elemento.style.left = this.x + "px";
        document.body.appendChild(this.elemento);
    }

    mover(x, y){
        this.x = x;
        this.y = y;
        this.elemento.style.top = this.y + "px";
        this.elemento.style.left = this.x + "px";
        this.elemento.style.transform = `scaleX(${this.direcaoX})`;
    }

    seguir(alvoX, alvoY){
        const dx = alvoX - this.x;
        const dy = alvoY - this.y;

        if (dx < 0) {
            this.direcaoX = 1;
        } else if (dx > 0) {
            this.direcaoX = -1;
        }

        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist === 0) return;

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

    modoAlerta(){
        this.intervaloAtaque = setInterval(() => {
            this.atacar();
        }, 200);
    }

    verificarTempoVida(){
        if(this.tempoVida != false){
            setTimeout(() => {
                this.morrer();
            }, this.tempoVida);
        }
    }

    morrer(){
        this.elemento.style.opacity = 0;
        setTimeout(()=>{
            this.intervalo = null;
            this.tempoVida = false;
            this.elemento.remove();
        }, 100);
    }
}

