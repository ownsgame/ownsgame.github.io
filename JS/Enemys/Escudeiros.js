class Escudeiros extends Inimigo {
    constructor(id, elemento) {
        super(id, elemento);     
        this.movimento();
        
        this.direcaoY = 1;   
    }

    movimento() {
        this.ultimoTempo = 0;
        this.acumulador = 0;
        this.loopMovimento = this.loopMovimento.bind(this);
        requestAnimationFrame(this.loopMovimento);
    }

    loopMovimento(tempoAtual) {
        if (!this.ultimoTempo) {
            this.ultimoTempo = tempoAtual;
        }

        const delta = tempoAtual - this.ultimoTempo;
        this.ultimoTempo = tempoAtual;
        this.acumulador += delta;

        if (this.acumulador >= 1000) {
            this.mover();
            this.acumulador = 0;
        }

        requestAnimationFrame(this.loopMovimento);
    }

    mover() {
        if (!this.estaEmCombate()) {
            const posicoes = this.getPosicao();
            const x = posicoes.x;
            const y = posicoes.y;

            const diagonais = [
                { dx: -1, dy: -1 },
                { dx:  1, dy: -1 },
                { dx: -1, dy:  1 },
                { dx:  1, dy:  1 }
            ];

            const possiveis = diagonais.filter(d => {
                const nx = x + d.dx;
                const ny = y + d.dy;
                return nx >= 1 && nx <= 5 && ny >= 1 && ny <= 5;
            });

            if (possiveis.length === 0) return;

            const escolha = possiveis[Math.floor(Math.random() * possiveis.length)];

            const novoX = x + escolha.dx;
            const novoY = y + escolha.dy;

            this.elemento.style.transform = `scaleX(${escolha.dx})`;
            this.atualizarPos(novoX, novoY);
            setTileEnemyToogle(x, y, novoX, novoY, false);
        }
    }


    static gerarInimigos(quantidade) {
        const posicoes = [];

        for (let x = 1; x <= 5; x++) {
            for (let y = 1; y <= 5; y++) {
                posicoes.push({ x, y });
            }
        }

        for (let i = posicoes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [posicoes[i], posicoes[j]] = [posicoes[j], posicoes[i]];
        }

        for (let i = 0; i < quantidade && i < posicoes.length; i++) {
            const { x, y } = posicoes[i];

            let novoInimigoEl = document.createElement("img");
            let novoInimigo = new Escudeiros("escudeiros", novoInimigoEl);

            Inimigo.setThisGrid(novoInimigo, novoInimigoEl, x, y);
        }
    }
}

