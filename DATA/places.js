const PLACES = [
    {
        id: "mirrorroom",
        nome: "Reino Dos Espelhos",
        sprite: "Sprites/Places/MirrorRoom-capa.svg",
        link: "MirrorRoom.html",       
    },
]

function getPlace(id){
    const place = PLACES.find(p => p.id === id);
    return place ? place : null;
}