const PLACES = [
    {
        id: "mirrorroom",
        nome: "Reino Dos Espelhos",
        isDungeon: true,
        haveChests: true,
        sprite: "Sprites/Places/MirrorRoom-capa.svg",
        link: "MirrorRoom.html", 
        baus: ["Sprites/WorkBanks/Chests/cl-mirror.svg", "Sprites/WorkBanks/Chests/co-mirror.svg"], 
        recompensas: 
        { 
            moeda: 54,
            frutaCoracao: 24,
            frutaEnergia: 22,
        }
        
    },
]

function getPlace(id){
    const place = PLACES.find(p => p.id === id);
    return place ? place : null;
}