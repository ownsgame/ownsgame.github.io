const PLACES = [
    {
        id: "mirrorroom",
        nome: "Reino Dos Espelhos",
        capitulo: 1,
        isDungeon: true,
        haveChests: true,
        sprite: "Sprites/Places/MirrorRoom-capa.svg",
        link: "mirrorRoom.html", 
        baus: ["Sprites/WorkBanks/Chests/cl-mirror.svg", "Sprites/WorkBanks/Chests/co-mirror.svg"], 
        recompensas: 
        { 
            moeda: 64,
            frutaCoracao: 15,
            frutaEnergia: 21,
        },

        inimigos: ["ghost"],
        background: "Sprites/Ground/mirrorroom_background.svg",
    },
    {
        id: "camaraCentral",
        nome: "Camara Central",
        capitulo: 1,
        link: "camaraCentral.html", 
        background: "Sprites/Ground/ceramica_background.svg",
        isDungeon: false,
        haveChests: false,
    },
    {
        id: "laboratorio",
        nome: "Laboratorio Do Palacio",
        capitulo: 1,
        link: "laboratorio.html", 
        background: "Sprites/Ground/ceramica_background.svg",
        isDungeon: false,
        haveChests: false,
    },
    {
        id: "biblioteca",
        nome: "Biblioteca Real Own",
        capitulo: 1,
        link: "biblioteca.html", 
        background: "Sprites/Ground/ceramica_background.svg",
        isDungeon: false,
        haveChests: false,
    },
    {
        id: "antesala",
        nome: "Entrada Do Palacio",
        capitulo: 1,
        link: "anteSala.html", 
        background: "Sprites/Ground/ceramica_background.svg",
        isDungeon: false,
        haveChests: false,
    },
    {
        id: "cidadeOwn",
        nome: "Cidade Own",
        capitulo: 1,
        link: "cidade.html", 
        sprite: "Sprites/Places/Cidade-Own.svg",
        background: "Sprites/Ground/noite_cidade.svg",
        isDungeon: false,
        haveChests: false,
    },
    {
        id: "dojo",
        nome: "Dojo do Mestre Wei",
        capitulo: 1,
        link: "dojo.html", 
        background: "Sprites/Ground/dojo.svg",
        isDungeon: false,
        haveChests: false,
    },
    {
        id: "flora",
        nome: "Reino Flora",
        capitulo: 1,
        link: "reinoFlora.html", 
        background: "Sprites/Ground/colina_background.svg",
        isDungeon: false,
        haveChests: false,
    },
    {
        id: "florestaProfunda",
        nome: "Floresta Profunda",
        capitulo: 1,
        link: "florestaProfunda.html", 
        background: "Sprites/Ground/floresta.svg",
        isDungeon: false,
        haveChests: false,
    },
    {
        id: "colinaDancante",
        nome: "Colina das Flores que Dancam",
        capitulo: 1,
        isDungeon: true,
        haveChests: true,
        sprite: "Sprites/Places/Colina-Dancante.svg",
        link: "colinaDancante.html", 
        baus: ["Sprites/WorkBanks/Chests/cl-wood.svg", "Sprites/WorkBanks/Chests/co-mirror.svg"], 
        recompensas: 
        { 
            moeda: 54,
            frutaCoracao: 24,
            frutaEnergia: 22,
        },

        inimigos: ["flow"],
        background: "Sprites/Ground/colina_background.svg",
    },
    {
        id: "pantano",
        nome: "Pantano",
        capitulo: 1,
        isDungeon: true,
        haveChests: true,
        sprite: "Sprites/Places/Colina-Dancante.svg",
        link: "pantano.html", 
        baus: ["Sprites/WorkBanks/Chests/cl-wood.svg", "Sprites/WorkBanks/Chests/co-mirror.svg"], 
        recompensas: 
        { 
            moeda: 54,
            frutaCoracao: 24,
            frutaEnergia: 22,
        },

        inimigos: ["frogs"],
        background: "Sprites/Ground/floresta.svg",
    },
    {
        id: "florestaMorta",
        nome: "Floresta Morta",
        capitulo: 1,
        isDungeon: true,
        haveChests: true,
        sprite: "Sprites/Places/Colina-Dancante.svg",
        link: "florestaMorta.html", 
        baus: ["Sprites/WorkBanks/Chests/cl-wood.svg", "Sprites/WorkBanks/Chests/co-mirror.svg"], 
        recompensas: 
        { 
            moeda: 54,
            frutaCoracao: 24,
            frutaEnergia: 22,
        },

        inimigos: ["frogs"],
        background: "Sprites/Ground/floresta.svg",
    },
]

function getPlace(id){
    const place = PLACES.find(p => p.id === id);
    return place ? place : null;
}