class Troncos extends Inimigo {
    constructor(id, elemento) {
        super(id, elemento);        
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
            let rd = randomBool();

            if(rd){
                novoInimigoEl.style.transform = "scaleX(-1)";
            }
            
            let novoInimigo = new Troncos("troncos", novoInimigoEl);

            Inimigo.setThisGrid(novoInimigo, novoInimigoEl, x, y);
        }
    }
}

