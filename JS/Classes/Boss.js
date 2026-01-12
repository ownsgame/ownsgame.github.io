const SALA = getPlace("camaraCentral");

marcarSala(SALA.link);
setBackground(SALA.background);
desenharGrade("ceramica", false);

class Boss {
    constructor(id){
        const DATA = getBoss(id);
        this.vida = DATA.vida;
        this.vidaInicial = DATA.vida;
        this.dano = DATA.ataque;
        this.defesa = DATA.defesa;
        this.nome = DATA.nome;
        this.sprites = DATA.sprites;
        this.estado = 0;
        this.x = 2;
        this.y = 3;
        this.movendo = false;
        this.inicializarElemento();
        this.elemento.onclick = () => this.clique();
    }

    inicializarElemento(){
        const bossEl = document.createElement("img");
        this.elemento = bossEl;
        this.elemento.src = this.sprites[0][0];
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

        this.intervaloMovimento = setInterval(() => {
            this.x = vetor[indexMovimento][0];
            this.y = vetor[indexMovimento][1];

            this.atualizarPos(vetor[indexMovimento][0], vetor[indexMovimento][1]);
            indexMovimento++;

            if(indexMovimento >= vetor.length){
                clearInterval(this.intervaloMovimento);
                this.intervaloMovimento = null;
                this.movendo = false;
            }
        }, intervalo);
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
        this.elemento.remove();
    }

    modoAlerta(){
        setInterval(()=>{
            this.atacar();
        }, 1200);
    }

    atacar(){
        const PLAYER = getObjectPlayer();
        const PLAYER_DIR = PLAYER.getPosicao();

        if(generalColision(this.x, PLAYER_DIR.x, this.y, PLAYER_DIR.y, 2, 1, 2, 1)){
            PLAYER.tomarDano(this.dano);
        }
    }
}

let boss = new Boss(1);

let movimentos = [[4,4], [3,4], [2,4], [1, 4], [1, 3], [1, 2], [1, 1],
                  [2,1], [3,1], [4,1], [4,2], [4,3], [4,4]
];

boss.mover(movimentos, 500);