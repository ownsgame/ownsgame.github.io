const INIMIGOS_LIST = 
[
    {
        id: "ghost",
        nome: "Ghosts",
        capitulo: 1,
        maxVida: 25,
        minVida: 15,
        maxDefesa: 5,
        minDefesa: 0,
        maxAtaque: 25,
        minAtaque: 10,

        recompensas: {
            moeda: 44,
            frutaCoracao: 20,
            ectoplasma: 36, 
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
    },
    {
        id: "flow",
        nome: "Flows",
        capitulo: 1,
        maxVida: 210,
        minVida: 115,
        maxDefesa: 20,
        minDefesa: 5,
        maxAtaque: 30,
        minAtaque: 20,

        recompensas: {
            moeda: 100,
        },

        pontosVitais: 5,
        sprites: [
            [
                "Sprites/Enemys/1/flow.svg",
            ],
        ],
        hover: "Sprites/Enemys/1/flow.svg",
        intervalo: 5,
    },
    {
        id: "flowy",
        nome: "Flowys",
        capitulo: 1,
        maxVida: 300,
        minVida: 120,
        maxDefesa: 5,
        minDefesa: 1,
        maxAtaque: 35,
        minAtaque: 15,

        recompensas: {
            moeda: 100,
        },

        pontosVitais: 5,
        sprites: [
            [
                "Sprites/Enemys/1/flowy.svg",
            ],
        ],
        hover: "Sprites/Enemys/1/flowy.svg",
        intervalo: 3,
    }
];

function getInimigoById(id){
    const INIMIGO = INIMIGOS_LIST.find(i => i.id === id);
    return INIMIGO ? INIMIGO : null;
}