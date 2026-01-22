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
        maxVida: 210,
        minVida: 115,
        maxDefesa: 20,
        minDefesa: 5,
        maxAtaque: 30,
        minAtaque: 20,

        recompensas: {
            moeda: 50,
            petala: 50,
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
            moeda: 60,
            espinho: 40,
        },

        pontosVitais: 5,
        sprites: [
            [
                "Sprites/Enemys/1/flowy.svg",
            ],
        ],
        hover: "Sprites/Enemys/1/flowy.svg",
        intervalo: 3,
    },
    {
        id: "frogs",
        nome: "Giant Frogs",
        capitulo: 1,
        maxVida: 240,
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
            ],
        ],
        hover: "Sprites/Enemys/1/giant_frog.svg",
        intervalo: 3,
    },
    {
        id: "troncos",
        nome: "Troncos",
        capitulo: 1,
        maxVida: 300,
        minVida: 100,
        maxDefesa: 10,
        minDefesa: 5,
        maxAtaque: 30,
        minAtaque: 20,

        recompensas: {
            moeda: 50,
            madeira: 50,
        },

        pontosVitais: 5,
        sprites: [
            [
                "Sprites/Enemys/1/tronco.svg",
            ],
        ],
        hover: "Sprites/Enemys/1/tronco.svg",
        intervalo: 3,
    },
    {
        id: "sadFlowers",
        nome: "Sad Flowers",
        capitulo: 1,
        maxVida: 300,
        minVida: 200,
        maxDefesa: 20,
        minDefesa: 10,
        maxAtaque: 50,
        minAtaque: 30,

        recompensas: {
            moeda: 70,
            polen: 30,
        },

        pontosVitais: 5,
        sprites: [
            [
                "Sprites/Enemys/1/sad_flower.svg",
            ],
        ],
        hover: "Sprites/Enemys/1/sad_flower.svg",
        intervalo: 2,
    },
];

function getInimigoById(id){
    const INIMIGO = INIMIGOS_LIST.find(i => i.id === id);
    return INIMIGO ? INIMIGO : null;
}