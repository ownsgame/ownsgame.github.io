const PLACES = [
    {
        id: "mirrorroom",
        nome: "Reino Dos Espelhos",
        isDungeon: true,
        haveChests: true,
        sprite: "Sprites/Places/MirrorRoom-capa.svg",
        link: "mirrorRoom.html", 
        baus: ["Sprites/WorkBanks/Chests/cl-mirror.svg", "Sprites/WorkBanks/Chests/co-mirror.svg"], 
        recompensas: 
        { 
            moeda: 54,
            frutaCoracao: 24,
            frutaEnergia: 22,
        },

        inimigos: ["ghost"],
        background: "Sprites/Ground/mirrorroom_background.svg",
    },
    {
        id: "camaraCentral",
        nome: "Camara Central",
        link: "camaraCentral.html", 
        background: "Sprites/Ground/ceramica_background.svg",
        isDungeon: false,
        haveChests: false,
    },
]

function getPlace(id){
    const place = PLACES.find(p => p.id === id);
    return place ? place : null;
}