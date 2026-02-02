class Napolitanos extends Inimigo {
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

        if (this.acumulador >= 250) {
            this.mover();
            this.acumulador = 0;
        }

        requestAnimationFrame(this.loopMovimento);
    }

    mover() {
        if (!this.estaEmCombate()) {
            const pos = this.getPosicao();
            let novoX = pos.x;
            let novoY = pos.y;

            if (randomBool()) {
                const movimentos = [];

                if (pos.x > 1) movimentos.push({ x: pos.x - 1, y: pos.y });
                if (pos.x < 5) movimentos.push({ x: pos.x + 1, y: pos.y });
                if (pos.y > 1) movimentos.push({ x: pos.x, y: pos.y - 1 });
                if (pos.y < 5) movimentos.push({ x: pos.x, y: pos.y + 1 });

                const escolha = movimentos[Math.floor(Math.random() * movimentos.length)];
                novoX = escolha.x;
                novoY = escolha.y;
            } else {
                const PLAYER = getObjectPlayer();
                const pPos = PLAYER.getPosicao();

                const dx = pPos.x - pos.x;
                const dy = pPos.y - pos.y;

                if (Math.abs(dx) > Math.abs(dy)) {
                    novoX += dx > 0 ? 1 : -1;
                } else if (dy !== 0) {
                    novoY += dy > 0 ? 1 : -1;
                }

                novoX = Math.max(1, Math.min(5, novoX));
                novoY = Math.max(1, Math.min(5, novoY));
            }

            this.elemento.style.transform = `scaleX(${novoY - pos.y || 1})`;
            this.atualizarPos(novoX, novoY);
            setTileEnemyToogle(pos.x, pos.y, novoX, novoY, false);
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
            let novoInimigo = new Napolitanos("napolitanos", novoInimigoEl);
            Inimigo.setThisGrid(novoInimigo, novoInimigoEl, x, y);
        }
    }
}

