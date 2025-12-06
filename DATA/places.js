const PLACES = [
    {
        id: "mirrorroom",
        nome: "Reino Dos Espelhos",
        sprite: "Sprites/Places/MirrorRoom-capa.svg",
        link: "MirrorRoom.html",  
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