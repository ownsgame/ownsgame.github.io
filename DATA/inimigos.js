const INIMIGOS_LIST = 
[
    {
        id: "ghost",
        nome: "Ghosts",
        maxVida: 25,
        minVida: 15,
        maxDefesa: 5,
        minDefesa: 0,
        maxAtaque: 25,
        minAtaque: 10,

        recompensas: {
            moeda: 15,
            frutaCoracao: 22,
            frutaEnergia: 13,
            espadaFantasma: 50, 
        },

        pontosVitais: 5,
        sprites: [
            [
                "Sprites/Enemys/ghost[0][0].svg",
                "Sprites/Enemys/ghost[0][1].svg",
                "Sprites/Enemys/ghost[0][2].svg",
            ],
        ],
        hover: "Sprites/Enemys/ghost.svg",
        intervalo: 5,
    }
];

function getInimigoById(id){
    const INIMIGO = INIMIGOS_LIST.find(i => i.id === id);
    return INIMIGO ? INIMIGO : null;
}