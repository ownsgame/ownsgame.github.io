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
        maxVida: 90,
        minVida: 80,
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
        maxVida: 110,
        minVida: 80,
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
        maxVida: 130,
        minVida: 90,
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
        maxVida: 140,
        minVida: 110,
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
                "Sprites/Enemys/1/tronco[0][0].svg",
                "Sprites/Enemys/1/tronco[0][1].svg",
                "Sprites/Enemys/1/tronco[0][2].svg",
                "Sprites/Enemys/1/tronco[0][1].svg",
                "Sprites/Enemys/1/tronco[0][3].svg",
            ],
        ],
        hover: "Sprites/Enemys/1/tronco.svg",
        intervalo: 2,
    },
    {
        id: "sadFlowers",
        nome: "Sad Flowers",
        capitulo: 1,
        maxVida: 280,
        minVida: 140,
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
        intervalo: 1.5,
    },
    {
        id: "vassalos",
        nome: "Vassalos Hellanos",
        capitulo: 2,
        maxVida: 180,
        minVida: 140,
        maxDefesa: 30,
        minDefesa: 20,
        maxAtaque: 55,
        minAtaque: 35,

        recompensas: {
            moeda: 100,
        },

        pontosVitais: 5,
        sprites: [
            [
                "Sprites/Enemys/2/vassalos[0][0].svg",
                "Sprites/Enemys/2/vassalos[0][1].svg",
                "Sprites/Enemys/2/vassalos[0][0].svg",
                "Sprites/Enemys/2/vassalos[0][2].svg",
            ],
        ],
        hover: "Sprites/Enemys/2/vassalos.svg",
        intervalo: 2,
    },
    {
        id: "escudeiros",
        nome: "Escudeiros Hellanos",
        capitulo: 2,
        maxVida: 140,
        minVida: 120,
        maxDefesa: 50,
        minDefesa: 35,
        maxAtaque: 55,
        minAtaque: 45,

        recompensas: {
            moeda: 100,
        },

        pontosVitais: 5,
        sprites: [
            [
                "Sprites/Enemys/2/escudeiro[0][0].svg",
                "Sprites/Enemys/2/escudeiro[0][1].svg",
                "Sprites/Enemys/2/escudeiro[0][0].svg",
                "Sprites/Enemys/2/escudeiro[0][2].svg",
            ],
        ],
        hover: "Sprites/Enemys/2/escudeiro.svg",
        intervalo: 2,
    },
    {
        id: "guerreiroHellas",
        nome: "Guerreiro Hellano",
        capitulo: 2,
        maxVida: 250,
        minVida: 210,
        maxDefesa: 20,
        minDefesa: 10,
        maxAtaque: 75,
        minAtaque: 45,

        recompensas: {
            moeda: 100,
        },

        pontosVitais: 5,
        sprites: [
            [
                "Sprites/Enemys/2/guerreiro[0][0].svg",
                "Sprites/Enemys/2/guerreiro[0][1].svg",
                "Sprites/Enemys/2/guerreiro[0][0].svg",
                "Sprites/Enemys/2/guerreiro[0][2].svg",

            ],
        ],
        hover: "Sprites/Enemys/2/guerreiro.svg",
        intervalo: 3.5,
    },
    {
        id: "napolitanos",
        nome: "Napolitanos Hellanos",
        capitulo: 2,
        maxVida: 310,
        minVida: 250,
        maxDefesa: 30,
        minDefesa: 20,
        maxAtaque: 60,
        minAtaque: 50,

        recompensas: {
            moeda: 100,
        },

        pontosVitais: 5,
        sprites: [
            [
                "Sprites/Enemys/2/napolitano[0][0].svg",
                "Sprites/Enemys/2/napolitano[0][1].svg",
            ],
        ],
        hover: "Sprites/Enemys/2/napolitano.svg",
        intervalo: 3.5,
    },
    {
        id: "ogros",
        nome: "Ogros Mercenários",
        capitulo: 2,
        maxVida: 325,
        minVida: 280,
        maxDefesa: 20,
        minDefesa: 10,
        maxAtaque: 60,
        minAtaque: 45,

        recompensas: {
            moeda: 100,
        },

        pontosVitais: 5,
        sprites: [
            [
                "Sprites/Enemys/2/ogro[0][0].svg",
                "Sprites/Enemys/2/ogro[0][1].svg",
            ],
        ],
        hover: "Sprites/Enemys/2/ogro.svg",
        intervalo: 3,
    },
];

function getInimigoById(id){
    const INIMIGO = INIMIGOS_LIST.find(i => i.id === id);
    return INIMIGO ? INIMIGO : null;
}