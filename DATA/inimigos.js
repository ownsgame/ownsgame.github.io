const INIMIGOS_LIST = 
[
    {
        id: "ghost",
        nome: "Ghosts",
        capitulo: 1,
        maxVida: 20,
        minVida: 10,
        maxDefesa: 5,
        minDefesa: 0,
        maxAtaque: 25,
        minAtaque: 10,

        recompensas: {
            moeda: 10,
            ectoplasma: 90, 
        },

        pontosVitais: 5,
        sprites: [
            [
                "Sprites/Enemys/ghost[0][0].svg",
                "Sprites/Enemys/ghost[0][1].svg",
                "Sprites/Enemys/ghost[0][2].svg",
                "Sprites/Enemys/ghost[0][1].svg",
            ],
        ],
        hover: "Sprites/Enemys/ghost.svg",
        intervalo: 5,
    },
    {
        id: "flow",
        nome: "Flows",
        capitulo: 1,
        maxVida: 110,
        minVida: 70,
        maxDefesa: 20,
        minDefesa: 5,
        maxAtaque: 30,
        minAtaque: 20,

        recompensas: {
            petala: 65,
            moeda: 35,
        },

        pontosVitais: 5,
        sprites: [
            [
                "Sprites/Enemys/1/flow[0][0].svg",
                "Sprites/Enemys/1/flow[0][1].svg",
                "Sprites/Enemys/1/flow[0][0].svg",
                "Sprites/Enemys/1/flow[0][2].svg",
                "Sprites/Enemys/1/flow[0][0].svg",
                "Sprites/Enemys/1/flow[0][1].svg",
            ],
        ],
        hover: "Sprites/Enemys/1/flow.svg",
        intervalo: 5,
    },
    {
        id: "flowy",
        nome: "Flowys",
        capitulo: 1,
        maxVida: 200,
        minVida: 120,
        maxDefesa: 6,
        minDefesa: 2,
        maxAtaque: 35,
        minAtaque: 15,

        recompensas: {
            espinho: 90,
            moeda: 10,
        },

        pontosVitais: 5,
        sprites: [
            [
                "Sprites/Enemys/1/flowy[0][0].svg",
                "Sprites/Enemys/1/flowy[0][1].svg",
                "Sprites/Enemys/1/flowy[0][0].svg",
                "Sprites/Enemys/1/flowy[0][2].svg",
                "Sprites/Enemys/1/flowy[0][0].svg",
                "Sprites/Enemys/1/flowy[0][3].svg",
                "Sprites/Enemys/1/flowy[0][0].svg",
                "Sprites/Enemys/1/flowy[0][2].svg",
            ],
        ],
        hover: "Sprites/Enemys/1/flowy.svg",
        intervalo: 2,
    },
    {
        id: "frogs",
        nome: "Giant Frogs",
        capitulo: 1,
        maxVida: 170,
        minVida: 120,
        maxDefesa: 15,
        minDefesa: 5,
        maxAtaque: 40,
        minAtaque: 20,

        recompensas: {
            moeda: 100,
        },

        pontosVitais: 5,
        sprites: [
            [
                "Sprites/Enemys/1/giant_frog.svg",
                "Sprites/Enemys/1/giant_frog[0][1].svg",
                "Sprites/Enemys/1/giant_frog.svg",
                "Sprites/Enemys/1/giant_frog[0][2].svg",
                "Sprites/Enemys/1/giant_frog[0][1].svg",
            ],
        ],
        hover: "Sprites/Enemys/1/giant_frog.svg",
        intervalo: 3,
    },
    {
        id: "troncos",
        nome: "Troncos",
        capitulo: 1,
        maxVida: 200,
        minVida: 100,
        maxDefesa: 10,
        minDefesa: 5,
        maxAtaque: 30,
        minAtaque: 20,

        recompensas: {
            madeira: 95,
            moeda: 5,
        },

        pontosVitais: 5,
        sprites: [
            [
                "Sprites/Enemys/1/tronco.svg",
            ],
        ],
        hover: "Sprites/Enemys/1/tronco.svg",
        intervalo: 2,
    },
    {
        id: "sadFlowers",
        nome: "Sad Flowers",
        capitulo: 1,
        maxVida: 250,
        minVida: 180,
        maxDefesa: 20,
        minDefesa: 10,
        maxAtaque: 50,
        minAtaque: 30,

        recompensas: {
            polen: 80,
            moeda: 20,
        },

        pontosVitais: 5,
        sprites: [
            [
                "Sprites/Enemys/1/sad_flower[0][0].svg",
                "Sprites/Enemys/1/sad_flower[0][1].svg",
                "Sprites/Enemys/1/sad_flower[0][2].svg",
                "Sprites/Enemys/1/sad_flower[0][3].svg",
            ],
        ],
        hover: "Sprites/Enemys/1/sad_flower.svg",
        intervalo: 1,
    },
];

function getInimigoById(id){
    const INIMIGO = INIMIGOS_LIST.find(i => i.id === id);
    return INIMIGO ? INIMIGO : null;
}