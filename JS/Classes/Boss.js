class Boss {
    constructor(id){
        const DATA = getBoss(id);
        this.id = id;
        this.vida = DATA.vida;
        this.vidaInicial = DATA.vida;
        this.dano = DATA.ataque;
        this.defesa = DATA.defesa;
        this.nome = DATA.nome;
        this.sprites = DATA.sprites;
        this.estado = 0;
        this.x = 2;
        this.y = 3;
        this.podeAtacar = true,
        this.movendo = false;
        this.intervaloAtaque = null;
        this.timeoutAtaque = null;
        this.inicializarElemento();
        this.elemento.onclick = () => this.clique();
    }

    inicializarElemento(){
        const bossEl = document.createElement("img");
        this.elemento = bossEl;
        this.animacao = new AnimatedEntity(this.elemento, this.sprites, false, 120);
        this.elemento.classList.add("boss");

        posicionarGrid(this.elemento, this.x, this.y, 2, 2);
        fixarAoConteiner(this.elemento);
        atualizarVidaChefe(this.vida, this.vidaInicial);
        this.modoAlerta();
    }

    mover(vetor, intervalo){
        if(this.movendo) return;

        this.movendo = true;
        let indexMovimento = 0;
        let ultimoTempo = performance.now();

        const animar = (tempoAtual) => {
            if(!this.movendo) return;

            if(tempoAtual - ultimoTempo >= intervalo){
                this.x = vetor[indexMovimento][0];
                this.y = vetor[indexMovimento][1];

                this.atualizarPos(this.x, this.y);
                indexMovimento++;
                ultimoTempo = tempoAtual;

                if(indexMovimento >= vetor.length){
                    this.movendo = false;
                    return;
                }
            }

            this.intervaloMovimento = requestAnimationFrame(animar);
        };

        this.intervaloMovimento = requestAnimationFrame(animar);
    }

    moverLoop(vetor, intervalo){
        if(this.movendo) return;

        this.movendo = true;
        let indexMovimento = 0;
        let ultimoTempo = performance.now();

        const animar = (tempoAtual) => {
            if(!this.movendo) return;

            if(tempoAtual - ultimoTempo >= intervalo){
                this.x = vetor[indexMovimento][0];
                this.y = vetor[indexMovimento][1];

                this.atualizarPos(this.x, this.y);
                indexMovimento++;
                ultimoTempo = tempoAtual;

                if(indexMovimento >= vetor.length){
                    indexMovimento = 0;
                }
            }

            this.intervaloMovimento = requestAnimationFrame(animar);
        };

        this.intervaloMovimento = requestAnimationFrame(animar);
    }

    pararMovimento(){
        if(this.intervaloMovimento){
            cancelAnimationFrame(this.intervaloMovimento);
            this.intervaloMovimento = null;
            this.movendo = false;
        }
    }

    atualizarPos(x, y){
        posicionarGrid(this.elemento, x, y, 2, 2);
    }

    clique(){
        const PLAYER = getObjectPlayer();

        if(PLAYER.podeAtacar()){
            const DANO = PLAYER.getAtaque();
            PLAYER.bloquearAtaque(2);
            this.sofrerDano(DANO);
        }
    }

    sofrerDano(dano){
        let danoTotal = dano - this.defesa >= 0 ? dano - this.defesa : randomInt(1, 4);
        this.vida -= danoTotal;
        exibirDano(danoTotal, 0);
        atualizarVidaChefe(this.vida, this.vidaInicial);

        if(this.vida <= 0){
            this.morrer();
            return;
        }
    }

    morrer(){
        if (this.intervaloAtaque) {
            clearInterval(this.intervaloAtaque);
            this.intervaloAtaque = null;
        }

        if (this.timeoutAtaque) {
            clearTimeout(this.timeoutAtaque);
            this.timeoutAtaque = null;
        }

        this.pararMovimento();
        this.elemento.remove();
        derrotarBOSS(this.id);
    }

    modoAlerta(){
        this.intervaloAtaque = setInterval(() => {
            this.atacar();
        }, 200);
    }

    atacar(){
        const PLAYER = getObjectPlayer();
        const PLAYER_DIR = PLAYER.getPosicao();

        if (
            generalColision(this.x, PLAYER_DIR.x, this.y, PLAYER_DIR.y, 2, 1, 2, 1) &&
            this.podeAtacar
        ) {
            PLAYER.tomarDano(this.dano);
            this.podeAtacar = false;

            this.timeoutAtaque = setTimeout(() => {
                this.podeAtacar = true;
            }, 1000);
        }
    }
}
