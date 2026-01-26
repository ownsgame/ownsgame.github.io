class FlyingEntity {
    constructor(id, pos){
        const dados = getVoador(id);

        this.x = pos[0];
        this.y = pos[1];
        this.velocidade = dados.velocidade * fatorVelocidadeTela();

        this.podeAtacar = true,
        this.intervalo = null;
        this.tempo = dados.tempo;
        this.tempoVida = dados.tempoVida;
        this.tamanho = dados.tamanho;
        this.dano = dados.dano;
        this.sprites = dados.sprites;

        this.podeAtacar = true;
        this.intervaloAtaque = null;
        this.elemento = null;
        this.direcaoX = -1;
        this.setElemento();
        this.verificarTempoVida();
        this.modoAlerta();
    }

    setElemento(){
        const elemento = document.createElement("img");
        this.elemento = elemento;
        this.elemento.classList.add("voador", `voador${this.tamanho}`);
        this.animacao = new AnimatedEntity(this.elemento, this.sprites, this.sprites[0][0], 150);
                
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

    getLimites(){
        const largura = this.elemento.offsetWidth;
        const altura = this.elemento.offsetHeight;

        return {
            left: this.x,
            top: this.y,
            right: this.x + largura,
            bottom: this.y + altura
        };
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

        this.ultimoTempo = 0;
        this.acumulador = 0;
        this.rafId = null;

        this.loopPerseguicao = this.loopPerseguicao.bind(this, PLAYER);
        requestAnimationFrame(this.loopPerseguicao);
    }

    loopPerseguicao(PLAYER, tempoAtual){
        if(!this.ultimoTempo){
            this.ultimoTempo = tempoAtual;
        }

        const delta = tempoAtual - this.ultimoTempo;
        this.ultimoTempo = tempoAtual;
        this.acumulador += delta;

        if(this.acumulador >= this.tempo){
            const POS_PX_PLAYER = PLAYER.getPixelPosicao();
            this.seguir(POS_PX_PLAYER.px, POS_PX_PLAYER.py);
            this.acumulador = 0;
        }

        this.rafId = requestAnimationFrame(this.loopPerseguicao);
    }

    modoAlerta(){
        this.intervaloAtaque = setInterval(() => {
            this.atacar();
        }, 200);
    }

    atacar(){
        const PLAYER = getObjectPlayer();
        const PLAYER_LIM = PLAYER.getPixelLimites();
        const THIS_LIM = this.getLimites();

        if (
            colisionPixel(PLAYER_LIM, THIS_LIM) &&
            this.podeAtacar
        ) {
            PLAYER.tomarDano(this.dano);
            this.podeAtacar = false;

            this.timeoutAtaque = setTimeout(() => {
                this.podeAtacar = true;
            }, 1000);
        }
    }

    verificarTempoVida(){
        if(this.tempoVida != false){
            setTimeout(() => {
                this.morrer();
            }, this.tempoVida);
        }
    }

    pararPerseguicao(){
        cancelAnimationFrame(this.rafId);
        this.rafId = null;
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

